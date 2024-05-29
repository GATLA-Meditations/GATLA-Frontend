import './test.css';
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import MeditationIcon from '@/assets/MeditationIcon';

const WelcomePage = () => {
    const router = useRouter();
    const goToHome = () => {
        // @ts-ignore
        router.push('/home').then(() => console.log('click'));
    };

    return (
        <div className={'WelcomePage'}>
            <div>
                <MeditationIcon />
                <h1>¡Bienvenido!</h1>
                <h2>
                    Ahora le daremos un tour virtual para que nunca se pierda
                </h2>
            </div>
            <Button variant={'green'} size={'medium'} onClick={goToHome}>
                Empezar
            </Button>
        </div>
    );
};

export default WelcomePage;
