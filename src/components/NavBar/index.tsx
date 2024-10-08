import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import PaletteIcon from '@mui/icons-material/Palette';
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
                backgroundColor: 'var(--secondary-100)',
                position: 'fixed',
                bottom: 0,
                width: '100%',
                fontWeight: 800,
                color: 'black',
                borderTop: '1px solid var(--secondary-200)',
                paddingBottom: '24px',
            }}
            value={val}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels={true}
        >
            <BottomNavigationAction
                label={'Inicio'}
                href={'/home'}
                icon={<HomeIcon style={{ fontSize: '2rem' }} />}
            />
            <BottomNavigationAction
                label={'Personalizar'}
                icon={<PaletteIcon style={{ fontSize: '2rem' }} />}
                href={'/personalize'}
            />
            <BottomNavigationAction
                label={'Perfil'}
                icon={<AccountCircleIcon style={{ fontSize: '2rem' }} />}
                href={'/profile'}
            />
        </BottomNavigation>
    );
};

export default NavBar;
