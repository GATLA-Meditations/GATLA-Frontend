import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Notifications from '../Notifications';
import { useState } from 'react';
import SettingsButton from '../Settings';
import { posix } from 'path';

interface TopBarProps {
    amtNotifications: number;
    selected: string;
}

const TopBar = ({ amtNotifications, selected }: TopBarProps) => {
    const [selectedOption, setSelectedOption] = useState(selected);

    return (
        <Box
            sx={{ flexGrow: 1 }}
            style={{
                backgroundColor: 'var(--bg-color)',
            }}
        >
            <AppBar
                position="static"
                style={{ backgroundColor: 'var(--bg-color)' }}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        color={'#1D1B20'}
                    >
                        Renacentia
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box
                        sx={{
                            bgcolor:
                                selectedOption === 'notifications'
                                    ? 'rgba(0, 0, 0, 0.1)'
                                    : 'transparent',
                            borderRadius: '100%',
                        }}
                    >
                        <Notifications amtNotifications={amtNotifications} />
                    </Box>
                    <Box
                        sx={{
                            bgcolor:
                                selectedOption === 'settings'
                                    ? 'rgba(0, 0, 0, 0.1)'
                                    : 'transparent',
                            borderRadius: '100%',
                        }}
                    >
                        <SettingsButton />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default TopBar;
