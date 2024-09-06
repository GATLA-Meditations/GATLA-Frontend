import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import '../../app/globals.css';
import NavBar from '@/components/NavBar';
import Typography from '@mui/material/Typography';
import './styles.css';
import Stack from '@mui/material/Stack';
import PersonalizeChip from '@/components/PersonalizeChip';
import PersonalizeItemsBox from '@/components/PersonalizeItemsBox';
import { StoreElementProps } from '@/components/StoreElement';
import CircularProgressComponent from '@/components/CircularProgress';
import TopBar from '@/components/TopBar';
import { getProgressAndUnlocks, getShopItems } from '@/service/apis';

const backgroundStoreElements: StoreElementProps[] = [
    {
        id: '1',
        type: 'BACKGROUND',
        isLocked: false,
        previewPicture:
            'https://trayectoriasenviaje.com/wp-content/uploads/2018/02/porto-galinhas-portada-256x256.jpg',
        name: 'Porto Galinhas',
    },
    {
        id: '2',
        type: 'BACKGROUND',
        isLocked: true,
        previewPicture:
            'https://trayectoriasenviaje.com/wp-content/uploads/2018/02/porto-galinhas-portada-256x256.jpg',
        name: 'Porto Galinhas',
    },
    {
        id: '3',
        type: 'BACKGROUND',
        isLocked: true,
        previewPicture:
            'https://trayectoriasenviaje.com/wp-content/uploads/2018/02/porto-galinhas-portada-256x256.jpg',
        name: 'Porto Galinhas',
    },
];

const profileStoreElements: StoreElementProps[] = [
    {
        id: '4',
        type: 'AVATAR',
        isLocked: false,
        previewPicture:
            'https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18362.png',
        name: 'Avatar',
    },
    {
        id: '5',
        type: 'AVATAR',
        isLocked: true,
        previewPicture:
            'https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18362.png',
        name: 'Avatar',
    },
    {
        id: '6',
        type: 'AVATAR',
        isLocked: true,
        previewPicture:
            'https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18362.png',
        name: 'Avatar',
    },
];

const Personalize = () => {
    const [backgroundItems, setBackgroundItems] = React.useState<
        StoreElementProps[]
    >([]);
    const [avatarItems, setAvatarItems] = React.useState<StoreElementProps[]>(
        []
    );
    const [progress, setProgress] = useState(0);
    const [unlocks, setUnlocks] = useState(0);

    const handleGetItems = async () => {
        await getShopItems()
            .then((items) => {
                setBackgroundItems(
                    items.filter(
                        (item: StoreElementProps) => item.type === 'BACKGROUND'
                    )
                );
                setAvatarItems(
                    items.filter(
                        (item: StoreElementProps) => item.type === 'AVATAR'
                    )
                );
            })
            .catch((error) => {
                console.error(error);
            });
        await getProgressAndUnlocks()
            .then((data) => {
                setProgress(data.progress);
                setUnlocks(data.renatokens);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        handleGetItems().then();
    }, []);

    return (
        <Box height={'100vh'} className={'personalize-container'}>
            <TopBar amtNotifications={0} />
            <Box className={'personalize-title-div'}>
                <Box className={'title-progress-div'}>
                    <Typography className={'h5'}>Desbloqueos disponibles</Typography>
                    <Box className={'progress'}>
                        {/*<CircularProgressComponent value={progress} />*/}
                        <Box className={'unlocks'}>
                            <Box className={'unlocks-value'}><Typography className={'h6'}>{unlocks}</Typography></Box>
                            {/*<Typography className={'body1'}>*/}
                            {/*    {'Desbloqueos'}*/}
                            {/*</Typography>*/}

                        </Box>
                    </Box>
                </Box>
                <Stack direction="row" spacing={1}>
                    <PersonalizeChip
                        label={'Fondos'}
                        onClick={() => console.log('fondos')}
                        variant={'outlined'}
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
                        items={backgroundItems}
                        onUpdateItems={handleGetItems}
                        unlocks={unlocks}
                    />
                </Box>
                <Box className={'store-elements-division-container'}>
                    <PersonalizeItemsBox
                        label={'Perfil'}
                        items={avatarItems}
                        onUpdateItems={handleGetItems}
                        unlocks={unlocks}
                    />
                </Box>
            </Box>

            <NavBar value={1} />
        </Box>
    );
};

export default Personalize;
