import React, {useEffect, useRef} from 'react';
// TODO: Replace with react-player/youtube for optimized import
import ReactPlayer from 'react-player';

type YoutubePlayerProps = {
  videoUrl: string;
  className?: string;
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ videoUrl, className }) => {
  const videoRef = useRef<ReactPlayer>(null);

  useEffect(() => {
    if ( videoRef.current === null ) { return; }
    console.log(videoRef.current);
    // @ts-ignore
    window.player = videoRef.current;
  }, [videoRef]);

  return (
    <ReactPlayer
      url={videoUrl}
      controls={true}
      pip={true}
      width="100%"
      height="100%"
      ref={videoRef}
      onReady={console.log}
      onPause={console.log}
      onEnded={(...params: any) => console.log('onEnd', ...params)}
    />
  );
};

YoutubePlayer.defaultProps = {
  className: '',
};

export { YoutubePlayer };
