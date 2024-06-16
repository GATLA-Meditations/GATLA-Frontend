import { Box, Typography } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';

const MeditationEntryPoint = () => {
    const router = useRouter();

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            sx={{
                bgcolor: 'var(--white)',
                borderRadius: 3,
                margin: '16px',
                maxWidth: 400,
                '&:hover': { cursor: 'pointer' },
            }}
            justifyContent={'space-between'}
        >
            <Box
                display={'flex'}
                sx={{
                    backgroundImage:
                        'url("https://cnnespanol.cnn.com/wp-content/uploads/2022/06/220531190304-woman-meditation-stock-full-169-1.jpeg?quality=100&strip=info")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    borderTopLeftRadius: 'inherit',
                    borderTopRightRadius: 'inherit',
                    height: '10vh',
                    padding: '2vh',
                }}
                alignItems={'center'}
            ></Box>
            <Box alignItems={'center'}>
                <Box
                    sx={{
                        height: '0.5vh',
                        width: '75%',
                        bgcolor: 'var(--secondary-400)',
                    }}
                ></Box>
            </Box>
            <Box
                margin={'1.5vh'}
                alignItems={'center'}
                justifyContent={'space-between'}
                display={'flex'}
                flexDirection={'row'}
            >
                <Typography
                    fontSize={'1.25rem'}
                    size="small"
                    onClick={() => router.push('/module/moduleId1')}
                >
                    Meditemos
                </Typography>
            </Box>
        </Box>
    );
};

export default MeditationEntryPoint;
