import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import './styles.css';

interface ModuleSeparatorProps {
    text: string;
    separatorColor: string;
    textColor: string;
    textAlign?: 'left' | 'center' | 'right';
    helper?: React.ReactNode;
}

const ModuleSeparator = ({
    text,
    separatorColor,
    textColor,
    textAlign,
    helper
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
            <div className={'divider-content'}>
                <Typography className="h6 bold" color={textColor} align="center">
                    {text}
                </Typography>
                {helper}
            </div>
        </Divider>
    );
};

export default ModuleSeparator;
