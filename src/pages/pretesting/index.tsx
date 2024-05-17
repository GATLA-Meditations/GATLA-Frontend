import Button from '@/components/Button';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image'; // Import the Image component from next/image
import './style.css';
import image from '../../assets/images/prepagesimg.png';

const PreTesting = () => {
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            height={'100vh'}
            justifyContent={'center'}
        >
            <Image src={image} width={200} alt="pretesting" className="image" />
            <Typography className="title">Antes de Meditar...</Typography>
            <Typography className="text">
                Quisieramos pedirle que complete este breve cuestionario con
                completa honestidad.
            </Typography>
            <Box margin={'3vh'}>
                <Button variant="green" size="medium">
                    Empezar
                </Button>
            </Box>
        </Box>
    );
};

export default PreTesting;
