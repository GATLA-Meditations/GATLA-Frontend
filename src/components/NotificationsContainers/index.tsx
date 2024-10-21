import React from 'react';
import './styles.css';
import { Box } from '@mui/material';

interface NotificationContainerProps {
    variant: 'motivationalMessage' | 'normal';
    message: string;
    senderImage?: string;
    senderName?: string;
}

const NotificationContainer: React.FC<NotificationContainerProps> = ({
    variant,
    message,
    senderImage,
    senderName,
}) => {
    return (
        <Box className={`notification-container ${variant}`}>
            {variant === 'motivationalMessage' && senderImage && (
                <img
                    src={senderImage}
                    className="sender-image"
                    alt={'notification-image'}
                />
            )}
            <div className={'notification-text-container'}>
                <p>{senderName}</p>
                <p className="message">{message}</p>
            </div>
        </Box>
    );
};

export default NotificationContainer;
