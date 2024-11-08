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
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        width: '90%',
                        color: 'black',
                        marginLeft: '10px',
                        marginTop: '20px',
                    }}
                >
                    <ArrowBackIosNewIcon
                        sx={{ cursor: 'pointer' }}
                        onClick={() => router.back()}
                    />
                </div>
                <div className="module-name-div">
                    <p className={'h4 bold module-name'}>{module?.name}</p>
                </div>
                <div className="activity-division-div">
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        padding={'16px'}
                    >
                        {module?.activities?.map((activity, key, index) => (
                            <Grid item xs={6} key={key}>
                                <ActivityCard
                                    onClick={
                                        activity.unlocked
                                            ? () =>
                                                handleActivityOnClick(
                                                    activity.id
                                                )
                                            : () => {}
                                    }
                                    title={activity.name}
                                    isAllowed={activity.unlocked}
                                    icon={iconsDictionary[key]}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <Box padding="0 16px">
                    <ContactCard text={' En caso de ver algun contenido incorrecto no dudes en contactarnos en:'}/>
                </Box>
                <NavBar value={0} />
            </Box>
        </>
    );
};
export default ModuleScreen;
