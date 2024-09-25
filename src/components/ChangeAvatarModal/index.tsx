import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import Button from '../Button';
import './styles.css';

interface ChangeAvatarModalProps {
    isOpen: boolean;
    onClose: () => void;
    avatars: string[];
    onChangeAvatar: (avatar: string) => void;
    onCancel: () => void;
    onConfirm?: () => void;
}

interface AvatarProps {
    src: string;
    index: number;
}

const ChangeAvatarModal = ({
                               isOpen,
                               onClose,
                               avatars,
                               onChangeAvatar,
                               onCancel,
                               onConfirm,
                           }: ChangeAvatarModalProps) => {
    const [selectedAvatar, setSelectedAvatar] = React.useState<AvatarProps>();

    const handleSelectAvatar = (avatar: string, index: number) => {
        setSelectedAvatar({ src: avatar, index });
        onChangeAvatar(avatar);
    };

    const handleConfirm = async () => {
        onConfirm && onConfirm();
        onClose();
    };

    const handleCancel = () => {
        onCancel();
        onClose();
    };

    const handleGoToShop = () => {
        onClose();
        window.location.href = '/personalize';
    };

    return (
        <Box>
            {isOpen && (
                <>
                    {/* Overlay for background blur/darkening */}
                    <Box className="modal-overlay" onClick={onClose}></Box>

                    {/* Modal */}
                    <Box className="modal-container">
                        <Box className="avatar-container">
                            {avatars.length == 0 ? (
                                <Typography style={{ textAlign: 'center' }}>
                                    No tienes avatars todavía.<br />Puedes desbloquearlos en el segmento de personalización
                                </Typography>
                            ) : (
                                avatars.map((avatar, index) => (
                                    <Box
                                        key={index}
                                        onClick={() =>
                                            handleSelectAvatar(avatar, index)
                                        }
                                    >
                                        <Avatar
                                            className={`avatar ${
                                                selectedAvatar?.index === index
                                                    ? 'selected'
                                                    : ''
                                            }`}
                                            src={avatar}
                                        />
                                    </Box>
                                ))
                            )}
                        </Box>
                        <Box className="button-container">
                            <>
                                {avatars.length == 0 ? (
                                    <Button
                                        className="personalize-button"
                                        onClick={handleGoToShop}
                                    >
                                        Personalizar
                                    </Button>
                                ) : (
                                    <Button
                                        className="confirm-button"
                                        onClick={handleConfirm}
                                    >
                                        Confirmar
                                    </Button>)
                                }
                                <Button
                                    className="cancel-button"
                                    variant="red"
                                    onClick={handleCancel}
                                >
                                    Cancelar
                                </Button>
                            </>
                        </Box>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default ChangeAvatarModal;