import React from 'react';
import './styles.css';
import {Avatar} from '@mui/material';
import Button from '@/components/Button';

interface CongratsCardProps {
    userName:string,
    userAvatar:string,
    achievementName:string,
    onClick?: () => void;
}


const CongratsCard = ({userName, achievementName, onClick, userAvatar}:CongratsCardProps) => {

    return (
        <div className={'congrats-card-container'}>
            <div className={'congrats-card-elements-container'}>
                <div className={'congrats-card-information-container'}>
                    <div className={'congrats-card-user-info-container'}>
                        <Avatar
                            sx={{
                                width: '5vh',
                                height: '5vh',
                            }}
                            src={userAvatar === '' ? '' : userAvatar}
                        ></Avatar>
                        <p className={'body1 bold'}>{userName}</p>
                    </div>
                    <div>
                        <p className={'body2 congrats-card-achievement-text'}>{achievementName}</p>
                    </div>
                </div>
                <div>
                    <Button onClick={onClick} variant={'common'} size={'small'}>¡Felicitar!</Button>
                </div>
            </div>
        </div>
    );

};
export default CongratsCard;