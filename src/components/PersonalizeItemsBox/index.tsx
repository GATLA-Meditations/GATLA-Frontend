import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ArrowRightIcon from '@/assets/ArrowRightIcon';
import './styles.css';
import StoreElement, { StoreElementProps } from '@/components/StoreElement';
import { chooseBackground } from '@/service/apis';
import ChangeBackgroundModal from '@/components/Modals/ChangeBackgroundModal';

export type PersonalizeItemsBoxProps = {
    label: string;
    items: any[];
};

const PersonalizeItemsBox = ({ label, items }: PersonalizeItemsBoxProps) => {
    const [isBackgroundModalOpen, setIsBackgroundModalOpen] = useState(false);
    const [selectedBackground, setSelectedBackground] = useState<{
        url: string | null;
        name: string | null;
    }>({ url: null, name: null });

    const handleBackgroundChange = (
        backgroundUrl: string,
        backgroundName: string
    ) => {
        setSelectedBackground({ url: backgroundUrl, name: backgroundName });
        setIsBackgroundModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsBackgroundModalOpen(false);
        setSelectedBackground({ url: null, name: null });
    };

    const handleConfirmBackgroundChange = async () => {
        if (selectedBackground.url) {
            try {
                await chooseBackground(selectedBackground.url);
            } catch (error) {
                console.log(error);
            } finally {
                setIsBackgroundModalOpen(false);
                setSelectedBackground({ url: null, name: null });
            }
        }
    };

    return (
        <Box className={'items-container-box'}>
            <Stack direction={'row'} spacing={1} className={'label-stack'}>
                <Typography className={'h6'}>{label}</Typography>
                <ArrowRightIcon width={'16px'} height={'16px'} />
            </Stack>
            <Box className={'store-elements-box'}>
                {items.map((element: StoreElementProps) => (
                    <StoreElement
                        key={element.previewPicture}
                        category={element.category}
                        previewPicture={element.previewPicture}
                        isLocked={element.isLocked}
                        onClick={
                            element.category === 'background' &&
                            !element.isLocked
                                ? () =>
                                    handleBackgroundChange(
                                        element.previewPicture,
                                        element.name || ''
                                    )
                                : undefined
                        }
                    />
                ))}
            </Box>
            {isBackgroundModalOpen && (
                <ChangeBackgroundModal
                    open={isBackgroundModalOpen}
                    onClose={handleCloseModal}
                    onConfirm={handleConfirmBackgroundChange}
                    backgroundName={selectedBackground.name || ''}
                    backgroundPreview={selectedBackground.url}
                />
            )}
        </Box>
    );
};

export default PersonalizeItemsBox;
