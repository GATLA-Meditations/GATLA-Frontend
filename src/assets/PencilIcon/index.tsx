import React from 'react';

interface PencilIconProps {
    width?: string;
    height?: string;
    fill?: string;
}

const PencilIcon = ({ width, height, fill }: PencilIconProps) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: width || '24px', height: height || '24px' }}>
            <svg
                width="50%"
                height="50%"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M14.1455 4.34417L11.0179 1.21583C10.9139 1.1118 10.7904 1.02928 10.6545 0.972976C10.5186 0.916674 10.3729 0.887695 10.2258 0.887695C10.0787 0.887695 9.93304 0.916674 9.79713 0.972976C9.66123 1.02928 9.53775 1.1118 9.43374 1.21583L0.801942 9.84833C0.697487 9.95196 0.614672 10.0753 0.558311 10.2112C0.50195 10.3471 0.473168 10.4929 0.473638 10.64V13.7684C0.473638 14.0654 0.591639 14.3503 0.801683 14.5603C1.01173 14.7704 1.29661 14.8884 1.59365 14.8884H4.72199C4.86912 14.8889 5.01489 14.8601 5.1508 14.8037C5.28672 14.7474 5.41007 14.6645 5.5137 14.5601L14.1455 5.92828C14.2495 5.82428 14.3321 5.7008 14.3884 5.56489C14.4447 5.42899 14.4736 5.28333 14.4736 5.13623C14.4736 4.98912 14.4447 4.84346 14.3884 4.70756C14.3321 4.57165 14.2495 4.44817 14.1455 4.34417ZM11.6738 6.8159L8.54543 3.68826L10.2255 2.00824L13.3538 5.13588L11.6738 6.8159Z"
                    fill={fill || '#000000'}
                />
            </svg>
        </div>
    );
};

export default PencilIcon;
