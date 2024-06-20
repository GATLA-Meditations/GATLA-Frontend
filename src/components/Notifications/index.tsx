import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from 'next/link';

interface NotificationsIconProps {
    amtNotifications: number;
}

const Notifications = ({ amtNotifications }: NotificationsIconProps) => {
    return (
        <Link href="/notifications">
            <IconButton
                size="large"
                aria-label={`show ${amtNotifications} new notifications`}
            >
                <Badge badgeContent={amtNotifications} color="error">
                    <NotificationsIcon style={{ color: 'var(--black)' }} />
                </Badge>
            </IconButton>
        </Link>
    );
};

export default Notifications;
