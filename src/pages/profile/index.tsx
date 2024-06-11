import Achievements from '@/components/Achievements';
import Button from '@/components/Button';
import NavBar from '@/components/NavBar';
import TopBar from '@/components/TopBar';
import { Avatar, Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import AvatarIcon from '@/assets/AvatarIcon';
import ChangePassword from '@/components/ChangePassword';
import LogoutConfirmationModal from '@/components/LogoutConfirmationModal';
import WithAuth from '@/components/WithAuth';

const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

    const handleLogoutClick = () => {
        setIsLogoutModalOpen(true);
    };

    const handleChangePassword = () => {
        setIsModalOpen(true);
    };

    const achivementsMock = [
        { type: 'streak', title: '1 día' },
        { type: 'streak', title: '2 días' },
        { type: 'streak', title: '3 días' },
        { type: 'week', title: '1 semana' },
        { type: 'week', title: '2 semanas' },
        { type: 'week', title: '3 semanas' },
    ];

    return (
        <Box display={'flex'} flexDirection={'column'} height={'100%'}>
            <Box marginBottom={'3vh'}>
                <TopBar amtNotifications={0} />
            </Box>
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-around'}
                alignItems={'center'}
                marginBottom={'5vh'}
            >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                >
                    <Avatar
                        sx={{
                            width: '13vh',
                            height: '13vh',
                            marginBottom: '1vh',
                        }}
                    >
                        <AvatarIcon />
                    </Avatar>
                    <Typography className="h4 bold" marginBottom={'3vh'}>
                        Name Lastname
                    </Typography>
                    <Achievements
                        achievements={achivementsMock}
                        title={'Logros'}
                        viewMoreButton="Ver más"
                    />
                </Box>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    sx={{ margin: '3vh', gap: '3vh' }}
                >
                    <Button
                        variant="green"
                        size="large"
                        onClick={handleChangePassword}
                    >
                        Cambiar contraseña
                    </Button>
                    <Button
                        variant="red"
                        size="large"
                        onClick={handleLogoutClick}
                    >
                        Cerrar sesión
                    </Button>
                </Box>
            </Box>
            {isModalOpen && (
                <ChangePassword closeModal={() => setIsModalOpen(false)} />
            )}
            {isLogoutModalOpen && (
                <LogoutConfirmationModal
                    open={isLogoutModalOpen}
                    onClose={() => setIsLogoutModalOpen(false)}
                />
            )}
            <NavBar value={2} />
        </Box>
    );
};

export default WithAuth(Profile);
