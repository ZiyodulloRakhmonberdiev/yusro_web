// src/components/ArticleList.js

import "./videoList.css";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import NotAvailable from "../../helpers/NotAvailable";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const truncateDescription = (description, limit) => {
  const words = description.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return description;
};

const VideoList = ({ videos }) => {

  const [videoUrl, setVideoUrl] = useState('')
  useEffect(() => {
    videos.map((video) => {
      setVideoUrl(video.video_url)
      
    })
  }, [])
  return (
    <div className="article-lists">
      <div className="items">
        {videos?.length > 0 ? (
          videos?.map((video) => {
            return (
              <div className="item" key={uuidv4()}>
                <div className="header-image">
                  {video.video_url && (
                    // <video src={videoUrl} alt="" controls />
                    <iframe
                      width="560"
                      height="315"
                      src={videoUrl}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="YouTube Video"
                    ></iframe>
                    
                  )}
                  {video.video && <video src={video.video} alt="" controls />}
                </div>
                <div className="header-title">
                  <div className="tags">
                    <i className="fa-solid fa-tag"></i>
                    {video.video_tag &&
                      video.video_tag.map((tag) => (
                        <span key={uuidv4()}>{tag.name}</span>
                      ))}
                  </div>
                </div>
                <div className="info">
                  <div className="title">{video.name}</div>
                  <div className="description">
                    {truncateDescription(video.text, 50)}
                  </div>
                  <Link to={`/video-content/${video.id}`}>
                    To'liq maqolani o'qish{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <span className="created-date">
                    {formatDate(video.created_at)}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <NotAvailable name="Ma'lumot mavjud emas" />
        )}
      </div>
    </div>
  );
};

export default VideoList;
