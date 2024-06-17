import React, { useEffect, useState } from 'react';
import TopBar from '@/components/TopBar';
import ModuleSeparator from '@/components/ModuleSeparator';
import './styles.css';
import MeditationEntryPoint, {
    EntryPointData,
} from '@/components/MeditationEntryPoint';
import NavBar from '@/components/NavBar';
import Box from '@mui/material/Box';
import AchievementsHomeMenu from '@/components/AchievementsHomeMenu';
import { getActualModule } from '@/service/apis';
import WithAuth from '@/components/WithAuth';

const HomeScreen = () => {
    const [actualModule, setActualModule] = useState({} as EntryPointData);

    useEffect(() => {
        async function fetchData() {
            try {
                const moduleData = await getActualModule();
                setActualModule(moduleData);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <Box height={'100vh'} style={{ backgroundColor: 'var(--bg-color)' }}>
            <TopBar amtNotifications={0} selected={''} />
            <AchievementsHomeMenu days={1} minutes={1} goals={1} />
            <Box display={'flex'} flexDirection={'column'} sx={{ gap: '3vh' }}>
                <ModuleSeparator
                    text={'Módulo actual'}
                    separatorColor={'#141418'}
                    textColor={'#141418'}
                />
                <MeditationEntryPoint
                    id={actualModule.id}
                    name={actualModule.name}
                    description={actualModule.description}
                    progress={actualModule.progress}
                />
            </Box>
            <Box className="content" />
            <NavBar value={0} />
        </Box>
    );
};

export default WithAuth(HomeScreen);
