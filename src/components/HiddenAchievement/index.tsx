import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';
import './styles.css';
import logo from '@/assets/HiddenAchievement/HiddenAchievement.png';
import Image from 'next/image';

const HiddenAchievement = () => {
    return (
        <Box className={'achievement-card'}>
            <Box>
                <Image src={logo} alt="logo" width={100} height={100} />
                <Typography className={'text'}>Logro oculto</Typography>
            </Box>
        </Box>
    );
};
export default HiddenAchievement;
