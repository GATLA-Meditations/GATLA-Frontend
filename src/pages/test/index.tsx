import './style.css';
import TopBar from '../../components/TopBar';
import QuestionsList from '../../components/QuestionList';
import TitleExplanationContainer from '@/components/TitleExplanationContainer';

const TestPage = () => {
    let questions = [
        '¿Qué piensas de todo esto?',
        '¿Cuál es tu opinión?',
        '¿Qué te parece?',
    ];
    let notifications = 0;
    return (
        <div className={'TestPage'}>
            <TopBar amtNotifications={notifications}></TopBar>
            <div style={{ paddingTop: '3rem' }}>
                <TitleExplanationContainer
                    title={'Introduccion'}
                    explainingText={
                        'este es el test explicativo de la actividad'
                    }
                >
                    <p>aca se explica el puntaje de la actividad</p>
                </TitleExplanationContainer>
            </div>
            <QuestionsList questions={questions} />
        </div>
    );
};

export default TestPage;
