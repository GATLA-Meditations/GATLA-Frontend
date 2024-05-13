import { Box, Typography } from '@mui/material';
import React from 'react';

const ModuleSeparator = ({ text }: { text: string }) => {
    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <Box
                sx={{
                    backgroundColor: 'var(--grey-400)',
                    height: '0.4vh',
                    width: '20%',
                }}
            ></Box>
            <Typography
                className="h5 bold"
                color="var(--grey-400)"
                align="center"
            >
                {text}
            </Typography>
            <Box
                sx={{
                    backgroundColor: 'var(--grey-400)',
                    height: '0.4vh',
                    width: '20%',
                }}
            ></Box>
        </Box>
    );
};

export default ModuleSeparator;
