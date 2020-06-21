import React from 'react';
import 'reset-css';
import {useQuery} from './hooks/useQuery';
import {YoutubePlayer} from './componenets/YoutubePlayer/YoutubePlayer';
import {YoutubeSearchInput} from './componenets/YoutubeSearchInput/YoutubeSearchInput';

const App: React.FC = () => {
  const [videoId, setVideoId] = useQuery('v');

  return (
    <>
      <h1>Youtube Loop</h1>

      <YoutubeSearchInput value={videoId} onSubmit={setVideoId} key={videoId} />
      <YoutubePlayer videoId={videoId} />
    </>
  );
};

export { App };
