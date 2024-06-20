import Button from '@/components/Button';
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './styles.css';
import image from '../../assets/images/prepagesimg.png';
import TopBar from '@/components/TopBar';
import NavBar from '@/components/NavBar';
import { Module } from '@/pages/module/[id]';
import { getActualModule } from '@/service/apis';
import ActivityCard from '@/components/ActivitiesCard';
import { useRouter } from 'next/router';
import WithAuth from '@/components/WithAuth';

const PreTesting = () => {
    const [module, setModule] = useState<Module>();
    const router = useRouter();

    const handleFetchQuestionnaires = async () => {
        const response = await getActualModule();
        setModule(response);
    };

    const handleQuestionnaireOnClick = async (questionnaireId: string) => {
        await router.push(`/questionnaire/${questionnaireId}`);
    };

    const handleStart = () => {
        console.log('hola');
    };

    useEffect(() => {
        handleFetchQuestionnaires().then();
    }, []);

    return (
        <Box display={'flex'} flexDirection={'column'} height={'100vh'}>
            <TopBar amtNotifications={0} />
            <div className="module-name-div">
                <p className={'h2 bold'}>{module?.name}</p>
            </div>
            <div className="activity-division-div">
                {module?.activities?.map((activity, key) => (
                    <ActivityCard
                        key={key}
                        onClick={() => handleQuestionnaireOnClick(activity.id)} //Modal en caso de que no se haya completado la actividad previa
                        title={activity.name}
                        isAllowed={true}
                    />
                ))}
            </div>
            {/*<Image src={image} width={200} alt="pretesting" className="image" />*/}
            {/*<Typography className="title">Antes de continuar...</Typography>*/}
            {/*<Typography className="text">*/}
            {/*    Quisieramos pedirle que complete estos breves cuestionarios con*/}
            {/*    completa honestidad.*/}
            {/*</Typography>*/}
            {/*<Box margin={'3vh'}>*/}
            {/*    <Button variant="common" size="medium" onClick={handleStart}>*/}
            {/*        Empezar*/}
            {/*    </Button>*/}
            {/*</Box>*/}
            <NavBar value={0} />
        </Box>
    );
};

export default WithAuth(PreTesting);
