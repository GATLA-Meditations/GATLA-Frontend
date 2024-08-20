import React from 'react';
import GenericModal from '@/components/GenericModal';

export interface ChangeBackgroundModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    backgroundName: string;
    backgroundPreview: any;
}

const ChangeBackgroundModal = ({
    open,
    onClose,
    onConfirm,
    backgroundName,
    backgroundPreview,
}: ChangeBackgroundModalProps) => {
    return (
        <GenericModal
            open={open}
            onClose={onClose}
            title="Cambiar el fondo"
            description={`¿Seguro que quieres seleccionar el fondo ${backgroundName}?`}
            topButtonText="Confirmar"
            topButtonAction={onConfirm}
            topButtonColor="common"
            bottomButtonText="Cancelar"
            bottomButtonColor="red"
            pictureUrl={backgroundPreview}
        />
    );
};

export default ChangeBackgroundModal;
