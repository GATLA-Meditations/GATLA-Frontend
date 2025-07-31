import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';
import './styles.css';

interface ObtainedAchievementProps {
    rewardCard: any;
    text?: string;
    title?: string;
}

const ObtainedAchievement = ({
    rewardCard,
    text,
    title,
}: ObtainedAchievementProps) => {
    return (
        <Box className={'achievement-card-obtained'}>
            <Box className={'image-container'}>
                <img
                    src={rewardCard}
                    alt="logo"
                    style={{ objectFit: 'contain' }}
                    width={100}
                    height={100}
                />
            </Box>
            {/*<Typography className={'title'}>{title}</Typography>*/}
            <Typography className={'title'}>{text}</Typography>
        </Box>
    );
};
export default ObtainedAchievement;
