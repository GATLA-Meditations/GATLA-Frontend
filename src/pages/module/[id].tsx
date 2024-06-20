import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ActivityCard from '@/components/ActivitiesCard';
import { getModuleById } from '@/service/apis';
import '../../app/globals.css';
import './styles.css';
import NavBar from '@/components/NavBar';
import Box from '@mui/material/Box';
import TopBar from '@/components/TopBar';

export interface Module {
    id: string;
    name: string;
    description: string;
    activities: ActivityPreview[];
    progress: number;
}

interface ActivityPreview {
    id: string;
    unlocked: boolean;
    name: string;
}

const ModuleScreen = () => {
    const router = useRouter();
    const id = router.query.id as string;

    const [module, setModule] = useState<Module>();

    const getModule = async () => {
        if (id) {
            const moduleInfo: Module = await getModuleById(id);
            setModule(moduleInfo);
        }
    };

    const handleActivityOnClick = async (activityId: string) => {
        await router.push(`/activity/${activityId}`);
    };

    useEffect(() => {
        getModule().then();
    }, [id]);

    return (
        <>
            <Box height={'100vh'} className={'home-div'}>
                <TopBar amtNotifications={0} />
                <div className="module-name-div">
                    <p className={'h2 bold'}>{module?.name}</p>
                </div>
                <div className="activity-division-div">
                    {module?.activities?.map((activity, key) => (
                        <ActivityCard
                            key={key}
                            onClick={() => handleActivityOnClick(activity.id)} //Modal en caso de que no se haya completado la actividad previa
                            title={activity.name}
                            isAllowed={activity.unlocked}
                        />
                    ))}
                </div>
                <NavBar value={0} />
            </Box>
        </>
    );
};
export default ModuleScreen;
