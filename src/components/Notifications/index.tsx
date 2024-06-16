import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

interface NotificationsIconProps {
    amtNotifications: number;
}

const Notifications = ({ amtNotifications }: NotificationsIconProps) => {
    return (
        <>
            <IconButton
                size="large"
                aria-label={`show ${amtNotifications} new notifications`}
            >
                <Badge badgeContent={amtNotifications} color="error">
                    <NotificationsIcon
                        style={{ color: 'var(--primary-700)' }}
                    />
                </Badge>
            </IconButton>
        </>
    );
};

export default Notifications;
