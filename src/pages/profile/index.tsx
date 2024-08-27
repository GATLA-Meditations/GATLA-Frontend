import { Achievement } from '@/components/Achievements';
import Button from '@/components/Button';
import NavBar from '@/components/NavBar';
import TopBar from '@/components/TopBar';
import { Avatar, Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AvatarIcon from '@/assets/AvatarIcon';
import ChangePassword from '@/components/ChangePassword';
import LogoutConfirmationModal from '@/components/LogoutConfirmationModal';
import { getUserItems, getUserProfile, updateUserAvatar } from '@/service/apis';
import WithAuth from '@/components/WithAuth';
import Loader from '@/components/Loader';
import ChangeAvatarModal from '@/components/ChangeAvatarModal';
import PencilIcon from '@/assets/PencilIcon';
import './styles.css';
import Image from 'next/image';
import logo from '@/assets/Logo/logo.png';
import Link from 'next/link';

export interface User {
    patientCode: string;
    image: string;
    achievements: Achievement[];
}

const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const [user, setUser] = useState<User>();
    const [isChangeAvatarOpen, setIsChangeAvatarOpen] = useState(false);
    const [avatars, setAvatars] = useState<string[]>([]);
    const [avatar, setAvatar] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        handleGetUser().then();
        setIsLoading(false);
    }, []);

    const handleGetUser = async () => {
        const user = await getUserProfile();
        setUser(user);
        setAvatar(user.image);
        const avatars = await getUserItems().then((items) => {
            return items.filter((item: any) => item.type === 'AVATAR');
        });
        setAvatars(avatars);
    };

    const handleLogoutClick = () => {
        setIsLogoutModalOpen(true);
    };

    const handleChangePassword = () => {
        setIsModalOpen(true);
    };

    const handleOnChangeAvatar = (avatar: string) => {
        setSelectedAvatar(avatar);
    };

    const handleCancelChangeAvatar = () => {
        setSelectedAvatar(avatar);
    };

    const handleConfirmChangeAvatar = async () => {
        await updateUserAvatar(selectedAvatar)
            .then(() => {
                handleGetUser().then();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // const achivementsMock = [
    //     { type: 'streak', title: '1 día' },
    //     { type: 'streak', title: '2 días' },
    //     { type: 'streak', title: '3 días' },
    //     { type: 'week', title: '1 semana' },
    //     { type: 'week', title: '2 semanas' },
    //     { type: 'week', title: '3 semanas' },
    // ];

    const avatarsMock = [
        'https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18362.png',
        'https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18362.png',
        'https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18362.png',
        'https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18362.png',
        'https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18362.png',
    ];

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} height={'100vh'}>
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
                    <Box
                        className={'avatar-container'}
                        onClick={() =>
                            setIsChangeAvatarOpen(!isChangeAvatarOpen)
                        }
                    >
                        <Avatar
                            sx={{
                                width: '13vh',
                                height: '13vh',
                                marginBottom: '1vh',
                            }}
                            src={
                                selectedAvatar === '' ? avatar : selectedAvatar
                            }
                        ></Avatar>
                        <Box className={'edit-icon'}>
                            {!isChangeAvatarOpen && (
                                <PencilIcon width="35px" height="35px" />
                            )}
                        </Box>
                    </Box>
                    <Typography className="h4 bold" marginBottom={'3vh'}>
                        {user?.patientCode}
                    </Typography>
                    {/*<Achievements*/}
                    {/*    achievements={achivementsMock}*/}
                    {/*    title={'Logros'}*/}
                    {/*    viewMoreButton="Ver más"*/}
                    {/*/>*/}
                </Box>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    sx={{ margin: '3vh', gap: '3vh' }}
                >
                    <Button
                        variant="common"
                        size="medium"
                        onClick={() => (window.location.href = '/achievements')}
                    >
                        Ver logros
                    </Button>
                    <Button
                        variant="common"
                        size="medium"
                        onClick={handleChangePassword}
                    >
                        Cambiar contraseña
                    </Button>
                    <Button
                        variant="red"
                        size="medium"
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
            {isChangeAvatarOpen && (
                <ChangeAvatarModal
                    isOpen={isChangeAvatarOpen}
                    onClose={() => setIsChangeAvatarOpen(false)}
                    avatars={avatars}
                    onChangeAvatar={handleOnChangeAvatar}
                    onCancel={handleCancelChangeAvatar}
                    onConfirm={handleConfirmChangeAvatar}
                />
            )}
            <NavBar value={2} />
        </Box>
    );
};

export default WithAuth(Profile);
