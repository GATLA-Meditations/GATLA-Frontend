import { Lock } from '@/assets/Lock/Lock';
import './styles.css';
import React from 'react';
import PlayIcon from '@/assets/PlayIcon';

interface ActivityCardProps {
    isAllowed?: boolean;
    title: string;
    onClick: (e: any) => void;
    icon: React.ReactNode;
    index: number;
}

const backgroundImagesUrl = [
    'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1500964757637-c85e8a162699?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1509565840034-3c385bbe6451?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const ActivityCard = ({
    isAllowed,
    title,
    onClick,
    icon,
    index,
}: ActivityCardProps) => {
    return (
        <div
            className={'card-div ' + (isAllowed ? 'allowed' : 'disallowed')}
            style={{backgroundImage: `url(${backgroundImagesUrl[index]})`}}
            onClick={onClick}
        >
            {!isAllowed ? <Lock size={48} color={'var(--primary-100)'} />:
                <>
                    <div className={'activity-title-div'}>
                        <p className="h6 activity-title">{title}</p>
                    </div>
                    <div style={{borderRadius:'24px', border: '1px solid white'}}>
                        <PlayIcon height={'28px'} width={'28px'} fill={'white'}/>
                    </div>
                </>
            }
        </div>
    );
};
export default ActivityCard;
