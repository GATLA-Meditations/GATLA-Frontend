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
import { getActualModule, getUserStats } from '@/service/apis';
import WithAuth from '@/components/WithAuth';
import { useRouter } from 'next/router';
import WithToast, { WithToastProps } from '@/hoc/withToast';
import Loader from '@/components/Loader';
import logRocket from 'logrocket';
import ObtainedRewardModal from '@/components/Modals/ObtainedRewardModal';

const HomeScreen = ({ showToast }: WithToastProps) => {
    const [actualModule, setActualModule] = useState({} as EntryPointData);
    const router = useRouter();
    const [days, setDays] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [goals, setGoals] = useState(0);

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

        showToast(
            '¡Ánimo en tu tratamiento!',
            'img',
            'https://ca.slack-edge.com/T010UBTUG4C-U06UB5DCRK4-b5743123495e-512'
        );
        checkForToast().then();

        fetchData();
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchStats();
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

    function convertMinutesToHours(minutes: number) {
        if (minutes > 60) {
            return Math.floor(minutes / 60);
        }
        return minutes;
    }

    async function fetchStats() {
        setIsLoading(true);
        try {
            const stats = await getUserStats();
            if (stats) {
                console.log(stats);
                setDays(stats.maxStreak ? stats.maxStreak : 0);
                setMinutes(
                    stats.totalWatchTime
                        ? convertMinutesToHours(stats.totalWatchTime)
                        : 0
                );
                setGoals(stats.goals ? stats.goals : 0);
            }
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <Box height={'100vh'} className={'home-div'}>
                <TopBar amtNotifications={0} selected={''} />
                <AchievementsHomeMenu
                    days={days}
                    minutes={minutes}
                    goals={goals}
                />
                <MeditationEntryPoint
                    id={actualModule.id}
                    type={actualModule.type}
                    name={actualModule.name}
                    description={actualModule.description}
                    progress={actualModule.progress}
                />
                <Box className="content" />
                <NavBar value={0} />
            </Box>
        </>
    );
};

export default WithAuth(WithToast(HomeScreen));
