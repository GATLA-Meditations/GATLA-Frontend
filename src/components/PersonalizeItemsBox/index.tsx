import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ArrowRightIcon from '@/assets/ArrowRightIcon';
import './styles.css';
import StoreElement from '@/components/StoreElement';

export type PersonalizeItemsBoxProps = {
    label: string;
    items: any[];
};

const PersonalizeItemsBox = ({ label, items }: PersonalizeItemsBoxProps) => {
    return (
        <Box className={'items-container-box'}>
            <Stack direction={'row'} spacing={1} className={'label-stack'}>
                <Typography className={'h6'}>{label}</Typography>
                <ArrowRightIcon width={'16px'} height={'16px'} />
            </Stack>
            <Box className={'store-elements-box'}>
                {items.map((element) => (
                    <StoreElement
                        category={element.category}
                        previewPicture={element.previewPicture}
                        isLocked={element.isLocked}
                    />
                ))}
            </Box>
        </Box>
    );
};
export default PersonalizeItemsBox;
