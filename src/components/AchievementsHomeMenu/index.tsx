import React, { useEffect, useState } from 'react';
import { getUserStats } from '@/service/apis';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

const Achievements = () => {
    const [days, setDays] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [goals, setGoals] = useState(0);

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '10px',
        margin: '16px',
    };

    const itemStyle: React.CSSProperties = {
        height: '156px', // Set a fixed height for consistency
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'var(--white)',
        borderRadius: '10px',
        gap: '8px',
    };

    const h1Style: React.CSSProperties = {
        color: 'black',
        fontSize: '24px',
        fontFamily: 'Inter',
        fontWeight: '700',
        letterSpacing: '0.45px',
        wordWrap: 'break-word',
    };

    const h2Style: React.CSSProperties = {
        textAlign: 'center',
        color: 'var(--primary-700)',
        fontSize: '14px',
        fontFamily: 'Inter',
        fontWeight: '400',
        letterSpacing: '0.36px',
        wordWrap: 'break-word',
    };

    useEffect(() => {
        fetchStats();
    }, []);

    async function fetchStats() {
        try {
            const stats = await getUserStats();
            if (stats) {
                setDays(stats.maxStreak ? stats.maxStreak : 0);
                setMinutes(
                    stats.totalWatchTime
                        ? convertMinutesToHours(stats.totalWatchTime)
                        : 0
                );
                setGoals(stats.goals ? stats.goals : 0);
            }
        } catch (error) {}
    }

    function convertMinutesToHours(minutes: number) {
        if (minutes > 60) {
            return Math.floor(minutes / 60);
        }
        return minutes;
    }

    return (
        <div style={containerStyle}>
            <div style={itemStyle}>
                <FavoriteBorderIcon sx={{ width: '40px', height: '40px', color: '#8a34c8' }} />
                <h1 style={h1Style}>{days}</h1>
                <h2 style={h2Style}>
                    Días trabajando
                    <br />
                    en tu bienestar
                </h2>
            </div>
            <div style={itemStyle}>
                <HourglassEmptyIcon sx={{ width: '40px', height: '40px', color: '#8a34c8' }} />
                <h1 style={h1Style}>{minutes}</h1>
                <h2 style={h2Style}>Minutos totales de meditación</h2>
            </div>
            <div style={itemStyle}>
                <StarBorderOutlinedIcon sx={{ width: '40px', height: '40px', color: '#8a34c8' }} />
                <h1 style={h1Style}>{goals}</h1>
                <h2 style={h2Style}>Premios por tu compromiso</h2>
            </div>
        </div>
    );
};

export default Achievements;
