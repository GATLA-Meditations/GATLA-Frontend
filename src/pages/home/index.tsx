import React from 'react';
import TopBar from '@/components/TopBar';
import ModuleSeparator from '@/components/ModuleSeparator';
import './styles.css';
import MeditationEntryPoint from '@/components/MeditationEntryPoint';
import NavBar from '@/components/NavBar';

const HomeScreen = () => {
    return (
        <div>
            <TopBar amtNotifications={0} />
            <p>stats</p>
            <ModuleSeparator
                text={'Módulo actual'}
                separatorColor={'#141418'}
                textColor={'#141418'}
            />
            <MeditationEntryPoint />
            <div>
                <NavBar value={0} />
            </div>
            {/*<ModuleSeparator text={'Próxima reunión'} separatorColor={'#141418'} textColor={'#141418'}/>*/}
        </div>
    );
};

export default HomeScreen;
