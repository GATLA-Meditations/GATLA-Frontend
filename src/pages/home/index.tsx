import NewReward from '@/components/NewReward';
import React from 'react';
import RewardCard from '@/components/RewardCard';
import { FireIcon } from '@/assets/FireIcon';

const HomeScreen = () => {
    return (
        <div>
            <h1>Home</h1>
            <NewReward
                rewardCard={
                    <RewardCard
                        text={'pepe'}
                        textColor={'white'}
                        bgColor={'blue'}
                        icon={<FireIcon color={'white'} />}
                    />
                }
                text={'pepe'}
            />
        </div>
    );
};

export default HomeScreen;
