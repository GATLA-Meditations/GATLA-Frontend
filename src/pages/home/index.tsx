import React, { useEffect, useState } from 'react';
import TopBar from '@/components/TopBar';
import ModuleSeparator from '@/components/ModuleSeparator';
import './styles.css';
import MeditationEntryPoint from '@/components/MeditationEntryPoint';
import NavBar from '@/components/NavBar';
import Box from '@mui/material/Box';
import AchievementsHomeMenu from '@/components/AchievementsHomeMenu';
import { getVideos } from '@/service/apis';
import VideoPlayer from '@/components/VideoPlayer';

const HomeScreen = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const activityId = '1';
            const videosData = await getVideos(activityId);
            setVideos(videosData);
        };
        fetchVideos();
    }, []);

    return (
        <Box height={'100vh'} style={{ backgroundColor: 'var(--bg-color)' }}>
            <TopBar amtNotifications={0} selected={''} />
            <AchievementsHomeMenu days={1} minutes={1} goals={1} />
            <ModuleSeparator
                text={'Módulo actual'}
                separatorColor={'#141418'}
                textColor={'#141418'}
            />
            <MeditationEntryPoint />
            <Box className="content" />
            <Box className="content">
                {videos.map((video, index) => (
                    <VideoPlayer key={index} url={video} />
                ))}
            </Box>
            <NavBar value={0} />
        </Box>
    );
};

export default HomeScreen;
