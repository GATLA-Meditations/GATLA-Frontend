import LockIcon from '@mui/icons-material/Lock';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Lock } from '@/assets/Lock/Lock';
import './styles.css';
import React from 'react';


interface ActivityCardProps {
    isAllowed?: boolean;
    title: string;
    onClick: (e: any) => void;
    icon: React.ReactNode;
}

const ActivityCard = ({ isAllowed, title, onClick, icon }: ActivityCardProps) => {
    return (
        <div
            className={'card-div ' + (isAllowed ? 'allowed' : 'disallowed')}
            onClick={onClick}
        >
            <div className={'icons-container'}>
                {isAllowed ? icon : <Lock size={48} color={'#000000'}/>}
            </div>
            <div className="title-div">
                <div className={'text-div'}>
                    <p className="h6 activity-title">{title}</p>
                </div>
                <div className={'lock-div'}>
                </div>
            </div>
        </div>
    );
};
export default ActivityCard;
