import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

const ModuleSeparator = ({ text }: { text: string }) => {
    return (
        <Divider
            sx={{
                '&.MuiDivider-root::before': {
                    width: '100%',
                    borderTop: 'solid',
                    color: 'var(--grey-400)',
                },
                '&.MuiDivider-root::after': {
                    width: '100%',
                    borderTop: 'solid',
                    color: 'var(--grey-400)',
                },
            }}
        >
            <Typography
                className="h5 bold"
                color="var(--grey-400)"
                align="center"
            >
                {text}
            </Typography>
        </Divider>
    );
};

export default ModuleSeparator;
