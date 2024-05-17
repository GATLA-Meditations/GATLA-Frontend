'use client';

import { ButtonGroup, Button } from '@mui/material';
import React from 'react';
import './styles.css';

interface WeekBottomBarProps {
    leftButtonText: string;
    rightButtonText: string;
    leftButtonAction?: () => void;
    rightButtonAction?: () => void;
    leftButtonDisabled?: boolean;
    rightButtonDisabled?: boolean;
}

const WeekBottomBar = ({
    leftButtonText,
    rightButtonText,
    leftButtonAction,
    rightButtonAction,
    leftButtonDisabled,
    rightButtonDisabled,
}: WeekBottomBarProps) => {
    const handleLeftButtonClick = () => {
        if (leftButtonAction) {
            leftButtonAction();
        }
    };

    const handleRightButtonClick = () => {
        if (rightButtonAction) {
            rightButtonAction();
        }
    };

    return (
        <div>
            <ButtonGroup disableElevation aria-label="Disabled button group">
                <Button
                    className="leftButton customButton"
                    disabled={leftButtonDisabled}
                    onClick={handleLeftButtonClick}
                >
                    {leftButtonText}
                </Button>
                <Button
                    className="rightButton customButton"
                    disabled={rightButtonDisabled}
                    onClick={handleRightButtonClick}
                >
                    {rightButtonText}
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default WeekBottomBar;
