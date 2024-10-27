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
    checkForAfterModuleQuestions,
    getActualModule,
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

interface CongratsInfo {
    userName: string;
    userAvatarUrl: string;
    achievementName: string;
}

const congratsInfoMock: CongratsInfo[] = [
    {
        userName: 'gtl-135',
        userAvatarUrl:
            'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
        achievementName: '¡Completó la primer semana de meditación!',
    },
    {
        userName: 'gtl-135',
        userAvatarUrl:
            'https://media.discordapp.net/attachments/1232427585737195630/1247661124543844476/blank-profile-picture-973460_960_720.png?ex=66696838&is=666816b8&hm=d38422eae0d1a478d8233dc4cc63a92e564f3104b13e8b4e17fa99ddf656cbcc&=&format=webp&quality=lossless&width=662&height=662',
        achievementName: '¡Logró una meditación completa!',
    },
];

const HomeScreen = ({ showToast }: WithToastProps) => {
    const [actualModule, setActualModule] = useState({} as EntryPointData);
    const { fcmToken, notificationPermissionStatus } = useFcmToken();
    const [congratsOptions, setCongratsOptions] =
        useState<CongratsInfo[]>(congratsInfoMock);
    const router = useRouter();
    const [isTimeForAfterModuleQuestions, setIsTimeForAfterModuleQuestions] =
        useState(false);

    const [isLoading, setIsLoading] = useState(false);

    logRocket.init('5snaie/renacentia-dev');

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const moduleData = await getActualModule();
                setActualModule(moduleData);
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

    const handleOnCloseCongrats = (index: number) => {
        setCongratsOptions(congratsOptions.filter((_, i) => i !== index));
    };

    if (isLoading || !actualModule.name) {
        return <Loader />;
    }

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
                {true && <QuestionModalManager />}
                <ModuleSeparator
                    text={'Logros de compañeros'}
                    separatorColor={'white'}
                    textColor={'white'}
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
                    {congratsOptions.map((congratsOption, index) => {
                        return (
                            <CongratsCard
                                key={index}
                                userName={congratsOption.userName}
                                userAvatarUrl={congratsOption.userAvatarUrl}
                                achievementName={congratsOption.achievementName}
                                onClose={() => handleOnCloseCongrats(index)}
                            />
                        );
                    })}
                </div>
                <Box className="content" />
                <NavBar value={0} />
            </Box>
        </>
    );
};

export default WithAuth(WithToast(HomeScreen));
