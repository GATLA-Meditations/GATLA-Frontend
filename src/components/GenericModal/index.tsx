import { Box, Modal, Typography } from '@mui/material';
import React from 'react';
import './styles.css';
import '@/app/globals.css';
import Button from '@/components/Button';

interface GenericModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    description?: string;
    size?: 'small' | 'medium' | 'large';
    pictureUrl?: string;
    confirmText?: string;
    cancelText?: string;
    backgroundColor?: string;
}

const GenericModal = ({
    open,
    onClose,
    onConfirm,
    title,
    description,
    size = 'medium',
    pictureUrl,
    confirmText = 'Confirmar',
    cancelText = 'Cancelar',
    backgroundColor = 'white',
}: GenericModalProps) => {
    const handleConfirm = () => {
        onConfirm();
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <Modal open={open} onClose={handleClose} className="modal-container">
            <Box
                className={`modal-style modal-${size}`}
                style={{ backgroundColor }}
            >
                <Box>
                    <Typography className='modal-title'>{title}</Typography>
                </Box>
                {pictureUrl && (
                    <Box className="modal-picture">
                        <img src={pictureUrl} alt="modal" />
                    </Box>
                )}
                {description && (
                    <Typography className="modal-description">
                        {description}
                    </Typography>
                )}
                <Box className="button-box">
                    <Button
                        size="small"
                        variant="green"
                        onClick={handleConfirm}
                    >
                        {confirmText}
                    </Button>
                    <Button size="small" variant="red" onClick={handleClose}>
                        {cancelText}
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default GenericModal;
