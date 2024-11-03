import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import '../../app/globals.css';
import NavBar from '@/components/NavBar';
import TopBar from '@/components/TopBar';
import NotificationsContainers from '@/components/NotificationsContainers';
import './styles.css';

import { Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useRouter } from 'next/router';
import {Notification} from '@/util/types';
import {getUserNotifications} from '@/service/apis';


const Notifications = () => {
    const [notifications, setNotifications] =
        useState<Notification[]>([]);
    const router = useRouter();
    const [page, setPage] = useState(0);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const data = await getUserNotifications(page.toString(10), '10');
                setNotifications(data);
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
                            variant={'motivationalMessage'}
                            message={notification.notification.content}
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
