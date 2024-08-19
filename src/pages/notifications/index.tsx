import React from 'react';
import Box from '@mui/material/Box';
import '../../app/globals.css';
import NavBar from '@/components/NavBar';
import TopBar from '@/components/TopBar';
import NotificationsContainers from '@/components/NotificationsContainers';
import './styles.css';

const Notifications = () => {
    type NotificationVariant = 'normal' | 'motivationalMessage';

    const notifications: {
        variant: NotificationVariant;
        message: string;
        senderImage?: string;
    }[] = [
        {
            variant: 'normal',
            message: 'You have a new message from John Doe',
        },
        {
            variant: 'motivationalMessage',
            message: 'You are doing great!',
            senderImage: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        {
            variant: 'normal',
            message: 'You have a new message from John Doe',
        },
        {
            variant: 'motivationalMessage',
            message: 'You are doing great!',
            senderImage: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        {
            variant: 'normal',
            message: 'You have a new message from John Doe',
        },
        {
            variant: 'motivationalMessage',
            message: 'You are doing great!',
            senderImage: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
    ];

    return (
        <Box height={'100vh'} className={'notifications-container'}>
            <TopBar amtNotifications={0} />
            <Box className={'notifications'}>
                {notifications.map((notification, index) => (
                    <NotificationsContainers
                        variant={notification.variant}
                        message={notification.message}
                        senderImage={notification?.senderImage || undefined}
                        key={index}
                    />
                ))}
            </Box>
            <NavBar value={1} />
        </Box>
    );
};

export default Notifications;
