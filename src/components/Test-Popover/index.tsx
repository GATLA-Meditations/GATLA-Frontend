import { Popover } from '@mui/material';
import React from 'react';
import style from './style.module.css';

interface TestPopoverProps {
    open: boolean,
    children: React.ReactNode,
    onClose?: () => void
}

const TestPopover = ({ open, children, onClose }: TestPopoverProps) => {
    return (
        <Popover
            className={style.popover}
            open={open}
            children={children}
            onClose={onClose}
            anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
            transformOrigin={{ vertical: 'center', horizontal: 'center' }}
        />
    );
};

export default TestPopover;