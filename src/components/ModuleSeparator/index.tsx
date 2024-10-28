import { Divider, Typography } from '@mui/material';
import React from 'react';

interface ModuleSeparatorProps {
    text: string;
    separatorColor: string;
    textColor: string;
    textAlign?: 'left' | 'center' | 'right';
}

const ModuleSeparator = ({
    text,
    separatorColor,
    textColor,
    textAlign,
}: ModuleSeparatorProps) => {
    return (
        <Divider
            sx={{
                '&.MuiDivider-root::before': {
                    width: textAlign === 'left' ? 0 : '100%',
                    borderTop: 'solid',
                    color: separatorColor,
                },
                '&.MuiDivider-root::after': {
                    width: textAlign === 'right' ? 0 : '100%',
                    borderTop: 'solid',
                    color: separatorColor,
                },
            }}
        >
            <Typography className="h6 bold" color={textColor} align="center">
                {text}
            </Typography>
        </Divider>
    );
};

export default ModuleSeparator;
