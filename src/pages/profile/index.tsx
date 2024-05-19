import Button from '@/components/Button';
import NavBar from '@/components/NavBar';
import TopBar from '@/components/TopBar';
import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

const Profile = () => {
    const handleLogout = () => {
        //implement method to logout
        console.log('Logout');
    };

    const handleChangePassword = () => {
        //implement method to change password
        console.log('Change Password');
    };

    return (
        <Box display={'flex'} flexDirection={'column'} height={'100vh'}>
            <TopBar amtNotifications={0} />
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-around'}
                alignItems={'center'}
                height={'inherit'}
            >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                >
                    <Avatar
                        sx={{
                            width: '15vh',
                            height: '15vh',
                            marginBottom: '2vh',
                        }}
                    ></Avatar>
                    <Typography className="h5 bold">Name Lastname</Typography>
                </Box>
                <Button variant="green" size="large" onClick={handleChangePassword}>
                    Cambiar contraseña
                </Button>
                <Button variant="red" size="large" onClick={handleLogout}>
                    Cerrar sesión
                </Button>
            </Box>
            <NavBar value={2} />
        </Box>
    );
};

export default Profile;
