import React from 'react';
import Box from '@mui/material/Box';
import '../../app/globals.css';
import NavBar from '@/components/NavBar';
import Typography from '@mui/material/Typography';
import './styles.css';
import Stack from '@mui/material/Stack';
import PersonalizeChip from '@/components/PersonalizeChip';
import PersonalizeItemsBox from '@/components/PersonalizeItemsBox';
import CircularProgressComponent from '@/components/CircularProgress';
import TopBar from '@/components/TopBar';
import { getShopItems } from '@/service/apis';

// const backgroundStoreElements: StoreElementProps[] = [
//     {
//         category: 'background',
//         isLocked: false,
//         previewPicture:
//             'https://trayectoriasenviaje.com/wp-content/uploads/2018/02/porto-galinhas-portada-256x256.jpg',
//     },
//     {
//         category: 'background',
//         isLocked: true,
//         previewPicture:
//             'https://trayectoriasenviaje.com/wp-content/uploads/2018/02/porto-galinhas-portada-256x256.jpg',
//     },
//     {
//         category: 'background',
//         isLocked: true,
//         previewPicture:
//             'https://trayectoriasenviaje.com/wp-content/uploads/2018/02/porto-galinhas-portada-256x256.jpg',
//     },
// ];
//
// const profileStoreElements: StoreElementProps[] = [
//     {
//         category: 'icon',
//         isLocked: false,
//         previewPicture:
//             'https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18362.png',
//     },
//     {
//         category: 'icon',
//         isLocked: true,
//         previewPicture:
//             'https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18362.png',
//     },
//     {
//         category: 'icon',
//         isLocked: true,
//         previewPicture:
//             'https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18362.png',
//     },
// ];

const Personalize = () => {
    const shopItems = getShopItems();
    const backgroundStoreElements = shopItems.filter(
        (item) => item.type === 'BACKGROUND'
    );
    const avatarStoreElements = shopItems.filter(
        (item) => item.type === 'AVATAR'
    );

    return (
        <Box height={'100vh'} className={'personalize-container'}>
            <TopBar amtNotifications={0} />
            <Box className={'personalize-title-div'}>
                <Box className={'title-progress-div'}>
                    <Typography className={'h5'}>Mi Renacentia</Typography>
                    <CircularProgressComponent value={40} />
                </Box>
                <Stack direction="row" spacing={1}>
                    <PersonalizeChip
                        label={'Fondos'}
                        onClick={() => console.log('fondos')}
                        variant={'filled'}
                    />
                    <PersonalizeChip
                        label={'Perfil'}
                        onClick={() => console.log('perfil')}
                        variant={'outlined'}
                    />
                </Stack>
            </Box>
            <Box className={'store-elements-main-container'}>
                <Box className={'store-elements-division-container'}>
                    <PersonalizeItemsBox
                        label={'Fondos'}
                        items={backgroundStoreElements}
                    />
                </Box>
                <Box className={'store-elements-division-container'}>
                    <PersonalizeItemsBox
                        label={'Perfil'}
                        items={avatarStoreElements}
                    />
                </Box>
            </Box>

            <NavBar value={1} />
        </Box>
    );
};

export default Personalize;
