import { Avatar, Box } from '@mui/material';
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

    const handleConfirm = () => {
        onConfirm && onConfirm();
        // le pega al endpoint para actualizar la foto de perfil
        onClose();
    };

    const handleCancel = () => {
        onCancel();
        onClose();
    };

    return (
        <Box>
            {isOpen && (
                <Box className="modal-container">
                    <Box className="avatar-container">
                        {avatars.map((avatar, index) => (
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
                        ))}
                    </Box>
                    <Box className="button-container">
                        <Button
                            className="confirm-button"
                            onClick={handleConfirm}
                        >
                            Confirmar
                        </Button>
                        <Button
                            className="cancel-button"
                            variant="red"
                            onClick={handleCancel}
                        >
                            Cancelar
                        </Button>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default ChangeAvatarModal;
