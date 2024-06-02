import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import './styles.css';

export interface VideoPlayerProps extends ReactPlayerProps {
    url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
    const ref = useRef<ReactPlayer>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handlePlay = () => {
        if (ref.current) {
            console.log('Video is playing', ref.current.getCurrentTime());
        }
    };

    const handlePause = () => {
        if (ref.current) {
            console.log('Video is paused', ref.current.getCurrentTime());
        }
    };

    if (!isMounted) {
        return null;
    }

    return (
        <ReactPlayer
            ref={ref}
            url={url}
            onPlay={handlePlay}
            onPause={handlePause}
            controls={false}
            className="video-player"
        />
    );
};

export default VideoPlayer;
