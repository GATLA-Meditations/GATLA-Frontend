import { Box, Modal, Typography, IconButton } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './styles.css';
import '@/app/globals.css';
import Button from '@/components/Button';

interface GenericModalProps {
    open: boolean;
    title?: string;
    onClose: () => void;
    description?: string;
    size?: 'small' | 'medium' | 'large';
    topButton?: boolean;
    topButtonText?: string;
    topButtonColor?: string;
    topButtonAction: () => void;
    bottomButton?: boolean;
    bottomButtonText?: string;
    bottomButtonColor?: string;
    pictureUrl?: string;
    backgroundColor?: string;
    topButtonDisabled?: boolean;
}

const GenericModal = ({
    open,
    title,
    description,
    size = 'medium',
    pictureUrl,
    topButtonAction,
    onClose,
    topButtonText = 'Confirmar',
    topButtonColor,
    bottomButton = true,
    bottomButtonText = 'Cancelar',
    bottomButtonColor,
    backgroundColor = 'var(--primary-100)',
    topButtonDisabled,
}: GenericModalProps) => {
    const handleConfirm = () => {
        topButtonAction();
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <Modal open={open} onClose={handleClose} className="modal-container">
            <Box
                className={`modal-style modal-${size}`}
                style={{ backgroundColor, position: 'relative', outline:'none'}}
            >
                <IconButton
                    className="modal-close-button"
                    onClick={handleClose}
                    style={{ position: 'absolute', top: 8, right: 8 }}
                >
                    <CloseIcon />
                </IconButton>

                <Box>
                    {title && (
                        <Typography className="modal-title">{title}</Typography>
                    )}
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
                        onClick={handleConfirm}
                        className={topButtonColor}
                        disabled={topButtonDisabled}
                    >
                        {topButtonText}
                    </Button>
                    {bottomButton && (
                        <Button
                            size="small"
                            onClick={handleClose}
                            className={bottomButtonColor}
                        >
                            {bottomButtonText}
                        </Button>
                    )}
                </Box>
            </Box>
        </Modal>
    );
};

export default GenericModal;
