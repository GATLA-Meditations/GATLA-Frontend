import React, {useEffect, useState} from 'react';
import TopBar from '@/components/TopBar';
import './styles.css';
import Box from '@mui/material/Box';
import '../../app/globals.css';
import WithAuth from '@/components/WithAuth';
import AchievementsHomeMenu from '@/components/AchievementsHomeMenu';
import {Grid} from '@mui/material';
import ObtainedAchievement from '@/components/ObtainedAchievement';
import Typography from '@mui/material/Typography';
import LockedAchievement from '@/components/LockedAchievement';
import NavBar from '@/components/NavBar';
import {getAchievements, getAllAchievements, getUserStats} from '@/service/apis';

const AchievementsScreen = () => {
    const [achievementsUnlocked, setAchievementsUnlocked] = React.useState([
        {
            unlockedImage: '',
            unlockedDescription: '',
            title: '',
        }
    ]);
    const [achievementsLocked, setAchievementsLocked] = React.useState([
        {
            lockedImage: '',
            lockedDescription: '',
        }
    ]);

    React.useEffect(() => {
        getAchievements()
            .then(response => {
                if (response) {
                    setAchievementsUnlocked(response.data);
                }
            })
            .catch(error => {
                console.error('Error fetching unlocked achievements:', error);
            });

        getAllAchievements()
            .then(response => {
                if (response) {
                    setAchievementsLocked(response.data);
                    console.log(response.data);
                }
            })
            .catch(error => {
                console.error('Error fetching locked achievements:', error);
            });
    }, []);

    return (
        <Box height={'100vh'}>
            <TopBar amtNotifications={0} selected={''} />
            <Box className={'achievements_content'}>
                <AchievementsHomeMenu/>
                {achievementsUnlocked.length > 0 && (
                    <>
                        <Typography className={'title_text'}>Logros obtenidos</Typography>
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
                                        rewardCard={'https://cdn.discordapp.com/attachments/1232427585737195630/1279808510774870016/ObtainedAchievement.png?ex=66d5ca0e&is=66d4788e&hm=1b47d6cb3e711be37cda4bbc8e50fea4e18537a979f412c9d65e42d7a57d70a3&'}
                                        text={achievement.unlockedDescription} title={achievement.title}/>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                )}
                {achievementsUnlocked.length > 0 && (
                    <>
                        <Typography className={'title_text'}>Logros restantes</Typography>
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
                                        rewardCard={'https://cdn.discordapp.com/attachments/1232427585737195630/1279808416763744256/LockedAchievement.png?ex=66d5c9f8&is=66d47878&hm=b7ef44ba19b53330ae7818f4154b4cc4b988684b4ba7dda200209b4e89de1100&'}
                                        text={achievement.lockedDescription}/>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                )}
            </Box>
            <NavBar value={2}/>
        </Box>
    );
};

export default WithAuth(AchievementsScreen);