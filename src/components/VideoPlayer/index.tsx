import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import './styles.css';
import Loader from '@/components/Loader';

export interface VideoPlayerProps extends ReactPlayerProps {
    url: string;
    isPlaying?: (time: number) => void;
    isPausing?: (time: number) => void;
    sendInfo?: (time: number) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    url,
    onReady,
    isPlaying,
    isPausing,
    sendInfo,
}) => {
    const ref = useRef<ReactPlayer>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [duration, setDuration] = useState<number>(0);

    const handleReady = () => {
        setIsLoading(false);
        if (onReady) {
            // @ts-ignore
            onReady();
        } // Call the original onReady prop if it exists

        if (ref.current) {
            const videoDuration = ref.current.getDuration();
            setDuration(videoDuration);
        }
    };

    const handlePlay = () => {
        if (ref.current) {
            isPlaying && isPlaying(ref.current.getCurrentTime());
            sendInfo && sendInfo(ref.current.getCurrentTime());
        }
    };

    const handlePause = () => {
        if (ref.current) {
            isPausing && isPausing(ref.current.getCurrentTime());
        }
    };

    const handleBuffer = () => {
        setIsLoading(true);
    };

    const handleBufferEnd = () => {
        setIsLoading(false);
    };

    const handleProgress = () => {
        if (ref.current) {
            sendInfo && sendInfo(ref.current.getCurrentTime());
        }
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
                onProgress={handleProgress}
                progressInterval={60000}
                onEnded={() => sendInfo && sendInfo(duration)}
                controls={false}
                className="video-player"
            />
        </div>
    );
};

export default VideoPlayer;
