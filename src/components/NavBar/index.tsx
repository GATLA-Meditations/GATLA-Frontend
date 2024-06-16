import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';
import './styles.css';
import React from 'react';
import { useRouter } from 'next/router';

interface NavBarProps {
    value: number;
}

const NavBar = ({ value }: NavBarProps) => {
    const [val, setValue] = React.useState(value);
    const router = useRouter();
    return (
        <BottomNavigation
            style={{
                backgroundColor: 'var(--secondary-100)',
                position: 'fixed',
                bottom: 0,
                width: '100%',
                fontWeight: 800,
                color: 'black',
                borderTop: '1px solid var(--secondary-200)',
                padding: '4px 0',
            }}
            value={val}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels={true}
        >
            <BottomNavigationAction
                label={'Inicio'}
                onClick={() => router.push('/home')}
                icon={<HomeIcon style={{ fontSize: '2rem' }} />}
            />
            <BottomNavigationAction
                label={'Reunión'}
                onClick={() => router.push('/meet')}
                icon={<VideocamIcon style={{ fontSize: '2rem' }} />}
            />
            <BottomNavigationAction
                label={'Perfil'}
                onClick={() => router.push('/profile')}
                icon={<AccountCircleIcon style={{ fontSize: '2rem' }} />}
            />
        </BottomNavigation>
    );
};

export default NavBar;
