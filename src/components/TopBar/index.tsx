import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Notifications from '../Notifications';
import React, { useState } from 'react';
import SettingsButton from '../Settings';
import Image from 'next/image';
import logo from '@/assets/Logo/logo.png';
import Link from 'next/link';
import PeopleButton from '@/components/People/PeopleButton';
import Typography from '@mui/material/Typography';

interface TopBarProps {
    amtNotifications: number;
    selected?: string;
}

const TopBar = ({ amtNotifications, selected }: TopBarProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(selected);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <Box style={{ background: 'none' }}>
            <AppBar
                position="static"
                style={{ background: 'none', boxShadow: 'none' }}
            >
                <Toolbar>
                    <Box style={{ marginRight: 10 }}>
                        <Link href="/home">
                            <Image
                                src={logo}
                                alt="logo"
                                width={30}
                                height={50}
                            />
                        </Link>
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />

                    <IconButton
                        onClick={toggleSidebar}
                        edge="end"
                        sx={{
                            color: 'var(--primary-600)',
                            position: sidebarOpen ? 'fixed' : 'relative',
                            right: sidebarOpen ? '20px' : '0',
                            top: sidebarOpen ? '10px' : 'auto',
                            zIndex: sidebarOpen ? 1301 : 'auto',
                        }}
                    >
                        {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="right"
                open={sidebarOpen}
                onClose={toggleSidebar}
                PaperProps={{
                    sx: {
                        bgcolor: 'var(--primary-200)',
                        color: '#fff',
                        paddingTop: '30px',
                    },
                }}
            >
                <Box
                    role="presentation"
                    sx={{ width: 250 }}
                    onClick={toggleSidebar}
                >
                    <List>
                        <Link href="/notifications" passHref legacyBehavior>
                            <ListItem component="a">
                                <ListItemIcon sx={{ color: 'var(--primary-200)' }}>
                                    <Notifications
                                        amtNotifications={amtNotifications}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography sx={{ fontWeight: 'bold', color: 'var(--primary-600)' }}>
                                            Notificaciones
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        </Link>

                        <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)' }} />

                        <Link href="/settings" passHref legacyBehavior>
                            <ListItem component="a">
                                <ListItemIcon sx={{ color: 'var(--primary-200)' }}>
                                    <SettingsButton />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography sx={{ fontWeight: 'bold', color: 'var(--primary-600)' }}>
                                            Configuración
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        </Link>

                        <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)' }} />

                        <Link href="/information" passHref legacyBehavior>
                            <ListItem component="a">
                                <ListItemIcon sx={{ color: 'var(--primary-200)' }}>
                                    <PeopleButton />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography sx={{ fontWeight: 'bold', color: 'var(--primary-600)' }}>
                                            Acerca de nosotros
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        </Link>
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};

export default TopBar;
