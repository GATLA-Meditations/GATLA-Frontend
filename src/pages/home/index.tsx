import React from 'react';
import TopBar from '@/components/TopBar';
import ModuleSeparator from '@/components/ModuleSeparator';
import './styles.css';
import MeditationEntryPoint from '@/components/MeditationEntryPoint';
import NavBar from '@/components/NavBar';
import Box from '@mui/material/Box';

const HomeScreen = () => {
    return (
        <Box
            className="component"
            style={{ backgroundColor: 'var(--bg-color)' }}
        >
            <TopBar amtNotifications={0} selected={''} />
            <p>stats</p>
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
