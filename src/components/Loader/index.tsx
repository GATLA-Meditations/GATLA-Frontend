import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import './styles.css';

interface LoaderProps {
    size?: string;
}

const Loader = ({ size }: LoaderProps) => {
    return (
        <Box className="loader-container">
            <CircularProgress
                className="loader-color"
                size={size ? size : '6vh'}
            />
        </Box>
    );
};

export default Loader;
