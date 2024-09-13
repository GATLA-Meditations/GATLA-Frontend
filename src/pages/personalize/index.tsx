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
import TopBar from '@/components/TopBar';
import { getProgressAndUnlocks, getShopItems } from '@/service/apis';
import { useGetProfileInfo } from '@/hooks/useGetProfileInfo';
import WithToast, { WithToastProps } from '@/hoc/withToast';

const Personalize = ({ showToast }: WithToastProps) => {
    const [backgroundItems, setBackgroundItems] = useState<StoreElementProps[]>(
        []
    );
    const [avatarItems, setAvatarItems] = useState<StoreElementProps[]>([]);
    const [progress, setProgress] = useState(0);
    const [unlocks, setUnlocks] = useState(0);
    const [selectedBackground, setSelectedBackground] = useState<string | null>(
        null
    );
    const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const user = useGetProfileInfo();
    const [selectedChip, setSelectedChip] = useState<string | null>(null);

    const handleGetItems = async () => {
        setIsLoading(true);
        try {
            const items = await getShopItems();
            const sortedBackgroundItems = items
                .filter((item: StoreElementProps) => item.type === 'BACKGROUND')
                .sort(
                    (a: StoreElementProps, b: StoreElementProps) =>
                        Number(a.isLocked) - Number(b.isLocked)
                );
            const sortedAvatarItems = items
                .filter((item: StoreElementProps) => item.type === 'AVATAR')
                .sort(
                    (a: StoreElementProps, b: StoreElementProps) =>
                        Number(a.isLocked) - Number(b.isLocked)
                );

            setBackgroundItems(sortedBackgroundItems);
            setAvatarItems(sortedAvatarItems);

            const selectedBg =
                items.find(
                    (item: StoreElementProps) =>
                        item.type === 'BACKGROUND' &&
                        item.previewPicture === user.profile?.background
                )?.id || null;

            const selectedAv =
                items.find(
                    (item: StoreElementProps) =>
                        item.type === 'AVATAR' &&
                        item.previewPicture === user.profile?.image
                )?.id || null;

            setSelectedBackground(selectedBg);
            setSelectedAvatar(selectedAv);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }

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
        if (user.profile) {
            handleGetItems().then();
            setSelectedAvatar(user.profile.image);
            setSelectedBackground(user.profile.background);
        }
    }, [user.profile]);

    const handleChipClick = (label: string) => {
        setSelectedChip((prevChip) => (prevChip === label ? null : label));
    };

    return (
        <Box height={'100vh'} className={'personalize-container'}>
            <TopBar amtNotifications={0} />
            <Box className={'personalize-title-div'}>
                <Box className={'title-progress-div'}>
                    <Typography className={'h5'}>
                        Desbloqueos disponibles
                    </Typography>
                    <Box className={'progress'}>
                        <Box className={'unlocks'}>
                            <Box className={'unlocks-value'}>
                                <Typography className={'h6'}>
                                    {unlocks}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Stack direction="row" spacing={1}>
                    <PersonalizeChip
                        label={'Fondos'}
                        onClick={() => handleChipClick('Fondos')}
                        variant={selectedChip === 'Fondos' ? 'filled' : 'outlined'}
                    />
                    <PersonalizeChip
                        label={'Perfil'}
                        onClick={() => handleChipClick('Perfil')}
                        variant={selectedChip === 'Perfil' ? 'filled' : 'outlined'}
                    />
                </Stack>
            </Box>

            <Box className={'store-elements-main-container'}>
                {(selectedChip === 'Fondos' || selectedChip === null) && (
                    <Box className={'store-elements-division-container'}>
                        <Box className={'background-division-container'}>
                            <PersonalizeItemsBox
                                label={'Fondos'}
                                items={backgroundItems}
                                onUpdateItems={handleGetItems}
                                unlocks={unlocks}
                                selectedBackground={selectedBackground}
                                selectedAvatar={selectedAvatar}
                                onBackgroundSelect={(backgroundId) =>
                                    setSelectedBackground(backgroundId)
                                }
                                showToast={showToast}
                                isLoading={isLoading}
                            />
                        </Box>
                    </Box>
                )}
                {(selectedChip === 'Perfil' || selectedChip === null) && (
                    <Box className={'store-elements-division-container'}>
                        <Box className={'avatar-division-container'}>
                            <PersonalizeItemsBox
                                label={'Perfil'}
                                items={avatarItems}
                                onUpdateItems={handleGetItems}
                                unlocks={unlocks}
                                selectedBackground={selectedBackground}
                                selectedAvatar={selectedAvatar}
                                onBackgroundSelect={(backgroundId) =>
                                    setSelectedBackground(backgroundId)
                                }
                                showToast={showToast}
                                isLoading={isLoading}
                            />
                        </Box>
                    </Box>
                )}
            </Box>
            <NavBar value={1} />
        </Box>
    );
};

export default WithToast(Personalize);
