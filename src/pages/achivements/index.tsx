import React from 'react';
import TopBar from '@/components/TopBar';
import './styles.css';
import NavBar from '@/components/NavBar';
import Box from '@mui/material/Box';
import AchievementsFilter from '@/components/AchievementsFilter';

const HomeScreen = () => {
    return (
        <Box height={'100vh'} style={{ backgroundColor: 'var(--bg-color)' }}>
            <TopBar amtNotifications={0} selected={''} />
            <div className={'container'}>
                {/*<AchievementsFilter achievements={['week1', 'week2']} handleAchievementChange={handleAchievementChange("test")} selectedValue={'week1'}/>*/}
            </div>
            <NavBar value={2} />
        </Box>
    );
};

export default HomeScreen;
