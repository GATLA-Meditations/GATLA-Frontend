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

const HomeScreen = ({ showToast }: WithToastProps) => {
    const [actualModule, setActualModule] = useState({} as EntryPointData);
    const router = useRouter();
    const [days, setDays] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [goals, setGoals] = useState(0);

    const [isLoading, setIsLoading] = useState(false);

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
        const stats = await getUserStats();
        setDays(stats.days ? stats.days : 0);
        setMinutes(stats.minutes ? convertMinutesToHours(stats.minutes) : 0);
        setGoals(stats.goals ? stats.goals : 0);
        setIsLoading(false);
    }

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <Box height={'100vh'} className={'home-div'}>
                <TopBar amtNotifications={0} selected={''} />
                <AchievementsHomeMenu days={1} minutes={1} goals={1} />
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
