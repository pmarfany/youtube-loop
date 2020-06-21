import React, {useRef} from 'react';
import ReactPlayer from 'react-player/youtube';
import {isValidLink} from '../../utils/youtube';

type YoutubePlayerProps = {
  videoUrl: string;
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ videoUrl }) => {
  const videoRef = useRef<ReactPlayer>(null);

  const onEnded = () => {
    if ( videoRef.current === null ) { return; }
    const internalPlayer: any = videoRef.current.getInternalPlayer();

    if ( !internalPlayer.playVideo ) { return console.error('Youtube API not loaded!'); }
    internalPlayer.playVideo();
  };

  if ( !isValidLink(videoUrl) ) { return null; }

  return (
    <ReactPlayer
      url={videoUrl}
      controls={true}
      pip={true}
      width="100%"
      height="100%"
      ref={videoRef}
      onEnded={onEnded}
    />
  );
};

export { YoutubePlayer };
