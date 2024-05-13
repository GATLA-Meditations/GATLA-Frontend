import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';

interface RewardCardProps {
    logo: React.ReactNode;
    text: string;
    bgColor: string;
    textColor: string;
}

const RewardCard = ({ logo, text, bgColor, textColor }: RewardCardProps) => {
    return (
        <Box
            width={'80px'}
            height={'67px'}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap={'6px'}
            bgcolor={bgColor}
            padding={'8px 3px'}
            borderRadius={'10px'}
            boxSizing={'content-box'}
            boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
        >
            <Box height={40} width={40}>
                {logo}
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
