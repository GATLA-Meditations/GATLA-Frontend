import { Achievement } from '@/components/Achievements';
import NavBar from '@/components/NavBar';
import TopBar from '@/components/TopBar';
import { Avatar, Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ChangePassword from '@/components/ChangePassword';
import LogoutConfirmationModal from '@/components/LogoutConfirmationModal';
import { getUserItems, getUserProfile, updateUserAvatar } from '@/service/apis';
import WithAuth from '@/components/WithAuth';
import Loader from '@/components/Loader';
import ChangeAvatarModal from '@/components/ChangeAvatarModal';
import PencilIcon from '@/assets/PencilIcon';
import './styles.css';
import WithToast, { WithToastProps } from '@/hoc/withToast';
import {TrophyIcon} from '@/assets/TrophyIcon';
import LockIcon from '@mui/icons-material/Lock';
import ProfileButton from '@/components/ProfileButton/ProfileButton';
import {useRouter} from 'next/router';
import {LogOutIcon} from '@/assets/LogOutIcon';

export interface User {
    patientCode: string;
    image: string;
    background: string;
    achievements: Achievement[];
}

const Profile = ({ showToast }: WithToastProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const [user, setUser] = useState<User>();
    const [isChangeAvatarOpen, setIsChangeAvatarOpen] = useState(false);
    const [avatars, setAvatars] = useState<string[]>([]);
    const [avatar, setAvatar] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState('');
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        handleGetUser().then();
    }, []);

    const handleGetUser = async () => {
        try {
            setIsLoading(true);
            const user = await getUserProfile();
            setUser(user);
            setAvatar(user.image);

            const avatars = await getUserItems().then((items) => {
                return items.filter((item: any) => item.type === 'AVATAR').map((item: any) => item.content_url);
            });
            setAvatars(avatars);
        } catch (error) {
            console.error('Error fetching user data:', error);
        } finally {
            setIsLoading(false);
        }
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
                showToast('Avatar actualizado correctamente', 'success');
            })
            .catch((error) => {
                console.log(error);
            });
    };


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
                height={'100%'}
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
                        sx={{ cursor: 'pointer' }}
                    >
                        <Avatar
                            sx={{
                                width: '13vh',
                                height: '13vh',
                                marginBottom: '1vh',
                                backgroundColor:'black'
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
                    <Typography className="h4" marginBottom={'16px'}>
                        {user?.patientCode}
                    </Typography>
                </Box>
                <Box
                    className={'profile-buttons-container'}
                >
                    <ProfileButton title={'Mis logros'} onClick={() => (router.push('/achievements'))} icon={<TrophyIcon width={'24px'} height={'24px'}/>}/>
                    <ProfileButton title={'Cambiar contraseña'} onClick={handleChangePassword} icon={<LockIcon width={'24px'} height={'24px'}/>}/>
                    <ProfileButton title={'Cerrar sesión'} onClick={handleLogoutClick} icon={<LogOutIcon/>}/>
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

export default WithAuth(WithToast(Profile));
