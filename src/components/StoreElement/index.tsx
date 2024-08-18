import Box from '@mui/material/Box';
import './styles.css';
import React from 'react';
import { Lock } from '@/assets/Lock/Lock';

export interface StoreElementProps {
    category: 'icon' | 'background';
    previewPicture: any;
    isLocked: boolean;
    onClick?: () => void;
    name?: string;
}

const StoreElement = ({
    category,
    previewPicture,
    isLocked,
    onClick,
    name,
}: StoreElementProps) => {
    return (
        <Box
            className={`element-container-${category}`}
            style={{ position: 'relative' }}
            onClick={onClick}
        >
            <img
                src={previewPicture}
                alt=""
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 'inherit',
                }}
            />
            {isLocked && (
                <div className="lock-overlay">
                    <Lock
                        size={category === 'background' ? 40 : 30}
                        color={'black'}
                    />
                </div>
            )}
        </Box>
    );
};

export default StoreElement;
