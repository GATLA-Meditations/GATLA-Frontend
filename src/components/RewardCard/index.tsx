import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';
import './styles.css';

interface RewardCardProps {
    icon?: React.ReactNode;
    text?: string;
    bgColor?: string;
    textColor?: string;
}

const RewardCard = ({ icon, text, bgColor, textColor }: RewardCardProps) => {
    return (
        <Box className={'reward-card'} bgcolor={bgColor}>
            <Box>
                {icon}
            </Box>
            <Box>
                <Typography color={textColor} className={'body2 bold'}>
                    {text}
                </Typography>
            </Box>
        </Box>
    );
};
export default RewardCard;
