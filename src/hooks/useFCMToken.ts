import { useEffect, useState } from 'react';
import { getMessaging, getToken } from 'firebase/messaging';
import { firebaseApp } from '@/service/firebase';
import { saveUserNotificationToken } from '@/service/apis';

const useFcmToken = () => {
    const [token, setToken] = useState('');
    const [notificationPermissionStatus, setNotificationPermissionStatus] =
        useState('');

    useEffect(() => {
        const retrieveToken = async () => {
            try {
                if (
                    typeof window !== 'undefined' &&
                    'serviceWorker' in navigator
                ) {
                    const messaging = getMessaging(firebaseApp);

                    const permission = await Notification.requestPermission();
                    setNotificationPermissionStatus(permission);

                    if (permission === 'granted') {
                        const currentToken = await getToken(messaging, {
                            vapidKey:
                                process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
                        });
                        if (currentToken) {
                            console.log('token:', currentToken);
                            setToken(currentToken);
                            await saveUserNotificationToken({
                                token: currentToken,
                            });
                        } else {
                            console.log(
                                'No registration token available. Request permission to generate one.'
                            );
                        }
                    }
                }
            } catch (error) {
                console.log('An error occurred while retrieving token:', error);
            }
        };

        retrieveToken();
    }, []);

    return { fcmToken: token, notificationPermissionStatus };
};

export default useFcmToken;
