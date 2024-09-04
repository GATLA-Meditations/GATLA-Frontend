import React, {useEffect, useState} from 'react';
import TopBar from '@/components/TopBar';
import './styles.css';
import Box from '@mui/material/Box';
import '../../app/globals.css';
import WithAuth from '@/components/WithAuth';
import logoUnlocked from '@/assets/ObtainedAchievementIcon/ObtainedAchievement.png';
import AchievementsHomeMenu from '@/components/AchievementsHomeMenu';
import { Grid } from '@mui/material';
import ObtainedAchievement from '@/components/ObtainedAchievement';
import logoLocked from '@/assets/LockedAchievementIcon/LockedAchievement.png';
import Typography from '@mui/material/Typography';
import LockedAchievement from '@/components/LockedAchievement';
import NavBar from '@/components/NavBar';
import {getUserStats} from '@/service/apis';

const AchievementsScreen = () => {

    const [days, setDays] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [goals, setGoals] = useState(0);

    const achievementsUnlocked = [
        {
            rewardCard: logoUnlocked,
            text: '“De nuestras vulnerabilidades vienen nuestras fortalezas”',
            title: 'Emociones positivas',
        },
        {
            rewardCard: logoUnlocked,
            text: '“De nuestras vulnerabilidades vienen nuestras fortalezas”',
            title: 'Emociones positivas',
        },
        {
            rewardCard: logoUnlocked,
            text: '“De nuestras vulnerabilidades vienen nuestras fortalezas”',
            title: 'Emociones positivas',
        },
        {
            rewardCard: logoUnlocked,
            text: '“De nuestras vulnerabilidades vienen nuestras fortalezas”',
            title: 'Emociones positivas',
        },
        {
            rewardCard: logoUnlocked,
            text: '“De nuestras vulnerabilidades vienen nuestras fortalezas”',
            title: 'Emociones positivas',
        },
        {
            rewardCard: logoUnlocked,
            text: '“De nuestras vulnerabilidades vienen nuestras fortalezas”',
            title: 'Emociones positivas',
        },
    ];

    const achievementsLocked = [
        {
            rewardCard: logoLocked,
            text: 'Completar meditación de la semana 8',
        },
        {
            rewardCard: logoLocked,
            text: 'Completar meditación de la semana 8',
        },
        {
            rewardCard: logoLocked,
            text: 'Completar meditación de la semana 8',
        },
    ];

    useEffect(() => {
        fetchStats();
    }, []);

    function convertMinutesToHours(minutes: number) {
        if (minutes > 60) {
            return Math.floor(minutes / 60);
        }
        return minutes;
    }

    async function fetchStats() {
        try {
            const stats = await getUserStats();
            if (stats) {
                setDays(stats.maxStreak ? stats.maxStreak : 0);
                setMinutes(
                    stats.totalWatchTime
                        ? convertMinutesToHours(stats.totalWatchTime)
                        : 0
                );
                setGoals(stats.goals ? stats.goals : 0);
            }
        } catch (error) {
        }
    }

    return (
        <Box height={'100vh'}>
            <TopBar amtNotifications={0} selected={''} />
            <Box className={'achievements_content'}>
                <AchievementsHomeMenu days={days} minutes={minutes} goals={goals} />
                <Typography className={'title_text'}>
                    Logros obtenidos
                </Typography>
                <Grid
                    container
                    spacing={0.5}
                    display="flex"
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    {achievementsUnlocked.map((achievement, index) => (
                        <Grid item key={index} display="flex">
                            <ObtainedAchievement
                                rewardCard={achievement.rewardCard}
                                text={achievement.text}
                                title={achievement.title}
                            />
                        </Grid>
                    ))}
                </Grid>

                <Typography className={'title_text'}>
                    Logros restantes
                </Typography>
                <Grid
                    container
                    spacing={0.5}
                    display="flex"
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    {achievementsLocked.map((achievement, index) => (
                        <Grid item key={index} display="flex">
                            <LockedAchievement
                                rewardCard={achievement.rewardCard}
                                text={achievement.text}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <NavBar value={2} />
        </Box>
    );
};

export default WithAuth(AchievementsScreen);
