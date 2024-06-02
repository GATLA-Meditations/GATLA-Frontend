import { useRouter } from 'next/router';
import HomeScreen from '@/pages/home';
import './styles.css';
import TopBar from '@/components/TopBar';
import { useEffect, useState } from 'react';

const TestPageOnboarding = () => {
    const [state, setState] = useState('topbar');
    const router = useRouter();

    useEffect(() => {}, [state]);
    if (state === 'topbar') {
        return (
            <div className={'TestPageOnboarding'}>
                <div
                    className={'black-screen'}
                    onClick={() => setState('notifications')}
                ></div>
                <div className={'white-square'}>
                    <TopBar amtNotifications={0} selected={state} />
                </div>
                <p className={'onboarding-text'}>Esto es la top bar</p>
                <HomeScreen />
            </div>
        );
    }
    if (state === 'notifications') {
        return (
            <div className={'TestPageOnboarding'}>
                <div className={'black-screen'}></div>
                <div className={'white-square'}>
                    <TopBar amtNotifications={0} selected={state} />
                </div>
                <p className={'onboarding-text'}>
                    Apretando aquí podrás dirigirte a la pantalla de
                    notificaciones
                </p>
                {/*<HomeScreen />*/}
            </div>
        );
    }
};

export default TestPageOnboarding;
