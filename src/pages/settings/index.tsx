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
import React from 'react';
import '../../app/globals.css';
import ModuleSeparator from '@/components/ModuleSeparator';
import WithAuth from '@/components/WithAuth';

const Settings = () => {
    return (
        <Box display={'flex'} flexDirection={'column'} height={'100%'}>
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
                                    control={<Switch />}
                                />
                                <FormControlLabel
                                    label={
                                        <Typography className="body1bold">
                                            Reunión
                                        </Typography>
                                    }
                                    labelPlacement="start"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                    control={<Switch />}
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
                                    control={<Switch />}
                                />
                                <FormControlLabel
                                    label={
                                        <Typography className="body1bold">
                                            Administrativo
                                        </Typography>
                                    }
                                    labelPlacement="start"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                    control={<Switch />}
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

export default WithAuth(Settings);
