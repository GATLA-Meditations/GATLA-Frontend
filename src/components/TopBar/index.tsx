import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Notifications from '../Notifications';
import React, { useState } from 'react';
import SettingsButton from '../Settings';
import Image from 'next/image';
import logo from '@/assets/Logo/logo.png';
import Link from 'next/link';
import PeopleButton from '@/components/People/PeopleButton';

interface TopBarProps {
    amtNotifications: number;
    selected?: string;
}

const TopBar = ({ amtNotifications, selected }: TopBarProps) => {
    const [selectedOption, setSelectedOption] = useState(selected);

    return (
        <Box
            style={{
                background: 'none',
            }}
        >
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
                                selectedOption === 'information'
                                    ? 'rgba(0, 0, 0, 0.1)'
                                    : 'transparent',
                            borderRadius: '100%',
                        }}
                    >
                        <PeopleButton />
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
