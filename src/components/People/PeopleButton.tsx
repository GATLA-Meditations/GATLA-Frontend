import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import React from 'react';

const PeopleButton = () => {
    return (
        <Link href="/information">
            <IconButton size="large" aria-label="settings">
                <PeopleAltIcon sx={{ color: '#0d0949' }} />
            </IconButton>
        </Link>
    );
};
export default PeopleButton;
