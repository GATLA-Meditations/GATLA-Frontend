import React, {useEffect, useState} from 'react';
import TopBar from '@/components/TopBar';
import './styles.css';
import MeditationEntryPoint, {
    EntryPointData,
} from '@/components/MeditationEntryPoint';
import '../../app/globals.css';
import NavBar from '@/components/NavBar';
import Box from '@mui/material/Box';
import AchievementsHomeMenu from '@/components/AchievementsHomeMenu';
import {getActualModule, getUserStats} from '@/service/apis';
import WithAuth from '@/components/WithAuth';
import {useRouter} from 'next/router';
import WithToast, {WithToastProps} from '@/hoc/withToast';
import Loader from '@/components/Loader';
import logRocket from 'logrocket';
import ObtainedRewardModal from '@/components/Modals/ObtainedRewardModal';

const HomeScreen = ({showToast}: WithToastProps) => {
    const [actualModule, setActualModule] = useState({} as EntryPointData);
    const router = useRouter();

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
            }
        }

        checkForToast().then();
        fetchData();
        setIsLoading(false);
    }, []);

    const checkForToast = async () => {
        const {message, type} = router.query as Record<
            string,
            'success' | 'error'
        >;
        if (message && type) {
            showToast(message, type);
        }
    };

    if (isLoading || !actualModule.name) {
        return <Loader/>;
    }

    return (
        <>
            <Box height={'100vh'} className={'home-div'}>
                <TopBar amtNotifications={0} selected={''} />
                <AchievementsHomeMenu />
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
                <Box className="content" />
                <NavBar value={0} />
            </Box>
        </>
    );
};

export default WithAuth(WithToast(HomeScreen));
