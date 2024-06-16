import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';

const SettingsButton = () => {
    return (
        <>
            <IconButton size="large" aria-label="settings">
                <SettingsIcon style={{ color: 'var(--primary-700)' }} />
            </IconButton>
        </>
    );
};

export default SettingsButton;
