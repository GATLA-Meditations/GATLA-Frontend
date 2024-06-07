import React, { useEffect, useState } from 'react';
import TopBar from '@/components/TopBar';
import ModuleSeparator from '@/components/ModuleSeparator';
import './styles.css';
import MeditationEntryPoint, {
    EntryPointData,
} from '@/components/MeditationEntryPoint';
import NavBar from '@/components/NavBar';
import Box from '@mui/material/Box';
import AchievementsHomeMenu from '@/components/AchievementsHomeMenu';
import { getActualModule, getUserStats } from '@/service/apis';

const HomeScreen = () => {
    const [actualModule, setActualModule] = useState({} as EntryPointData);
    const [days, setDays] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [goals, setGoals] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const moduleData = await getActualModule();
            setActualModule(moduleData);
        }

        fetchData();
    }, []);

    useEffect(() => {
        fetchStats();
    }, []);

    function convertMinutesToHours(minutes: number) {
        if (minutes > 60) {
            return Math.floor(minutes / 60);
        }
        return minutes;
    }

    async function fetchStats() {
        const stats = await getUserStats();
        setDays(stats.days);
        setMinutes(convertMinutesToHours(stats.minutes)); /**/
        setGoals(stats.goals);
    }

    return (
        <Box height={'100vh'} style={{ backgroundColor: 'var(--bg-color)' }}>
            <TopBar amtNotifications={0} selected={''} />
            <AchievementsHomeMenu days={days} minutes={minutes} goals={goals} />
            <Box display={'flex'} flexDirection={'column'} sx={{ gap: '3vh' }}>
                <ModuleSeparator
                    text={'Módulo actual'}
                    separatorColor={'#141418'}
                    textColor={'#141418'}
                />
                <MeditationEntryPoint
                    id={actualModule.id}
                    name={actualModule.name}
                    description={actualModule.description}
                    progress={actualModule.progress}
                />
            </Box>
            <Box className="content" />
            <NavBar value={0} />
        </Box>
    );
};

export default HomeScreen;
