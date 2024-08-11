import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';
import './styles.css';
import Image, {StaticImageData} from 'next/image';

interface LockedAchievementProps {
    rewardCard: StaticImageData;
    text?: string;
}

const LockedAchievement = ({rewardCard, text}: LockedAchievementProps) => {
    return (
        <Box className={'achievement-card'}>
            <Box className={'image-container'}>
                <Image src={rewardCard} alt="logo" style={{ objectFit: 'contain' }} width={85} height={85} />
            </Box>
            <Typography className={'text'}>
                {text}
            </Typography>
        </Box>
    );
};
export default LockedAchievement;
