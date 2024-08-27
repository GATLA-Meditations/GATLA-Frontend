import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';

const SettingsButton = () => {
    return (
        <Link href="/settings">
            <IconButton size="large" aria-label="settings">
                <SettingsIcon style={{ color: 'var(--primary-700)' }} />
            </IconButton>
        </Link>
    );
};

export default SettingsButton;
