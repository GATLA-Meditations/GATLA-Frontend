import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './styles.css';

interface ActivityCardProps {
    isAllowed?: boolean;
    title: string;
}

const ActivityCard = ({ isAllowed, title }: ActivityCardProps) => {
    return (
        <div className={`card-div ${isAllowed ? 'enabled-bg' : 'disabled-bg'}`}>
            <div className="title-div">
                <div className={'text-div'}>
                    <p className="h5">{title}</p>
                </div>
                <div className={'lock-div'}>
                    {isAllowed ? <LockOpenIcon /> : <LockIcon />}
                    <ArrowForwardIosIcon
                        style={{ color: 'var(--secondary-200))' }}
                    />
                </div>
            </div>
        </div>
    );
};
export default ActivityCard;
