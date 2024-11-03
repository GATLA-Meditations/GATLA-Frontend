import React from 'react';
import TopBar from '@/components/TopBar';
import './styles.css';
import Box from '@mui/material/Box';
import '../../app/globals.css';
import WithAuth from '@/components/WithAuth';
import {Grid} from '@mui/material';
import ObtainedAchievement from '@/components/ObtainedAchievement';
import Typography from '@mui/material/Typography';
import LockedAchievement from '@/components/LockedAchievement';
import NavBar from '@/components/NavBar';
import {getAchievements, getAllAchievements} from '@/service/apis';

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
        <Box height={'100vh'} paddingBottom="5px">
            <TopBar amtNotifications={0} selected={''}/>
            <Box className={'achievements_content'}>
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
                                        rewardCard={achievement.unlockedImage}
                                        text={achievement.unlockedDescription} title={achievement.title}/>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                )}
                {achievementsLocked.length > 0 && (
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
                                        rewardCard={achievement.lockedImage}
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