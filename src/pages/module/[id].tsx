import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ActivityCard from '@/components/ActivitiesCard';
import { getModuleById } from '@/service/apis';
import '../../app/globals.css';
import './styles.css';
import NavBar from '@/components/NavBar';
import Box from '@mui/material/Box';
import TopBar from '@/components/TopBar';
import Loader from '@/components/Loader';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Grid } from '@mui/material';
import { iconsDictionary } from '@/util/module';
import ContactCard from '../../components/ContactCard';

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

    const [isLoading, setIsLoading] = useState(false);

    const [module, setModule] = useState<Module>();

    const getModule = async () => {
        if (id) {
            setIsLoading(true);
            const moduleInfo: Module = await getModuleById(id);
            setModule(moduleInfo);
            setIsLoading(false);
        }
    };

    const handleActivityOnClick = async (activityId: string) => {
        await router.push(`/activity/${activityId}`);
    };

    useEffect(() => {
        getModule().then();
    }, [id]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <Box height={'100vh'} className={'home-div'}>
                <TopBar amtNotifications={0} />
                <div className={'module-name-div'}>
                    <div className={'arrow-title-container'}>
                        <ArrowBackIosNewIcon
                            sx={{ cursor: 'pointer' }}
                            onClick={() => router.back()}
                        />
                    </div>
                    <p className={'h5 module-name'}>{module?.name}</p>
                </div>
                <div className="activity-division-div">
                    {module?.activities?.map((activity, key, index) => (
                        <ActivityCard
                            index={key}
                            key={key}
                            onClick={
                                activity.unlocked
                                    ? () => handleActivityOnClick(activity.id)
                                    : () => {}
                            }
                            title={activity.name}
                            isAllowed={activity.unlocked}
                            icon={iconsDictionary[key]}
                        />
                    ))}
                </div>
                <Box padding="0 16px 120px 16px">
                    <ContactCard
                        text={
                            ' En caso de ver algun contenido incorrecto no dudes en contactarnos en:'
                        }
                    />
                </Box>
                <NavBar value={0} />
            </Box>
        </>
    );
};
export default ModuleScreen;
