import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './styles.css';
import '../../app/globals.css';
import TopBar from '@/components/TopBar';
import NavBar from '@/components/NavBar';
import { Module } from '@/pages/module/[id]';
import { getActualModule } from '@/service/apis';
import ActivityCard from '@/components/ActivitiesCard';
import { useRouter } from 'next/router';
import WithAuth from '@/components/WithAuth';
import Loader from '@/components/Loader';
import { QuestionnaireIcon } from '@/assets/QuestionnaireIcon';

const PreTesting = () => {
    const [module, setModule] = useState<Module>();
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    const handleFetchQuestionnaires = async () => {
        setIsLoading(true);
        const response = await getActualModule();
        setModule(response);
        setIsLoading(false);
    };

    const handleQuestionnaireOnClick = async (questionnaireId: string) => {
        await router.push(`/questionnaire/${questionnaireId}`);
    };

    useEffect(() => {
        handleFetchQuestionnaires().then();
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} height={'100vh'}>
            <TopBar amtNotifications={0} />
            <div className="module-name-div">
                <p className='title bold question-title'>{module?.name}</p>
            </div>
            <div className="activity-division-div">
                {module?.activities?.map((activity, key) => (
                    <ActivityCard
                        icon={<QuestionnaireIcon width="60" height="60" />}
                        key={key}
                        onClick={() => handleQuestionnaireOnClick(activity.id)} //Modal en caso de que no se haya completado la actividad previa
                        title={activity.name}
                        isAllowed={true}
                        index={key}
                    />
                ))}
            </div>
            <NavBar value={0} />
        </Box>
    );
};

export default WithAuth(PreTesting);
