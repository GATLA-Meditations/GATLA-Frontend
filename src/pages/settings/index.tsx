import NavBar from '@/components/NavBar';
import TopBar from '@/components/TopBar';
import {
    Box,
    FormControl,
    FormControlLabel,
    FormGroup,
    Switch,
    Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../app/globals.css';
import ModuleSeparator from '@/components/ModuleSeparator';
import WithAuth from '@/components/WithAuth';
import {
    getNotificationSettings,
    updateNotificationSettings,
} from '@/service/apis';
import withToast, { WithToastProps } from '@/hoc/withToast';
import WithToast from '@/hoc/withToast';

const Settings = ({ showToast }: WithToastProps) => {
    const [notifications, setNotifications] = useState({
        meditationNotifications: false,
        motivationalNotifications: false, // son los achievements pero en el back se llaman asi
        phrasesNotifications: false,
    });

    useEffect(() => {
        getNotificationSettings().then((data) => {
            setNotifications(data);
        });
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.name);
        const newNotifications = {
            ...notifications,
            [event.target.name]: event.target.checked,
        };
        setNotifications(newNotifications);
        console.log(newNotifications);
        updateNotificationSettings(newNotifications).then((r) =>
            showToast('Configuración actualizada', 'success')
        );
    };

    return (
        <Box display={'flex'} flexDirection={'column'} height={'100vh'}>
            <Box marginBottom={'3vh'}>
                <TopBar amtNotifications={0} selected="settings"></TopBar>
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
                <ModuleSeparator
                    text="Configuración"
                    textColor="black"
                    separatorColor="black"
                    textAlign="left"
                ></ModuleSeparator>
                <Box padding={'3vh'}>
                    <Typography className="h6 bold">Notificaciones:</Typography>
                    <Typography className="body1" padding={'1vh'}>
                        Activa o desactiva las notificaciones
                    </Typography>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'space-evenly'}
                    >
                        <FormControl>
                            <FormGroup>
                                <FormControlLabel
                                    label={
                                        <Typography className="body1bold">
                                            Logros
                                        </Typography>
                                    }
                                    labelPlacement="start"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                    control={
                                        <Switch
                                            name="motivationalNotifications"
                                            checked={
                                                notifications.motivationalNotifications
                                            }
                                            onChange={handleChange}
                                        />
                                    }
                                />
                                <FormControlLabel
                                    label={
                                        <Typography className="body1bold">
                                            Meditación
                                        </Typography>
                                    }
                                    labelPlacement="start"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                    control={
                                        <Switch
                                            name="meditationNotifications"
                                            checked={
                                                notifications.meditationNotifications
                                            }
                                            onChange={handleChange}
                                        />
                                    }
                                />
                                <FormControlLabel
                                    label={
                                        <Typography className="body1bold">
                                            Frases motivacionales
                                        </Typography>
                                    }
                                    labelPlacement="start"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                    control={
                                        <Switch
                                            name="phrasesNotifications"
                                            checked={
                                                notifications.phrasesNotifications
                                            }
                                            onChange={handleChange}
                                        />
                                    }
                                />
                            </FormGroup>
                        </FormControl>
                    </Box>
                </Box>
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
                <NavBar value={-1}></NavBar>
            </Box>
        </Box>
    );
};
export default WithAuth(WithToast(Settings));
