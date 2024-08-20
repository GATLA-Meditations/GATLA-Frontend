import React from 'react';
import './styles.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export interface PersonalizeChipsProps {
    label: string;
    onClick: () => void;
    variant: 'outlined' | 'filled';
}

const PersonalizeChip = ({
    label,
    onClick,
    variant,
}: PersonalizeChipsProps) => {
    return (
        <Box onClick={onClick} className={`chip ${variant}`}>
            <Typography className={'body1'}>{label}</Typography>
        </Box>
    );
};

export default PersonalizeChip;
