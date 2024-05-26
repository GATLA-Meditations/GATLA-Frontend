import React from 'react';
import TopBar from '@/components/TopBar';
import ModuleSeparator from '@/components/ModuleSeparator';
import './styles.css';
import MeditationEntryPoint from '@/components/MeditationEntryPoint';
import NavBar from '@/components/NavBar';
import Box from '@mui/material/Box';
import AchievementsHomeMenu from '@/components/AchievementsHomeMenu';

const HomeScreen = () => {
    return (
        <Box height={'100vh'} style={{ backgroundColor: 'var(--bg-color)' }}>
            <TopBar amtNotifications={0} selected={''} />
            <AchievementsHomeMenu days={1} minutes={1} goals={1} />
            <ModuleSeparator
                text={'Módulo actual'}
                separatorColor={'#141418'}
                textColor={'#141418'}
            />
            <MeditationEntryPoint />
            <Box className="content" />
            <NavBar value={0} />
        </Box>
    );
};

export default HomeScreen;
