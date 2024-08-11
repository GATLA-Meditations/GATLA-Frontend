import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';
import './styles.css';
import Image, {StaticImageData} from 'next/image';

interface ObtainedAchievementProps {
    rewardCard: StaticImageData;
    text?: string;
}

const ObtainedAchievement = ({rewardCard, text}: ObtainedAchievementProps) => {
    return (
        <Box className={'achievement-card-unlocked'}>
            <Box className={'image-container'}>
                <Image src={rewardCard} alt="logo" style={{ objectFit: 'contain' }} width={85} height={85} />
            </Box>
            <Typography className={'title'}>
                {text}
            </Typography>
        </Box>
    );
};
export default ObtainedAchievement;
