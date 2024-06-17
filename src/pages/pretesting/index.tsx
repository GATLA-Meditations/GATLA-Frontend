import Button from '@/components/Button';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import './styles.css';
import image from '../../assets/images/prepagesimg.png';
import { useRouter } from 'next/router';
import WithAuth from '@/components/WithAuth';

const PreTesting = () => {
    const router = useRouter();

    const handleStart = () => {
        router.push('/test');
    };

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            height={'100vh'}
            justifyContent={'center'}
            style={{ backgroundColor: 'var(--secondary-100)' }}
        >
            <Image src={image} width={200} alt="pretesting" className="image" />
            <Typography className="title">Antes de Meditar...</Typography>
            <Typography className="text">
                Quisieramos pedirle que complete este breve cuestionario con
                completa honestidad.
            </Typography>
            <Box margin={'3vh'}>
                <Button variant="green" size="medium" onClick={handleStart}>
                    Empezar
                </Button>
            </Box>
        </Box>
    );
};

export default WithAuth(PreTesting);
