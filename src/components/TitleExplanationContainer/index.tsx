import { Box, Typography } from '@mui/material';
import React from 'react';

interface TitleExplanationContainerProps {
    children: React.ReactNode;
    title: string;
    explainingText: string;
}

const TitleExplanationContainer = ({
    children,
    title,
    explainingText,
}: TitleExplanationContainerProps) => {
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            sx={{
                bgcolor: 'var(--primary-100)',
                borderRadius: 3,
                maxWidth: 400,
            }}
        >
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
                sx={{
                    bgcolor: 'var(--primary-200)',
                    borderTopLeftRadius: 'inherit',
                    borderTopRightRadius: 'inherit',
                    padding: '2vh',
                }}
            >
                <Typography className="h6 bold" color={'var(--primary-600)'}>
                    {title}
                </Typography>
                <Typography
                    className="body1bold"
                    color={'var(--primary-600)'}
                    padding={'1vh'}
                >
                    {explainingText}
                </Typography>
            </Box>
            <Box margin={'4vh'}>{children}</Box>
        </Box>
    );
};

export default TitleExplanationContainer;
