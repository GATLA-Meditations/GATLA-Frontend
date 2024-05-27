import React from 'react';
import './styles.css';
import '@/app/globals.css';
import Button from '@/components/Button';

interface NewRewardProps {
    rewardCard: React.ReactNode;
    text?: string;
}

const NewReward = ({ rewardCard, text }: NewRewardProps) => {
    return (
        <div className={'component'}>
            {rewardCard}
            <p className={'newRewardText'}>Has obtenido un nuevo logro</p>
            <p className={'descriptionRewardText'}>{text}</p>
            <Button variant={'green'} size={'medium'}>
                Ver todos mis logros
            </Button>
            <Button variant={'green'} size={'medium'}>
                Volver al menu
            </Button>
        </div>
    );
};

export default NewReward;
