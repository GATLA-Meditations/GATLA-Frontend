import RewardCard from '@/components/RewardCard';
import { FireIcon } from '@/assets/FireIcon';

export default function Home() {
    return (
        <main>
            <h1>hello world</h1>
            <RewardCard icon={<FireIcon color={'#F19384'} />} text={'1 DÍA'} />
        </main>
    );
}
