import React from 'react';
import Box from '@mui/material/Box';
import '../../app/globals.css';
import NavBar from '@/components/NavBar';
import Typography from '@mui/material/Typography';
import './styles.css';
import Stack from '@mui/material/Stack';
import PersonalizeChip from '@/components/PersonalizeChip';
import PersonalizeItemsBox from '@/components/PersonalizeItemsBox';

const Personalize = () => {
    return (
        <Box height={'100vh'} className={'personalize-container'}>
            <Box className={'personalize-title-div'}>
                <Typography className={'h5'}>Mi Renacentia</Typography>
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
            <Box className={'store-elements-container'}>
                <PersonalizeItemsBox label={'Fondos'} items={[]} />
                <PersonalizeItemsBox label={'Perfil'} items={[]} />
            </Box>

            <NavBar value={1} />
        </Box>
    );
};

export default Personalize;
