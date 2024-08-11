import Box from '@mui/material/Box';
import './styles.css';
import React from 'react';

export interface StoreElementProps {
    category: string;
    previewPicture: any;
}

const StoreElement = ({ category, previewPicture }: StoreElementProps) => {
    return (
        <Box className={`element-container-${category}`}>
            <img
                src={previewPicture}
                alt=""
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 'inherit',
                }}
            />
        </Box>
    );
};

export default StoreElement;
