import {Box, Typography} from '@mui/material';
import React from 'react';
import {useRouter} from 'next/router';

export enum ModuleType {
    MEDITATION = 'MEDITATION',
    QUESTIONNAIRES = 'QUESTIONNAIRES',
}

export interface EntryPointData {
    id: string;
    type: ModuleType;
    name: string;
    description: string;
    progress: number;
}

const MeditationEntryPoint = ({
    id,
    name,
    type,
    description,
    progress,
}: EntryPointData) => {
    const router = useRouter();

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            sx={{
                bgcolor: 'var(--white)',
                borderRadius: 3,
                margin: '16px',
                maxWidth: '100%',
                '&:hover': {cursor: 'pointer'},
            }}
            justifyContent={'space-between'}
            onClick={() =>
                type === ModuleType.MEDITATION
                    ? router.push(`/module/${id}`)
                    : router.push('/pretesting')
            }
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
                        width: `${progress}%`,
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
                <Typography fontSize={'1.25rem'}>{name}</Typography>
            </Box>
        </Box>
    );
};

export default MeditationEntryPoint;
