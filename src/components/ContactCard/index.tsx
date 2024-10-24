import './styles.css';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {contactMail} from '@/util/information';
import CopyIcon from '@/assets/CopyIcon';

interface ContactCardProps {
    text: string;
}

const ContactCard = ({ text }: ContactCardProps) => {
    const handleCopyButton = () => {
        try {
            navigator.clipboard.writeText(contactMail).then();
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Box className={'description-text-container'}>
            <Typography className="body1">
                {text}
            </Typography>
            <Box className={'mail-contact-container'}>
                <Typography className={'body1 bold'}>
                    {contactMail}
                </Typography>
                <Box
                    display={'flex'}
                    onClick={() => handleCopyButton()}
                >
                    <CopyIcon
                        width={'18px'}
                        height={'18px'}
                        color={'#000'}
                    />
                </Box>
            </Box>
        </Box>
    );
};
export default ContactCard;
