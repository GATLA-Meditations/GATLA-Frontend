import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';
import './styles.css';
import React from 'react';

interface NavBarProps {
    value: number;
}

const NavBar = ({ value }: NavBarProps) => {
    const [val, setValue] = React.useState(value);

    return (
        <BottomNavigation
            style={{
                backgroundColor: 'var(--bg-color)',
                boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.25)',
                position: 'fixed',
                bottom: 0,
                width: '100%',
            }}
            value={val}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction
                label="Home"
                href="/home"
                icon={<HomeIcon style={{ fontSize: '2.5rem' }} />}
            />

            <BottomNavigationAction
                label="Meet"
                icon={<VideocamIcon style={{ fontSize: '2.5rem' }} />}
            />
            <BottomNavigationAction
                label="User"
                href="/profile"
                icon={<AccountCircleIcon style={{ fontSize: '2.5rem' }} />}
            />
        </BottomNavigation>
    );
};

export default NavBar;
