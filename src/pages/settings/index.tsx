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
import WithAuth from '@/components/WithAuth';
import {
    getNotificationSettings,
    updateNotificationSettings,
} from '@/service/apis';
import { WithToastProps } from '@/hoc/withToast';
import WithToast from '@/hoc/withToast';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SpaIcon from '@mui/icons-material/Spa';
import AbcIcon from '@mui/icons-material/Abc';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useRouter } from 'next/router';

const Settings = ({ showToast }: WithToastProps) => {
    const [notifications, setNotifications] = useState({
        meditationNotifications: false,
        motivationalNotifications: false, // son los achievements pero en el back se llaman asi
        phrasesNotifications: false,
    });
    const router = useRouter();

    useEffect(() => {
        getNotificationSettings().then((data) => {
            setNotifications(data);
        });
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newNotifications = {
            ...notifications,
            [event.target.name]: event.target.checked,
        };
        setNotifications(newNotifications);
        updateNotificationSettings(newNotifications).then((r) =>
            showToast('Configuración actualizada', 'success')
        );
    };

    return (
        <Box display={'flex'} flexDirection={'column'} height={'100vh'}>
            <Box marginBottom={'3vh'}>
                <TopBar amtNotifications={0} selected="settings"></TopBar>
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
                    <ArrowBackIosNewIcon onClick={() => router.push('/home')} />
                </div>
            </Box>
            <Box
                display={'flex'}
                flexDirection={'column'}
                padding={'2vh'}
                gap={'16px'}
            >
                <Typography className={'h5'}>Configuración</Typography>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'space-evenly'}
                    padding={'2vh'}
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '16px',
                        gap: '16px',
                    }}
                >
                    <Typography className="h6">Notificaciones</Typography>
                    <FormControl>
                        <FormGroup sx={{ gap: '16px' }}>
                            <Box
                                display="flex"
                                alignItems="center"
                                flexDirection={'row'}
                                width="100%"
                            >
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    bgcolor={'primary.main'}
                                    borderRadius="8px"
                                    padding="4px"
                                >
                                    <EmojiEventsIcon
                                        style={{ color: 'white' }}
                                    />
                                </Box>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    width="100%"
                                >
                                    <FormControlLabel
                                        label={
                                            <Box>
                                                <Typography className="body1bold">
                                                    Logros
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                >
                                                    Cuando obtienes un logro
                                                </Typography>
                                            </Box>
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
                                </Box>
                            </Box>
                            <Box
                                display="flex"
                                alignItems="center"
                                flexDirection={'row'}
                                width="100%"
                            >
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    bgcolor={'primary.main'}
                                    borderRadius="8px"
                                    padding="4px"
                                >
                                    <SpaIcon style={{ color: 'white' }} />
                                </Box>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    width="100%"
                                >
                                    <FormControlLabel
                                        label={
                                            <Box>
                                                <Typography className="body1bold">
                                                    Meditación
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                >
                                                    Cuando es hora de meditar
                                                </Typography>
                                            </Box>
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
                                </Box>
                            </Box>
                            <Box
                                display="flex"
                                alignItems="center"
                                flexDirection={'row'}
                                width="100%"
                            >
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    bgcolor={'primary.main'}
                                    borderRadius="8px"
                                    padding="4px"
                                >
                                    <AbcIcon style={{ color: 'white' }} />
                                </Box>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    width="100%"
                                >
                                    <FormControlLabel
                                        label={
                                            <Box>
                                                <Typography className="body1bold">
                                                    Frases motivacionales
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                >
                                                    Recibir una frase
                                                </Typography>
                                            </Box>
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
                                </Box>
                            </Box>
                        </FormGroup>
                    </FormControl>
                </Box>
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
                <NavBar value={-1}></NavBar>
            </Box>
        </Box>
    );
};
export default WithAuth(WithToast(Settings));
