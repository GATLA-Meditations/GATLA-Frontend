import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Notifications from '@/assets/Notifications';
import Settings from '@/assets/Settings';

interface TopBarProps {
    amtNotifications: number;
}

const TopBar = ({ amtNotifications }: TopBarProps) => {
    return (
        <Box
            sx={{ flexGrow: 1 }}
            style={{ backgroundColor: 'var(--bg-color)' }}
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
                    <Box>
                        <Notifications amtNotifications={amtNotifications} />
                    </Box>
                    <Box>
                        <Settings />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default TopBar;
