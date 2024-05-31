import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import './styles.css';

export interface VideoPlayerProps extends ReactPlayerProps {
    url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
    const ref = useRef<ReactPlayer>(null);
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
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

    return (
        <div style={{ position: 'relative', display: isBrowser ? 'block' : 'none' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}></div>
            <ReactPlayer
                ref={ref}
                url={url}
                onPlay={handlePlay}
                onPause={handlePause}
                controls={false}
                className="video-player"
            />
        </div>
    );
};

export default VideoPlayer;

