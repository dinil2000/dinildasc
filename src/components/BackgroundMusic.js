// BackgroundMusic.js
import React from 'react';
import ReactPlayer from 'react-player';

const BackgroundMusic = ({ url }) => {
  return (
    <ReactPlayer
      url={url}
      playing={true}
      loop={true}
      volume={0.2} // Adjust volume as needed
      width="0px" // Hide player
      height="0px" // Hide player
    />
  );
};

export default BackgroundMusic;
