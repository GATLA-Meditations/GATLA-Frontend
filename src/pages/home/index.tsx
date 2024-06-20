import React, { useEffect, useState } from 'react';
import TopBar from '@/components/TopBar';
import './styles.css';
import MeditationEntryPoint, {
    EntryPointData,
} from '@/components/MeditationEntryPoint';
import '../../app/globals.css';
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
        <>
            <Box height={'100vh'} className={'home-div'}>
                <TopBar amtNotifications={0} selected={''} />
                <AchievementsHomeMenu days={1} minutes={1} goals={1} />
                <MeditationEntryPoint
                    id={actualModule.id}
                    type={actualModule.type}
                    name={actualModule.name}
                    description={actualModule.description}
                    progress={actualModule.progress}
                />
                <Box className="content" />
                <NavBar value={0} />
            </Box>
        </>
    );
};

export default WithAuth(HomeScreen);
