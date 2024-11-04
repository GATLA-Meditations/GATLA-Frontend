import React, { useEffect, useState } from 'react';
import TopBar from '@/components/TopBar';
import './styles.css';
import MeditationEntryPoint, {
    EntryPointData,
} from '@/components/MeditationEntryPoint';
import '../../app/globals.css';
import NavBar from '@/components/NavBar';
import Box from '@mui/material/Box';
import AchievementsHomeMenu from '@/components/AchievementsHomeMenu';
import {
    checkForAfterModuleQuestions, congratulateFriend,
    getActualModule, getFriendsAchievements,
    getCommunityStatus,
    updateCommunityStatus,
} from '@/service/apis';
import WithAuth from '@/components/WithAuth';
import { useRouter } from 'next/router';
import WithToast, { WithToastProps } from '@/hoc/withToast';
import Loader from '@/components/Loader';
import logRocket from 'logrocket';
import { getMessaging, onMessage } from 'firebase/messaging';
import { firebaseApp } from '@/service/firebase';
import useFcmToken from '@/hooks/useFCMToken';
import QuestionModalManager from '@/components/QuestionModalManager';
import CongratsCard from '@/components/CongratsCard';
import ModuleSeparator from '@/components/ModuleSeparator';
import {FriendAchievement} from '@/util/types';
import {useGetProfileInfo} from '@/hooks/useGetProfileInfo';
import Help from '@/components/Help';
import { Switch, Typography } from '@mui/material';
import { Group } from '@mui/icons-material';


const HomeScreen = ({ showToast }: WithToastProps) => {
    const [actualModule, setActualModule] = useState({} as EntryPointData);
    const {profile} = useGetProfileInfo();
    const [friendsAchievements, setFriendsAchievements] =
        useState<FriendAchievement[]>([]);
    const router = useRouter();
    const [isTimeForAfterModuleQuestions, setIsTimeForAfterModuleQuestions] =
        useState(false);
    const [isCommunityActivated, setIsCommunityActivated] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    logRocket.init('5snaie/renacentia-dev');

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const moduleData = await getActualModule();
                setActualModule(moduleData);
                const communityData = await getCommunityStatus();
                setIsCommunityActivated(communityData.isActivated);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }

        checkForToast().then();
        fetchData();
    }, []);

    useEffect(() => {
        async function isTimeForQuestions() {
            setIsLoading(true);
            try {
                const response = await checkForAfterModuleQuestions();
                setIsTimeForAfterModuleQuestions(response.isTime);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }

        isTimeForQuestions();
    }, []);

    useEffect(() => {
        async function fetchFriendsAchievements() {
            setIsLoading(true);
            try {
                const response = await getFriendsAchievements();
                setFriendsAchievements(response);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchFriendsAchievements();
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
            navigator.serviceWorker.register('/firebase-messaging-sw.js');
            const messaging = getMessaging(firebaseApp);
            const unsubscribe = onMessage(messaging, (payload) => {
                console.log('Foreground push notification received:', payload);
            });
            return () => {
                unsubscribe();
            };
        }
    }, []);

    const checkForToast = async () => {
        const { message, type } = router.query as Record<
            string,
            'success' | 'error'
        >;
        if (message && type) {
            showToast(message, type);
        }
    };

    const handleOnClickCongrats = async (friendId: string, description: string, index:number) => {
        try{
            setIsLoading(true);
            const response = await congratulateFriend(friendId, `${profile?.patientCode} dice: ¡Felicitaciones por haber ${description}!`);
            showToast('Felicitación enviada', 'success');
            handleOnCloseCongrats(index);
            return response.data;
        }catch (error){
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleOnCloseCongrats = (index: number) => {
        setFriendsAchievements(friendsAchievements.filter((_, i) => i !== index));
    };

    if (isLoading || !actualModule.name) {
        return <Loader />;
    }

    const handleCommunityActivation = async () => {
        try {
            await updateCommunityStatus(!isCommunityActivated);
            setIsCommunityActivated(!isCommunityActivated);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Box height={'100vh'} className={'home-div'}>
                <TopBar amtNotifications={0} selected={''} />
                <AchievementsHomeMenu />
                <ModuleSeparator
                    text={'Módulo actual'}
                    separatorColor={'white'}
                    textColor={'white'}
                />
                <Box
                    className="entry-point"
                    sx={{
                        maxWidth: '500px',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                    }}
                >
                    <MeditationEntryPoint
                        id={actualModule.id}
                        type={actualModule.type}
                        name={actualModule.name}
                        description={actualModule.description}
                        progress={actualModule.progress}
                    />
                </Box>
                {isTimeForAfterModuleQuestions && <QuestionModalManager />}
                {isCommunityActivated ? (
                    <>
                        <ModuleSeparator
                            text={'Logros de compañeros'}
                            separatorColor={'white'}
                            textColor={'white'}
                            helper={<Help text={'Aquí podras ver los logros de tus compañeros de camino'}/>}
                        />
                        <div
                            style={{
                                display: 'flex',
                                overflowX: 'scroll',
                                flexDirection: 'row',
                                boxSizing: 'border-box',
                                padding: '16px',
                                gap: '8px',
                                width: 'auto',
                            }}
                        >
                            {friendsAchievements.map((congrat, index) => {
                                return (
                                    <CongratsCard
                                        key={index}
                                        userName={congrat.user.patient_code}
                                        userAvatarUrl={congrat.user.image}
                                        achievementName={`¡Ha ${congrat.description}!`}
                                        onClick={() => handleOnClickCongrats(congrat.user.id, congrat.description, index)}
                                        onClose={() => handleOnCloseCongrats(index)}
                                    />
                                );
                            })}
                        </div>
                    </>
                ) : (
                    <>
                        <ModuleSeparator
                            text="Comunidad Renacentia"
                            separatorColor={'white'}
                            textColor={'white'}
                        />
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="space-between"
                            padding="16px"
                        >
                            <Typography color="white" fontSize={16}>
                                ¿Deseas activar comunidad renacentia?
                            </Typography>
                            <Switch
                                checked={isCommunityActivated}
                                onChange={handleCommunityActivation}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </Box>
                    </>
                )}
                <Box className="content" />
                <NavBar value={0} />
            </Box>
        </>
    );
};

export default WithAuth(WithToast(HomeScreen));
