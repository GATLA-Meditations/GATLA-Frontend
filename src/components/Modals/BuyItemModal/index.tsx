import GenericModal from '@/components/GenericModal';
import React from 'react';

export interface BuyItemModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    itemName: string;
    itemPreview: any;
    isConfirmButtonDisabled?: boolean;
}

const BuyItemModal = ({
    open,
    onClose,
    onConfirm,
    itemName,
    itemPreview,
    isConfirmButtonDisabled,
}: BuyItemModalProps) => {
    return (
        <GenericModal
            open={open}
            onClose={onClose}
            title="Desbloquear objeto"
            description={`¿Seguro que quieres desbloquear ${itemName}?`}
            topButtonText="Confirmar"
            topButtonAction={onConfirm}
            topButtonColor="common"
            bottomButtonText="Cancelar"
            bottomButtonColor="red"
            pictureUrl={itemPreview}
            topButtonDisabled={isConfirmButtonDisabled}
        />
    );
};

export default BuyItemModal;
