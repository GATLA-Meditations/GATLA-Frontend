import { Box } from '@mui/material';
import React from 'react';
import ChangePassword from '@/components/ChangePassword';

const TestPassModal = () => {
    return (
        <Box display={'flex'} flexDirection={'column'} height={'100%'}>
            <ChangePassword />
        </Box>
    );
};

export default TestPassModal;
