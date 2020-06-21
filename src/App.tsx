import React, {useState} from 'react';
import 'reset-css';
import {YoutubePlayer} from './componenets/YoutubePlayer/YoutubePlayer';
import {YoutubeSearchInput} from './componenets/YoutubeSearchInput/YoutubeSearchInput';

const App: React.FC = () => {
  const [videoId, setVideoId] = useState<string>();

  // TODO: UseEffect to read value from url query param
  // TODO: Also read value from input && validate/generate url with utils
  // useEffect(, []);

  return (
    <>
      <h1>Youtube Loop</h1>

      <YoutubeSearchInput value="" onSubmit={console.log}/>
      <YoutubePlayer videoUrl="https://www.youtube.com/watch?v=rvAVV4nIxlY" />
    </>
  );
};

export { App };
