import React from 'react';
import 'reset-css';
import {useQuery} from './hooks/useQuery';
import {getLinkFromId, ID_PARAM} from './utils/youtube';
import {YoutubePlayer} from './componenets/YoutubePlayer/YoutubePlayer';
import {YoutubeSearchInput} from './componenets/YoutubeSearchInput/YoutubeSearchInput';

const App: React.FC = () => {
  const [videoId, setVideoId] = useQuery(ID_PARAM);

  return (
    <>
      <h1>Youtube Loop</h1>

      <YoutubeSearchInput value={videoId} onSubmit={setVideoId}/>
      <YoutubePlayer videoUrl={getLinkFromId(videoId)} />
    </>
  );
};

export { App };
