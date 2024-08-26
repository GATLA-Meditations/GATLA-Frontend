import './styles.css';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image, { StaticImageData } from 'next/image';

interface AdminCardProps {
    image: StaticImageData;
    text: string;
}

const AdminCard = ({ image, text }: AdminCardProps) => {
    return (
        <Box className={'card-div'}>
            <Box className={'image-card'}>
                <Image
                    src={image}
                    alt="logo"
                    style={{ objectFit: 'contain' }}
                    width={80}
                    height={80}
                />
            </Box>

            <Typography className={'card-text'}>{text}</Typography>
        </Box>
    );
};
export default AdminCard;
