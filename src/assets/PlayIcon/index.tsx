import React from 'react';

interface PlayIconProps {
    width?: string;
    height?: string;
    fill?: string;
}

const PlayIcon = ({ width, height, fill }: PlayIconProps) => {
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
                <path d="M8 5v14l11-7L8 5z" fill={fill || '#000000'} />
            </svg>
        </div>
    );
};

export default PlayIcon;
