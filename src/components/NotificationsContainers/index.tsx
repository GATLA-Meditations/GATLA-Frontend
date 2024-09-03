import React from 'react';
import './styles.css';
import { Box } from '@mui/material';

interface NotificationContainerProps {
    variant: 'motivationalMessage' | 'normal';
    message: string;
    senderImage?: string;
}

const NotificationContainer: React.FC<NotificationContainerProps> = ({
    variant,
    message,
    senderImage,
}) => {
    return (
        <Box className={`notification-container ${variant}`}>
            {variant === 'motivationalMessage' && senderImage && (
                <img src={senderImage} className="sender-image" alt="notification-image"/>
            )}
            <p className="message">{message}</p>
        </Box>
    );
};

export default NotificationContainer;
