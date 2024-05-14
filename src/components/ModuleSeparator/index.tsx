import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

interface ModuleSeparatorProps {
    text: string;
    separatorColor: string;
    textColor: string;
}

const ModuleSeparator = ({ text, separatorColor, textColor }: ModuleSeparatorProps) => {
    return (
        <Divider
            sx={{
                '&.MuiDivider-root::before': {
                    width: '100%',
                    borderTop: 'solid',
                    color: separatorColor,
                },
                '&.MuiDivider-root::after': {
                    width: '100%',
                    borderTop: 'solid',
                    color: separatorColor,
                },
            }}
        >
            <Typography
                className="h5 bold"
                color={textColor}
                align="center"
            >
                {text}
            </Typography>
        </Divider>
    );
};

export default ModuleSeparator;
