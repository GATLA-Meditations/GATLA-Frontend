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
import {Notification} from '@/util/types';

// type Notification = {
//     variant: 'normal' | 'motivationalMessage';
//     message: string;
//     senderImage: string | undefined;
// };
//
// const notificationsMock: Notification[] = [
//     {
//         variant: 'normal',
//         message: '¡Bienvenido a Renacentia!',
//         senderImage: undefined,
//     },
//     {
//         variant: 'motivationalMessage',
//         message: '¡Ánimo en tu tratamiento!',
//         senderImage:
//             'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
//     },
// ];

const Notifications = () => {
    const [notifications, setNotifications] =
        useState<Notification[]>([]);
    const router = useRouter();
    const [page, setPage] = useState(0);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const data = await useGetUserNotifications(page.toString(10), '10');
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
            {/*<Box className={'notifications'}>*/}
            {/*    {notifications.length > 0 ? (*/}
            {/*        notifications.map((notification, index) => (*/}
            {/*            <NotificationsContainers*/}
            {/*                variant={notification.variant}*/}
            {/*                message={notification.message}*/}
            {/*                senderName={'gtl-135'}*/}
            {/*                senderImage={notification?.senderImage || undefined}*/}
            {/*                key={index}*/}
            {/*            />*/}
            {/*        ))*/}
            {/*    ) : (*/}
            {/*        <div*/}
            {/*            style={{*/}
            {/*                display: 'flex',*/}
            {/*                textAlign: 'center',*/}
            {/*                gap: 20,*/}
            {/*                flexDirection: 'column',*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            <Typography>Aún no tienes notificaciones</Typography>*/}
            {/*            <Typography>¡Ánimo en tu tratamiento!</Typography>*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</Box>*/}
            <NavBar value={0} />
        </Box>
    );
};

export default Notifications;
