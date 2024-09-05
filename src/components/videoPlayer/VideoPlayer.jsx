import React, { useState, useRef } from "react";
import "./videoPlayer.css";

const VideoPlayer = ({ videoUrl, localVideo, defaultVideo }) => {
  const videoRef = useRef(null);
  const embedUrl = `${videoUrl}?rel=0&controls=0&autoplay=1&playsinline=1`;

  return (
    <div className="video-container">
      {videoUrl ? (
        <iframe
          ref={videoRef}
          width="100%"
          height="100%"
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay:none; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video Player"
        ></iframe>
      ) : (
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          src={localVideo || defaultVideo}
          controls
        />
      )}
    </div>
  );
};

export default VideoPlayer;
