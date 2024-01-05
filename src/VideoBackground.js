// VideoBackground.js
import React from 'react';
import './VideoBackground.css'; // Import the CSS file for styling

const VideoBackground = () => {
    const viLink = "/img/bg.mov"
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={viLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;