import Box from '@mui/material/Box';
import './styles.css';
import React from 'react';
import { Lock } from '@/assets/Lock/Lock';

export interface StoreElementProps {
    id: string,
    type: 'AVATAR' | 'BACKGROUND' | 'VIDEO';
    previewPicture: any;
    isLocked: boolean;
    price?: number;
    onClick?: () => void;
    name?: string;
}

const StoreElement = ({
    type,
    previewPicture,
    isLocked,
    onClick,
    name,
}: StoreElementProps) => {
    return (
        <Box
            className={`element-container-${type}`}
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
                        size={type === 'BACKGROUND' ? 40 : 30}
                        color={'black'}
                    />
                </div>
            )}
        </Box>
    );
};

export default StoreElement;
