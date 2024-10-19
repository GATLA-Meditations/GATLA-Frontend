import './styles.css';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image, { StaticImageData } from 'next/image';
import PersonalizeChip from '@/components/PersonalizeChip';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightIcon from '@/assets/ArrowRightIcon';
import { KeyboardArrowUp } from '@mui/icons-material';

export interface AdminCardProps {
    image: StaticImageData;
    text: string;
    name: string;
    tags: string[];
}

const AdminCard = ({ image, text, name, tags }: AdminCardProps) => {
    const [showEntireText, setShowEntireText] = useState(false);

    return (
        <Box className={'admin-card-container'}>
            <Box className={'image-card'}>
                <Image
                    src={image}
                    alt="logo"
                    style={{ objectFit: 'contain' }}
                    width={80}
                    height={80}
                />
            </Box>
            <Box className={'admin-card-chips-text-container'}>
                <Box className={'admin-card-chips-container'}>
                    {tags.map((tag, key) => (
                        <PersonalizeChip
                            key={key}
                            label={tag}
                            variant={'information'}
                        />
                    ))}
                </Box>
                <Box>
                    <Typography className={'body1 light-bold'}>
                        {name}
                    </Typography>
                    <Typography className={'body2'}>
                        {showEntireText
                            ? text
                            : text.slice(0, 100).concat('...')}
                    </Typography>
                    <Box
                        onClick={() => setShowEntireText(!showEntireText)}
                        className={'admin-arrow-down-div'}
                    >
                        {showEntireText ? (
                            <KeyboardArrowUp />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
export default AdminCard;
