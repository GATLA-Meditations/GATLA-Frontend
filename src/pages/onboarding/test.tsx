import './test.css';
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import Image from 'next/image';
import icon from '../../assets/onboardingIcon.png'

const TestPageOnboarding = () => {
    const router = useRouter();
    const goToTest = () => {
        router.push('/test').then(() => console.log('click'));
    };

    return (
        <div className={'TestPageOnboarding'}>
            <div>
                <Image
                    src={icon}
                    alt="onboarding icon"
                    width={117}
                    height={113}
                />
                <h1>Antes de Meditar...</h1>
                <h2>
                    Quisieramos pedirle que complete este breve cuestionario con
                    completa honestidad
                </h2>
            </div>
            <Button variant={'green'} size={'small'} onClick={goToTest}>
                <h3>Empezar</h3>
            </Button>
        </div>
    );
};

export default TestPageOnboarding;
