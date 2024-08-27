import React from 'react';
import TopBar from '@/components/TopBar';
import './styles.css';
import NavBar from '@/components/NavBar';
import Box from '@mui/material/Box';
import '../../app/globals.css';
import Typography from '@mui/material/Typography';
import AdminCard from '@/components/AdminCard';
import logo1 from '@/assets/AdminIcon/AdminIcon1.png';
import logo2 from '@/assets/AdminIcon/AdminIcon2.png';
import logo3 from '@/assets/AdminIcon/AdminIcon3.png';

const InformationScreen = () => {
    const text_renacentia =
        'Renacentia es una web de meditación para pacientes oncologicos...';

    const adminCards = [
        {
            image: logo1,
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis mattis magna aptent nullam congue sagittis suspendisse.',
        },
        {
            image: logo2,
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis mattis magna aptent nullam congue sagittis suspendisse.',
        },
        {
            image: logo3,
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis mattis magna aptent nullam congue sagittis suspendisse.',
        },
    ];

    return (
        <Box height={'100vh'}>
            <TopBar amtNotifications={0} selected={''} />
            <Box className="container-information">
                <Typography className="title-information">
                    ¿Quienes somos?
                </Typography>
                <Typography className="text-information">
                    {text_renacentia}
                </Typography>

                {adminCards.map((card, index) => (
                    <AdminCard
                        key={index}
                        image={card.image}
                        text={card.text}
                    />
                ))}
            </Box>
            <NavBar value={0} />
        </Box>
    );
};

export default InformationScreen;
