import React from 'react';
import TopBar from '@/components/TopBar';
import './styles.css';
import '../../app/globals.css';
import MeditationEntryPoint from '@/components/MeditationEntryPoint';
import NavBar from '@/components/NavBar';
import Box from '@mui/material/Box';
import AchievementsHomeMenu from '@/components/AchievementsHomeMenu';

const HomeScreen = () => {
    return (
        <>
            <Box height={'100vh'} className={'home-div'}>
                <TopBar amtNotifications={0} selected={''} />
                <AchievementsHomeMenu days={1} minutes={1} goals={1} />
                <MeditationEntryPoint />
                <Box className="content" />
                <NavBar value={0} />
            </Box>
        </>
    );
};

export default HomeScreen;
