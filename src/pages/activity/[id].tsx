import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getActivityById, sendVideoTime } from '@/service/apis';
import '../../app/globals.css';
import './styles.css';
import VideoPlayer from '@/components/VideoPlayer';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Loader from '@/components/Loader';
import { useGetProfileInfo } from '@/hooks/useGetProfileInfo';
import TopBar from '@/components/TopBar';
import NavBar from '@/components/NavBar';
import { Box } from '@mui/material';

enum ActivityContentType {
    VIDEO = 'VIDEO',
    TEXT = 'TEXT',
}

interface Activity {
    id: string;
    name: string;
    contents: ActivityContent[];
}

interface ActivityContent {
    id: string;
    type: ActivityContentType;
    content: string;
}

interface VideoInfo {
    actionType: 'play' | 'pause';
    time: number;
}

const Activity = () => {
    const router = useRouter();
    const id = router.query.id as string;
    const [activity, setActivity] = useState<Activity>();
    const [isLoading, setIsLoading] = useState(false);
    const [videoInfo, setVideoInfo] = useState<VideoInfo[]>([]);
    const { profile, loading, error } = useGetProfileInfo();

    const backgroundStyle = {
        backgroundImage: `url(${profile?.background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    const activityMap = (content: string, type: string) => {};

    const handleGetActivity = async () => {
        if (id) {
            setIsLoading(true);
            const activityInfo = await getActivityById(id);
            setActivity(activityInfo);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        handleGetActivity().then();
    }, [id]);

    if (isLoading) {
        return <Loader />;
    }

    const handleVideoPlay = (time: number) => {
        setVideoInfo([...videoInfo, { actionType: 'play', time }]);
    };

    const handleVideoPause = (time: number) => {
        setVideoInfo([...videoInfo, { actionType: 'pause', time }]);
    };

    const handleSendVideoInfo = async (time: number) => {
        await sendVideoTime(id, time / 60).catch((error) =>
            console.error('Error sending video time', error)
        );
    };

    return (
        <Box>
            <TopBar amtNotifications={0} />
            <div className={'activity-main-div'} style={backgroundStyle}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        width: '90%',
                        margin: '10px 0',
                        color: 'white',
                    }}
                >
                    <ArrowBackIosNewIcon
                        sx={{ cursor: 'pointer' }}
                        onClick={() => router.back()}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column-reverse',
                        alignItems: 'center',
                        justifyContent: 'start',
                        gap: '20px',
                        height: '100%',
                        width: '100%',
                    }}
                >
                    {activity?.contents.map((activity, key) =>
                        activity.type === ActivityContentType.TEXT ? (
                            <div
                                className={'activity-description-div'}
                                key={key}
                            >
                                <p className={'h5 description-title'}>
                                    Descripción
                                </p>
                                <p className={'body1 activity-p'}>
                                    {activity.content}
                                </p>
                            </div>
                        ) : (
                            <div className={'activity-video'} key={key}>
                                <VideoPlayer
                                    url={activity.content}
                                    isPlaying={handleVideoPlay}
                                    isPausing={handleVideoPause}
                                    sendInfo={handleSendVideoInfo}
                                />
                            </div>
                        )
                    )}
                </div>
                <NavBar value={0} />
            </div>
        </Box>
    );
};
export default Activity;
