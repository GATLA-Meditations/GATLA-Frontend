import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import './styles.css';
import NavBar from '@/components/NavBar';
import Box from '@mui/material/Box';
import AchievementsFilter from '@/components/AchievementsFilter';
import Achievements from '@/components/Achievements';
import '../../app/globals.css';

const AchievementsScreen = () => {
    const [option, setOption] = useState<string>('');

    const achievements = [
        { title: '1 Semana', type: 'week' },
        { title: '1 Dia', type: 'streak' },
        { title: '2 Semana', type: 'week' },
        { title: '2 Dia', type: 'streak' },
        { title: '3 Semana', type: 'week' },
        { title: '3 Dia', type: 'streak' },
        { title: '4 Semana', type: 'week' },
        { title: '4 Dia', type: 'streak' },
        { title: '5 Semana', type: 'week' },
        { title: '5 Dia', type: 'streak' },
        { title: '6 Semana', type: 'week' },
        { title: '6 Dia', type: 'streak' },
    ];

    // useEffect(() => {
    //     getAllAchievements();
    // })

    const handleAchievementChange = (event: string) => {
        setOption(event);
    };

    return (
        <Box height={'100vh'} style={{ backgroundColor: 'var(--bg-color)' }}>
            <TopBar amtNotifications={0} selected={''} />
            <div className={'button_content'}>
                <AchievementsFilter
                    achievements={['week1', 'week2']}
                    handleAchievementChange={handleAchievementChange}
                    selectedValue={option}
                />
            </div>
            <Achievements achievements={achievements} />
            <NavBar value={2} />
        </Box>
    );
};

export default AchievementsScreen;
