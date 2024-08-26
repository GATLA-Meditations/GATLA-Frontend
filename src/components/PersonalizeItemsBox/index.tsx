import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ArrowRightIcon from '@/assets/ArrowRightIcon';
import './styles.css';
import StoreElement, { StoreElementProps } from '@/components/StoreElement';
import { buyItem, chooseBackground } from '@/service/apis';
import ChangeBackgroundModal from '@/components/Modals/ChangeBackgroundModal';
import BuyItemModal from '../Modals/BuyItemModal';

export type PersonalizeItemsBoxProps = {
    label: string;
    items: any[];
    onUpdateItems: () => void;
    unlocks: number;
};

const PersonalizeItemsBox = ({ label, items, onUpdateItems, unlocks }: PersonalizeItemsBoxProps) => {
    const [isBackgroundModalOpen, setIsBackgroundModalOpen] = useState(false);
    const [selectedBackground, setSelectedBackground] = useState<{
        url: string | null;
        name: string | null;
    }>({ url: null, name: null });
    const [isBuyItemModalOpen, setIsBuyItemModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<StoreElementProps>(
        {} as StoreElementProps
    );

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
                console.error(error);
            } finally {
                setIsBackgroundModalOpen(false);
                setSelectedBackground({ url: null, name: null });
            }
        }
    };

    const handleSelectBuyItem = (item: StoreElementProps) => {
        setSelectedItem(item);
        setIsBuyItemModalOpen(true);
    };

    const handleBuyItem = async () => {
        await buyItem(selectedItem.id)
            .then(() => {
                setIsBuyItemModalOpen(false);
                setSelectedItem({} as StoreElementProps);
                onUpdateItems();
            })
            .catch((error) => {
                console.error(error);
            });
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
                        id={element.id}
                        key={element.previewPicture}
                        type={element.type}
                        previewPicture={element.previewPicture}
                        isLocked={element.isLocked}
                        onClick={
                            !element.isLocked
                                ? element.type === 'BACKGROUND'
                                    ? () =>
                                        handleBackgroundChange(
                                            element.previewPicture,
                                            element.name || ''
                                        )
                                    : undefined
                                : () => handleSelectBuyItem(element)
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
            {isBuyItemModalOpen && (
                <BuyItemModal
                    open={isBuyItemModalOpen}
                    onClose={() => setIsBuyItemModalOpen(false)}
                    onConfirm={handleBuyItem}
                    itemName={selectedItem.name || ''}
                    itemPreview={selectedItem.previewPicture}
                    isConfirmButtonDisabled={unlocks < selectedItem.price!!}
                />
            )}
        </Box>
    );
};

export default PersonalizeItemsBox;
