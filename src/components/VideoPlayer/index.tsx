import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import './styles.css';
import Loader from '@/components/Loader';
import { Button } from '@mui/material';
import PlayIcon from '@/assets/PlayIcon';
import PauseIcon from '@/assets/PauseIcon';

export interface VideoPlayerProps extends ReactPlayerProps {
    url: string;
    isPlaying?: (time: number) => void;
    isPausing?: (time: number) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    url,
    onReady,
    isPlaying,
    isPausing,
}) => {
    const ref = useRef<ReactPlayer>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [playing, setPlaying] = useState<boolean>(false);

    const handleReady = () => {
        setIsLoading(false);
        if (onReady) {
            // @ts-ignore
            onReady();
        } // Call the original onReady prop if it exists
    };

    useEffect(() => {
        handlePlay();
    }, []);

    const handlePlay = () => {
        if (ref.current) {
            isPlaying && isPlaying(ref.current.getCurrentTime());
            setPlaying(true);
        }
    };

    const handlePause = () => {
        if (ref.current) {
            isPausing && isPausing(ref.current.getCurrentTime());
            setPlaying(false);
        }
    };

    const handleBufferEnd = () => {
        setIsLoading(false);
    };

    const togglePlayPause = () => {
        if (playing) {
            handlePause();
        } else {
            handlePlay();
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
                playing={playing}
                url={url}
                onReady={handleReady}
                onBufferEnd={handleBufferEnd}
                controls={false}
                className="video-player"
            />
            <Button className={'control-button'} onClick={togglePlayPause}>
                {playing ? (
                    <PauseIcon fill={'white'} width={'50px'} height={'50px'} />
                ) : (
                    <PlayIcon fill={'white'} width={'50px'} height={'50px'} />
                )}
            </Button>
        </div>
    );
};

export default VideoPlayer;
