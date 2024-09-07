import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import './styles.css';
import Loader from '@/components/Loader';
import { sendViewTime } from '@/service/apis';
import { OnProgressProps } from 'react-player/base';

export interface VideoPlayerProps extends ReactPlayerProps {
    url: string;
    isPlaying?: (time: number) => void;
    isPausing?: (time: number) => void;
    activityId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    url,
    onReady,
    isPlaying,
    isPausing,
    activityId,
}) => {
    const ref = useRef<ReactPlayer>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleReady = () => {
        setIsLoading(false);
        if (onReady) {
            // @ts-ignore
            onReady();
        } // Call the original onReady prop if it exists
    };

    const handlePlay = () => {
        if (ref.current) {
            isPlaying && isPlaying(ref.current.getCurrentTime());
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

    const handleProgress = (state: OnProgressProps) => {
        const { playedSeconds } = state;
        sendViewTime(activityId, playedSeconds).catch((error) => {
            console.error('Error sending view time:', error);
        });
    };

    useEffect(() => {
        return () => {
            if (ref.current) {
                sendViewTime(activityId, ref.current.getCurrentTime()).catch((error) => {
                    console.error('Error sending view time:', error);
                });
            }
        };
    }, []);

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
                controls={false}
                className="video-player"
            />
        </div>
    );
};

export default VideoPlayer;
