import './test.css';
import Button from '@/components/Button';
import { useRouter } from 'next/router';

const TestPageOnboarding = () => {
    const router = useRouter();
    const goToTest = () => {
        // @ts-ignore
        router.push('/test').then(() => console.log('click'));
    };

    return (
        <div className={'TestPageOnboarding'}>
            <div>
                {/*<img src="https://via.placeholder.com/117x113" alt={'ssss'} />*/}
                <h1>Antes de Meditar...</h1>
                <h2>
                    Quisieramos pedirle que complete este breve cuestionario con
                    completa honestidad
                </h2>
            </div>
            <Button
                variant={'green'}
                size={'small'}
                onClick={goToTest}
                // children={<h3>Empezar</h3>}
            >
                Empezar
            </Button>
        </div>
    );
};

export default TestPageOnboarding;
