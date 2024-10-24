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
    textRenacentia,
} from '@/util/information';
import withToast, { WithToastProps } from '@/hoc/withToast';
import ContactCard from '../../components/ContactCard';

const InformationScreen = ({ showToast }: WithToastProps) => {

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
                    <ContactCard text={' Si tienes algun problema o consulta no dudes en contactarnos en:'}/>
                </Box>
            </Box>
            <NavBar value={0} />
        </Box>
    );
};

export default withToast(InformationScreen);
