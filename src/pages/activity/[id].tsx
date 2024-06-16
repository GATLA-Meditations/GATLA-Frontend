import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getActivityById } from '@/service/apis';
import '../../app/globals.css';
import './styles.css';
import VideoPlayer from '@/components/VideoPlayer';

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

    const activityMap = (content: string, type: string) => {};

    const handleGetActivity = async () => {
        if (id) {
            const activityInfo = await getActivityById(id);
            setActivity(activityInfo);
        }
    };

    useEffect(() => {
        handleGetActivity().then();
    }, [id]);

    return (
        <div className={'activity-main-div'}>
            <div className={'activity-title-div'}>
                <p
                    className={'h2 activity-title'}
                    style={{ color: 'var(--light-white)' }}
                >
                    {activity?.name}
                </p>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                {activity?.contents.map((activity) =>
                    activity.type === ActivityContentType.VIDEO ? (
                        <div className={'activity-video'}>
                            <VideoPlayer url={activity.content} />
                        </div>
                    ) : (
                        <div className={'activity-description-div'}>
                            <p className={'h3 activity-p'}>Descripción</p>
                            <p className={'h6 activity-p'}>
                                {activity.content}
                            </p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};
export default Activity;
