import React from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

interface PencilIconProps {
    width?: string;
    height?: string;
    fill?: string;
}

const PencilIcon = ({ width, height, fill }: PencilIconProps) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: width || '24px',
                height: height || '24px',
            }}
        >
            <ModeEditIcon width={'24px'} height={'24px'}/>
        </div>
    );
};

export default PencilIcon;
