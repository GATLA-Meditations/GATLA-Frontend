import React from 'react';

interface PauseIconProps {
    width?: string;
    height?: string;
    fill?: string;
}

const PauseIcon = ({ width, height, fill }: PauseIconProps) => {
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
            <svg
                width="50%"
                height="50%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"
                    fill={fill || '#000000'}
                />
            </svg>
        </div>
    );
};

export default PauseIcon;
