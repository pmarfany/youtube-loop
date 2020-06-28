import React from 'react';
import 'reset-css';
import './style.css';
import {useQuery} from './hooks/useQuery';
import {YoutubePlayer} from './componenets/YoutubePlayer/YoutubePlayer';
import {YoutubeSearchInput} from './componenets/YoutubeSearchInput/YoutubeSearchInput';

const App: React.FC = () => {
  const [videoId, setVideoId] = useQuery('v');

  return (
    <>
      <h1 className="mb-xxl text-center">Youtube Loop</h1>
      <YoutubeSearchInput
        key={videoId}
        value={videoId}
        onSubmit={setVideoId}
        className="mb-xxl"
      />
      <YoutubePlayer videoId={videoId} />
    </>
  );
};

export { App };
