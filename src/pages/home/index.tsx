import React, {useEffect, useState} from 'react';
import TopBar from '@/components/TopBar';
import './styles.css';
import MeditationEntryPoint, {
    EntryPointData,
} from '@/components/MeditationEntryPoint';
import '../../app/globals.css';
import NavBar from '@/components/NavBar';
import Box from '@mui/material/Box';
import AchievementsHomeMenu from '@/components/AchievementsHomeMenu';
import { getActualModule, getUserWeeklyData } from '@/service/apis';
import WithAuth from '@/components/WithAuth';
import {useRouter} from 'next/router';
import WithToast, {WithToastProps} from '@/hoc/withToast';
import Loader from '@/components/Loader';
import logRocket from 'logrocket';
import { WeeklyDto } from '@/components/Modals/weeklyModal/dto/weekly.dto';
import WeeklyModal from '@/components/Modals/weeklyModal';
import { handleAction } from 'next/dist/server/app-render/action-handler';

const HomeScreen = ({showToast}: WithToastProps) => {
    const [actualModule, setActualModule] = useState({} as EntryPointData);
    const router = useRouter();
    const [weekly, setWeekly] = useState<WeeklyDto>();
    const [isWeekly, setIsWeekly] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);

    logRocket.init('5snaie/renacentia-dev');

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const moduleData = await getActualModule();
                setActualModule(moduleData);
            } catch (error) {
                console.log(error);
            }
        }

        async function getWeekly() {
            try {
                const weeklyData = await getUserWeeklyData();
                setWeekly(weeklyData);
                if (weeklyData) {
                    setIsWeekly(true);
                }
            } catch (error) {
                console.log(error);
            }
        }

        showToast(
            '¡Ánimo en tu tratamiento!',
            'img',
            'https://ca.slack-edge.com/T010UBTUG4C-U06UB5DCRK4-b5743123495e-512'
        );

        checkForToast().then();
        fetchData().then(() => {
            getWeekly().then(() => {
                setIsLoading(false);
            });
        });
    }, [showToast, router.query]);


    const checkForToast = async () => {
        const {message, type} = router.query as Record<
            string,
            'success' | 'error'
        >;
        if (message && type) {
            showToast(message, type);
        }
    };

    if (isLoading) {
        return <Loader/>;
    }

    return (
        <>
            <WeeklyModal
                moduleTitle={weekly?.moduleTitle || ''}
                maxStreak={weekly?.maxStreak || 0}
                streak={weekly?.streak || 0}
                totalWatchTime={weekly?.totalWatchTime || 0}
                weeklyWatchTime={weekly?.weeklyWatchTime || 0}
                open={isWeekly}
                handleClose={() => {setIsWeekly(false);}}
            />
            <Box height={'100vh'} className={'home-div'}>
                <TopBar amtNotifications={0} selected={''}/>
                <AchievementsHomeMenu/>
                <MeditationEntryPoint
                    id={actualModule.id}
                    type={actualModule.type}
                    name={actualModule.name}
                    description={actualModule.description}
                    progress={actualModule.progress}
                />
                <Box className="content"/>
                <NavBar value={0}/>
            </Box>
        </>
    );
};

export default WithAuth(WithToast(HomeScreen));
