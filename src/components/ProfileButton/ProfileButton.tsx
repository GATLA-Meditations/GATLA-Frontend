import {Box, Typography} from '@mui/material';
import {TrophyIcon} from '@/assets/TrophyIcon';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react';
import './styles.css';

interface ProfileButtonProps {
    title?:string;
    onClick?: () => void;
    icon?: React.ReactNode
}


const ProfileButton = ({title, onClick, icon:Icon}: ProfileButtonProps) => {
    return (
        <Box className={'profile-buttons'}>
            {Icon}
            <Box className={'profile-button-title-arrow'} onClick={onClick}>
                <Typography className={'h6'}>{title}</Typography>
                <ArrowForwardIosIcon width={'24px'} height={'24px'}/>
            </Box>
        </Box>
    );
};
export default ProfileButton;