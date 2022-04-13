import React from "react";

const VideoHeader = () => {
  return (
    <div>
      <video
        className="header-video video-header"
        autoPlay
        loop
        muted
        src="https://content.rolex.com/dam/homepage/video-banner/world-of-rolex/the-masters/2022/win-ad/homepage-win-ad-the-masters-2022-scottie-scheffler.mp4"
      ></video>
      <div className="header-background"></div>
    </div>
  );
};

export default VideoHeader;
