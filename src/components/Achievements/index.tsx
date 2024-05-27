import Box from '@mui/material/Box';
import './styles.css';
import { Grid } from '@mui/material';
import RewardCard from '@/components/RewardCard';
import { FireIcon } from '@/Assets/FireIcon';
import { GoalIcon } from '@/Assets/GoalIcon';
import React, { JSX } from 'react';
import Typography from '@mui/material/Typography';

interface Achievement {
    type: string;
    title: string;
}

interface AchievementsProps {
    achievements: Achievement[];
    title?: string;
    viewMoreButton?: string;
}

const iconColor: { [key: string]: JSX.Element } = {
    streak: <FireIcon color={'#F59622'} />,
    week: <GoalIcon color={'#FEF7FF'} />,
};

const cardColor: { [key: string]: string } = {
    streak: 'var(--tertiary-200)',
    week: 'var(--secondary-400)',
};

const Achievements: React.FC<AchievementsProps> = ({
    achievements,
    title,
    viewMoreButton,
}) => {
    return (
        <Box className="achievements-main-box">
            <Box className="achievements-title-box">
                <Typography className={'h5 bold'}>{title}</Typography>
                <Typography
                    className={'body1 bold'}
                    sx={{ textDecoration: 'underline' }}
                >
                    {viewMoreButton}
                </Typography>
            </Box>
            <Box className="achievements-box">
                <Grid
                    container
                    spacing={3}
                    display="flex"
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    {achievements.map((achievement, index) => (
                        <Grid item key={index} display="flex">
                            <RewardCard
                                icon={iconColor[achievement.type]}
                                text={achievement.title}
                                bgColor={cardColor[achievement.type]}
                                textColor={'var(--white)'}
                            ></RewardCard>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Achievements;
