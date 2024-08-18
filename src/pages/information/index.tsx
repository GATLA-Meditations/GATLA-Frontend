import React from 'react';
import './styles.css';
import Box from '@mui/material/Box';
import '../../app/globals.css';
import NavBar from '@/components/NavBar';
import TopBar from '@/components/TopBar';
import Typography from '@mui/material/Typography';

const InformationScreen = () => {
    return (
        <Box height={'100vh'}>
            <TopBar amtNotifications={0} />
            <Box className="container-information">
                <Typography className="title-information">¿Quienes somos?</Typography>
                <Typography className="text-information">Renacentia es una web de meditacion para pacientes oncologicos en donde...</Typography>
            </Box>
            <NavBar value={0} />
        </Box>
    );
};

export default InformationScreen;
