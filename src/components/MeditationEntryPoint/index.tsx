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
                maxWidth: 400,
                '&:hover': { boxShadow: 10, cursor: 'pointer' },
            }}
            justifyContent={'space-between'}
        >
            <Box
                display={'flex'}
                sx={{
                    bgcolor: 'var(--secondary-200)',
                    borderTopLeftRadius: 'inherit',
                    borderTopRightRadius: 'inherit',
                    height: '3vh',
                    padding: '2vh',
                }}
                marginBottom={'2vh'}
                alignItems={'center'}
            >
                <Typography
                    className="h5 bold"
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
                        height: '2vh',
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
                <Typography className="body1 bold" color={'var(--grey-500)'}>
                    75%
                </Typography>
            </Box>
            <Box margin={'2vh'}>
                {/*<Link href="/test" style={{ textDecoration: 'none' }}>*/}
                <Button variant="green" size="small">
                    Comenzar
                </Button>
                {/*</Link>*/}
            </Box>
        </Box>
    );
};

export default MeditationEntryPoint;
