import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ArrowRightIcon from '@/assets/ArrowRightIcon';
import './styles.css';

export type PersonalizeItemsBoxProps = {
    label: string;
    items: any[];
};

const PersonalizeItemsBox = ({ label, items }: PersonalizeItemsBoxProps) => {
    return (
        <Box className={'items-container-box'}>
            <Stack direction={'row'} spacing={1} className={'label-stack'}>
                <Typography>{label}</Typography>
                <ArrowRightIcon width={'16px'} height={'16px'} />
            </Stack>
            <Box className={'store-elements-box'}></Box>
        </Box>
    );
};
export default PersonalizeItemsBox;
