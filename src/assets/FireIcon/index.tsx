import React from 'react';

interface FireIconProps {
    color: string;
}

export const FireIcon: React.FC<FireIconProps> = ({ color }: FireIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
        >
            <path
                d="M29.4334 19.1667C29.0501 18.6667 28.5834 18.2333 28.1501 17.8C27.0334 16.8 25.7668 16.0833 24.7001 15.0333C22.2167 12.6 21.6667 8.58333 23.2501 5.5C21.6667 5.88333 20.2834 6.75 19.1001 7.7C14.7834 11.1667 13.0834 17.2833 15.1167 22.5333C15.1834 22.7 15.2501 22.8667 15.2501 23.0833C15.2501 23.45 15.0001 23.7833 14.6667 23.9167C14.2834 24.0833 13.8834 23.9833 13.5668 23.7167C13.4722 23.6374 13.393 23.5414 13.3334 23.4333C11.4501 21.05 11.1501 17.6333 12.4167 14.9C9.63342 17.1667 8.11675 21 8.33342 24.6167C8.43342 25.45 8.53342 26.2833 8.81675 27.1167C9.05008 28.1167 9.50008 29.1167 10.0001 30C11.8001 32.8833 14.9167 34.95 18.2667 35.3667C21.8334 35.8167 25.6501 35.1667 28.3834 32.7C31.4334 29.9333 32.5001 25.5 30.9334 21.7L30.7168 21.2667C30.3668 20.5 29.4334 19.1667 29.4334 19.1667ZM24.1667 29.6667C23.7001 30.0667 22.9334 30.5 22.3334 30.6667C20.4667 31.3333 18.6001 30.4 17.5001 29.3C19.4834 28.8333 20.6667 27.3667 21.0167 25.8833C21.3001 24.55 20.7667 23.45 20.5501 22.1667C20.3501 20.9333 20.3834 19.8833 20.8334 18.7333C21.1501 19.3667 21.4834 20 21.8834 20.5C23.1667 22.1667 25.1834 22.9 25.6168 25.1667C25.6834 25.4 25.7168 25.6333 25.7168 25.8833C25.7668 27.25 25.1667 28.75 24.1667 29.6667Z"
                fill={color}
            />
        </svg>
    );
};
