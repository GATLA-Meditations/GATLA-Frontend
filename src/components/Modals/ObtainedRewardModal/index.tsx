import React from 'react';
import GenericModal from '@/components/GenericModal';

export interface ObtainedBackgroundProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    backgroundName: string;
    backgroundPreview: any;
}

const ObtainedRewardModal = ({
    open,
    onClose,
    onConfirm,
    backgroundName,
    backgroundPreview,
}: ObtainedBackgroundProps) => {
    return (
        <GenericModal
            open={open}
            onClose={onClose}
            title="¡Has obtenido una recompensa!"
            description={`${backgroundName}`}
            topButtonText="Reclamar"
            topButtonAction={onConfirm}
            topButtonColor="common"
            bottomButton={false}
            pictureUrl={backgroundPreview}
        />
    );
};

export default ObtainedRewardModal;
