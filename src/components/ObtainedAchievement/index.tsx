import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';
import './styles.css';
import Image, {StaticImageData} from 'next/image';

interface ObtainedAchievementProps {
    rewardCard: StaticImageData;
    text?: string;
    title?: string;
}

const ObtainedAchievement = ({rewardCard, text, title}: ObtainedAchievementProps) => {
    return (
        <Box className={'achievement-card-unlocked'}>
            <Box className={'image-container'}>
                <Image src={rewardCard} alt="logo" style={{ objectFit: 'contain' }} width={100} height={100} />
            </Box>
            <Typography className={'title'}>
                {title}
            </Typography>
            <Typography className={'text-unlocked'}>
                {text}
            </Typography>
        </Box>
    );
};
export default ObtainedAchievement;
