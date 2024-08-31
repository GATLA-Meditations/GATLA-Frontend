import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import '../../app/globals.css';
import NavBar from '@/components/NavBar';
import TopBar from '@/components/TopBar';
import NotificationsContainers from '@/components/NotificationsContainers';
import './styles.css';
import { useGetUserNotifications } from '@/service/apis';
import { Typography } from '@mui/material';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const data = await useGetUserNotifications();
                setNotifications(data || []);
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };

        fetchNotifications();
    }, []);

    return (
        <Box height={'100vh'} className={'notifications-container'}>
            <TopBar amtNotifications={notifications.length} />
            <Box className={'notifications'}>
                {notifications.length > 0 ? (
                    notifications.map((notification, index) => (
                        <NotificationsContainers
                            variant={notification.variant}
                            message={notification.message}
                            senderImage={notification?.senderImage || undefined}
                            key={index}
                        />
                    ))
                ) : (
                    <div
                        style={{
                            display: 'flex',
                            textAlign: 'center',
                            gap: 20,
                            flexDirection: 'column',
                        }}
                    >
                        <Typography>Aún no tienes notificaciones</Typography>
                        <Typography>¡Ánimo en tu tratamiento!</Typography>
                    </div>
                )}
            </Box>
            <NavBar value={1} />
        </Box>
    );
};

export default Notifications;
