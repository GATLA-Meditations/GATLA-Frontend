import { Box, Typography } from '@mui/material';
import React from 'react';
import Button from '../Button';

interface TreatmentInfo {
    name: string;
    progress: number;
}

const MeditationEntryPoint = ({ name, progress }: TreatmentInfo) => {
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
                    {name}
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
                    {progress}%
                </Typography>
            </Box>
            <Box margin={'2vh'}>
                <Button variant="green" size="small">
                    Comenzar
                </Button>
            </Box>
        </Box>
    );
};

export default MeditationEntryPoint;
