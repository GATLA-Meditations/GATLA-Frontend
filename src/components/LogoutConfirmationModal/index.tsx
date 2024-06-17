import { Box, Modal, Typography } from '@mui/material';
import React from 'react';
import './styles.css';
import '@/app/globals.css';
import Button from '../Button';
import { useRouter } from 'next/router';
import { removeToken } from '@/service/store';

interface ModalProps {
    open: boolean;
    onClose: () => void;
}

const LogoutConfirmationModal = ({ open, onClose }: ModalProps) => {
    const router = useRouter();
    const handleCloseModal = () => {
        onClose();
    };

    const handleLogout = () => {
        removeToken();
        router.push('/login');
    };

    return (
        <Modal open={open} onClose={handleCloseModal}>
            <Box className="modal-style">
                <Box>
                    <Typography className="h4 bold">¿Cerrar sesión?</Typography>
                </Box>
                <Box className="button-box">
                    <Button size="small" variant="green" onClick={handleLogout}>
                        Aceptar
                    </Button>
                    <Button
                        size="small"
                        variant="red"
                        onClick={handleCloseModal}
                    >
                        Cancelar
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default LogoutConfirmationModal;
