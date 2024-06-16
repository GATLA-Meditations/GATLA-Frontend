import LockIcon from '@mui/icons-material/Lock';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './styles.css';
import React from 'react';

interface ActivityCardProps {
    isAllowed?: boolean;
    title: string;
    onClick: (e: any) => void;
}

const ActivityCard = ({ isAllowed, title, onClick }: ActivityCardProps) => {
    return (
        <div
            className={'card-div ' + (isAllowed ? 'allowed' : 'disallowed')}
            onClick={onClick}
        >
            <div className="title-div">
                <div className={'text-div'}>
                    <p className="h5">{title}</p>
                </div>
                <div className={'lock-div'}>
                    {isAllowed ? (
                        <ArrowForwardIosIcon
                            style={{ color: 'var(--secondary-200))' }}
                        />
                    ) : (
                        <LockIcon />
                    )}
                </div>
            </div>
        </div>
    );
};
export default ActivityCard;
