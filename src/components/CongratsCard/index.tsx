import React from 'react';
import './styles.css';
import { Avatar } from '@mui/material';
import Button from '@/components/Button';
import CloseIcon from '@/assets/CloseIcon';

interface CongratsCardProps {
    userName: string;
    userAvatarUrl: string;
    achievementName: string;
    onClick?: () => void;
    onClose?: () => void;
}

const CongratsCard = ({
    userName,
    achievementName,
    onClick,
    userAvatarUrl,
    onClose,
}: CongratsCardProps) => {
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
                            src={userAvatarUrl === '' ? '' : userAvatarUrl}
                        ></Avatar>
                        <p className={'body1 bold'}>{userName}</p>
                    </div>
                    <div>
                        <p className={'body2 congrats-card-achievement-text'}>
                            {achievementName}
                        </p>
                    </div>
                </div>
                <div className={'congrats-card-buttons-container'}>
                    <div
                        className={'congrats-card-close-icon-container'}
                        onClick={onClose}
                    >
                        <CloseIcon width={'14px'} height={'14px'} />
                    </div>
                    <Button onClick={onClick} variant={'common'} size={'small'}>
                        ¡Felicitar!
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default CongratsCard;
