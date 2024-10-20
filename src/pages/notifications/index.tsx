import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import '../../app/globals.css';
import NavBar from '@/components/NavBar';
import TopBar from '@/components/TopBar';
import NotificationsContainers from '@/components/NotificationsContainers';
import './styles.css';
import { useGetUserNotifications } from '@/service/apis';
import { Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useRouter } from 'next/router';

type Notification = {
    variant: 'normal' | 'motivationalMessage';
    message: string;
    senderImage: string | undefined;
};

const Notifications = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                // eslint-disable-next-line react-hooks/rules-of-hooks
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
            <TopBar
                selected="notifications"
                amtNotifications={notifications.length}
            />
            <div
                style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    width: '90%',
                    color: 'black',
                    marginLeft: '10px',
                    marginTop: '20px',
                }}
            >
                <ArrowBackIosNewIcon
                    sx={{ cursor: 'pointer' }}
                    onClick={() => router.push('/home')}
                />
            </div>
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
            <NavBar value={0} />
        </Box>
    );
};

export default Notifications;
