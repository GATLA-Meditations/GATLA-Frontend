import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getActivityById } from '@/service/apis';
import '../../app/globals.css';
import './styles.css';
import VideoPlayer from '@/components/VideoPlayer';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Loader from '@/components/Loader';

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

const Activity = () => {
    const router = useRouter();
    const id = router.query.id as string;
    const [activity, setActivity] = useState<Activity>();
    const [showDescription, setShowDescription] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);

    const activityMap = (content: string, type: string) => {};

    const handleGetActivity = async () => {
        if (id) {
            setIsLoading(true);
            const activityInfo = await getActivityById(id);
            setActivity(activityInfo);
            setIsLoading(false);
        }
    };

    const handleShowDescription = () => {
        setShowDescription(!showDescription);
    };

    useEffect(() => {
        handleGetActivity().then();
    }, [id]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className={'activity-main-div'}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    width: '90%',
                    margin: '10px 0',
                    color: 'white',
                }}
            >
                <ArrowBackIosNewIcon onClick={() => router.back()} />
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
                    activity.type === ActivityContentType.VIDEO ? (
                        <div className={'activity-video'} key={key}>
                            <VideoPlayer url={activity.content} />
                        </div>
                    ) : (
                        <div
                            className={'activity-description-div'}
                            key={key}
                            onClick={handleShowDescription}
                        >
                            <p className={'h5 description-title'}>
                                Descripción
                            </p>
                            {showDescription && (
                                <p className={'body1 activity-p'}>
                                    {activity.content}
                                </p>
                            )}
                            <div className={'show-description-arrow-div'}>
                                {showDescription ? (
                                    <KeyboardArrowUpIcon />
                                ) : (
                                    <KeyboardArrowDownIcon />
                                )}
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};
export default Activity;
