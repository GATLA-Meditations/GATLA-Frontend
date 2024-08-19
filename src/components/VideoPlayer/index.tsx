import React, { useRef, useState } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import './styles.css';
import Loader from '@/components/Loader';

export interface VideoPlayerProps extends ReactPlayerProps {
    url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, onReady }) => {
    const ref = useRef<ReactPlayer>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleReady = () => {
        setIsLoading(false);
        if (onReady) onReady(); // Call the original onReady prop if it exists
    };

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

    const handleBuffer = () => {
        setIsLoading(true);
    };

    const handleBufferEnd = () => {
        setIsLoading(false);
    };

    return (
        <div className="video-player-container">
            {isLoading && (
                <div className="loader-container">
                    <Loader />
                </div>
            )}
            <ReactPlayer
                ref={ref}
                url={url}
                onReady={handleReady}
                onPlay={handlePlay}
                onPause={handlePause}
                onBuffer={handleBuffer}
                onBufferEnd={handleBufferEnd}
                controls={false}
                className="video-player"
            />
        </div>
    );
};

export default VideoPlayer;
