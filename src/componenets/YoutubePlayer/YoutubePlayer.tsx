import React from 'react';
import YouTube, {Options} from 'react-youtube';

type YoutubePlayerProps = {
  videoId: string;
}

const PLAYER_OPTS: Options = { height: '100%', width: '100%' };

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ videoId }) => (
  <YouTube
    videoId={videoId}
    onEnd={({ target }) => target.playVideo()}
    opts={PLAYER_OPTS}
  />
);

export { YoutubePlayer };
