import { Box, Typography } from '@mui/material';
import React from 'react';
import Button from '../Button';

const MeditationEntryPoint = () => {
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            sx={{
                bgcolor: 'var(--secondary-100)',
                width: '90%',
                borderRadius: 3,
                margin: 'auto',
                boxShadow: 5,
                marginTop: 10,
                maxWidth: 400,
            }}
        >
            <Box
                display={'flex'}
                sx={{
                    bgcolor: 'var(--secondary-200)',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    height: 10,
                    padding: 2,
                }}
                marginBottom={3}
                alignItems={'center'}
            >
                <Typography
                    className="h5"
                    fontWeight={'bold'}
                    fontFamily={'var(--font-family)'}
                    sx={{ color: 'var(--secondary-700)' }}
                >
                    Meditemos
                </Typography>
            </Box>
            <Box
                display={'flex'}
                justifyContent={'space-around'}
                alignItems={'center'}
            >
                <Box
                    sx={{
                        bgcolor: 'var(--secondary-200)',
                        width: '80%',
                        borderRadius: 8,
                        height: 15,
                        position: 'relative',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            borderRadius: 'inherit',
                            height: '100%',
                            width: '75%',
                            bgcolor: 'var(--secondary-400)',
                        }}
                    ></Box>
                </Box>
                <Typography color={'var(--grey-500)'} fontWeight={'bold'}>
                    75%
                </Typography>
            </Box>
            <Box margin={2}>
                <Button variant="green" size="small">
                    Comenzar
                </Button>
            </Box>
        </Box>
    );
};

export default MeditationEntryPoint;
