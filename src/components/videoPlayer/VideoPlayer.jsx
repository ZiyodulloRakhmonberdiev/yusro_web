import React, { useState, useRef } from "react";
import "./videoPlayer.css";

const VideoPlayer = ({ videoUrl, localVideo, defaultVideo }) => {
  const videoRef = useRef(null);
  const embedUrl = `${videoUrl}?rel=0&controls=1&playsinline=1`; // Removed autoplay=1

  return (
    <div className="video-wrapper">
      <div className="video-container">
        {videoUrl ? (
          <iframe
            ref={videoRef}
            className="video-frame"
            src={embedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video Player"
          ></iframe>
        ) : (
          <video
            ref={videoRef}
            className="video-frame"
            src={localVideo || defaultVideo}
            controls
          />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
