import React, {useState} from 'react';
import 'reset-css';
import {YoutubePlayer} from './componenets/YoutubePlayer/YoutubePlayer';

const App: React.FC = () => {
  const [videoId, setVideoId] = useState<string>();

  // TODO: UseEffect to read value from url query param
  // TODO: Also read value from input && validate/generate url with utils
  // useEffect(, []);

  return (
    <>
      <h1>Youtube Loop</h1>

      {/*<SearchInput />*/}
      <YoutubePlayer videoUrl="https://www.youtube.com/watch?v=rvAVV4nIxlY" />
    </>
  );
};

export { App };
