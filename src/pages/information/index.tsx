import React from 'react';
import TopBar from '@/components/TopBar';
import './styles.css';
import NavBar from '@/components/NavBar';
import Box from '@mui/material/Box';
import '../../app/globals.css';
import Typography from '@mui/material/Typography';
import AdminCard from '@/components/AdminCard';
import {
    adminCards,
    contactMail,
    infoContacto,
    textRenacentia,
} from '@/util/information';
import CopyIcon from '@/assets/CopyIcon';
import withToast, {WithToastProps} from '@/hoc/withToast';

const InformationScreen = ({ showToast }: WithToastProps) => {


    const handleCopyButton = () => {
        try{
            navigator.clipboard.writeText(contactMail).then();
            showToast('E-mail copiado al portapapeles', 'success');
        }catch (e){
            console.error(e);
        }
    };

    return (
        <Box height={'100%'} marginBottom={'100px'}>
            <TopBar amtNotifications={0} selected={''} />
            <Box className={'information-page-container'}>
                <Box className={'information-container'}>
                    <Typography
                        className="h5 bold"
                        color={'var(--secondary-600)'}
                    >
                        Descripción
                    </Typography>
                    <Box className={'description-text-container'}>
                        <Typography className="body1">
                            {textRenacentia}
                        </Typography>
                    </Box>
                </Box>
                <Box className={'information-container'}>
                    <Typography
                        className="h5 bold"
                        color={'var(--secondary-600)'}
                    >
                        Equipo Renacentia
                    </Typography>
                    {adminCards.map((card, index) => (
                        <AdminCard
                            key={index}
                            image={card.image}
                            tags={card.tags}
                            name={card.name}
                            text={card.text}
                        />
                    ))}
                </Box>
                <Box className={'information-container'}>
                    <Box className={'description-text-container'}>
                        <Typography
                            className="body1"
                        >
                            {infoContacto}
                        </Typography>
                        <Box className={'mail-contact-container'}>
                            <Typography className={'body1 bold'}>{contactMail}</Typography>
                            <Box display={'flex'} onClick={() => handleCopyButton()}>
                                <CopyIcon
                                    width={'18px'}
                                    height={'18px'}
                                    color={'#000'}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <NavBar value={0} />
        </Box>
    );
};

export default withToast(InformationScreen);
