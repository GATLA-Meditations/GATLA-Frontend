import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './styles.css';

interface AchievementsFilterProps {
    achievements: string[];
    handleAchievementChange: (event: string) => void;
    selectedValue: string;
}

const AchievementsFilter = ({
    achievements,
    handleAchievementChange,
    selectedValue,
}: AchievementsFilterProps) => {
    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    value={selectedValue}
                    onChange={(event) =>
                        handleAchievementChange(event.target.value)
                    }
                    displayEmpty
                    className={'select-box body1bold '}
                >
                    {achievements.map((achievement, key) => (
                        <MenuItem
                            value={achievement}
                            key={key}
                            className={'body2bold'}
                        >
                            {achievement}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
};

export default AchievementsFilter;
