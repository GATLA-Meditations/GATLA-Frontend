import { Box, IconButton, Typography } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import React, { useEffect, useState } from 'react';

const FaceScale = ({
    onChange,
    questionOptions,
    question,
}: {
    onChange: (value: number) => void;
    questionOptions: any;
    question: any;
}) => {
    const [selectedValue, setSelectedValue] = useState<number | null>(null);

    const handleSelect = (value: number) => {
        setSelectedValue(value);
        onChange(value);
    };

    const boxStyle = {
        width: '100px',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '8px',
    };

    useEffect(() => {
        if (question.answer) {
            setSelectedValue(+question.answer);
        }
        else setSelectedValue(null);
    }, [question]);

    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Box sx={boxStyle}>
                <IconButton
                    onClick={() => handleSelect(1)}
                    sx={{
                        color:
                            selectedValue === 1
                                ? 'var(--primary-500)'
                                : 'default',
                    }}
                >
                    <SentimentVeryDissatisfiedIcon fontSize="medium" />
                </IconButton>
                <Typography fontSize="small" textTransform="capitalize">
                    {questionOptions[0]}
                </Typography>
            </Box>
            <Box sx={boxStyle}>
                <IconButton
                    onClick={() => handleSelect(2)}
                    sx={{
                        color:
                            selectedValue === 2
                                ? 'var(--primary-500)'
                                : 'default',
                    }}
                >
                    <SentimentDissatisfiedIcon fontSize="medium" />
                </IconButton>
                <Typography fontSize="small" textTransform="capitalize">
                    {questionOptions[1]}
                </Typography>
            </Box>
            <Box sx={boxStyle}>
                <IconButton
                    onClick={() => handleSelect(3)}
                    sx={{
                        color:
                            selectedValue === 3
                                ? 'var(--primary-500)'
                                : 'default',
                    }}
                >
                    <SentimentNeutralIcon fontSize="medium" />
                </IconButton>
                <Typography fontSize="small" textTransform="capitalize">
                    {questionOptions[2]}
                </Typography>
            </Box>
            <Box sx={boxStyle}>
                <IconButton
                    onClick={() => handleSelect(4)}
                    sx={{
                        color:
                            selectedValue === 4
                                ? 'var(--primary-500)'
                                : 'default',
                    }}
                >
                    <SentimentSatisfiedIcon fontSize="medium" />
                </IconButton>
                <Typography fontSize="small" textTransform="capitalize">
                    {questionOptions[3]}
                </Typography>
            </Box>
            <Box sx={boxStyle}>
                <IconButton
                    onClick={() => handleSelect(5)}
                    sx={{
                        color:
                            selectedValue === 5
                                ? 'var(--primary-500)'
                                : 'default',
                    }}
                >
                    <SentimentVerySatisfiedIcon fontSize="medium" />
                </IconButton>
                <Typography fontSize="small" textTransform="capitalize">
                    {questionOptions[4]}
                </Typography>
            </Box>
        </Box>
    );
};

export default FaceScale;
