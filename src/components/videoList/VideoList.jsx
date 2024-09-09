import "./videoList.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { formatDate } from "../../utils/formatDate";
import NotAvailable from "../../helpers/NotAvailable";
import { v4 as uuidv4 } from "uuid";
import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox.css";
import defaultVideo from "../../video/defaultVideo.mp4";
import defaultImage from "../../images/nabawi_8.jpg";

const truncateDescription = (description, limit) => {
  const words = description.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return description;
};

const VideoList = ({ videos }) => {
  useEffect(() => {
    // Initialize Fancybox
    Fancybox.bind("[data-fancybox='video-gallery']", {
      buttons: ["zoom", "close", "fullscreen", "thumbs"],
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <div className="video-lists">
      <div className="items">
        {videos?.length > 0 ? (
          videos.map((video) => (
            <div className="item" key={uuidv4()}>
              {video.video_url ? (
                // YouTube or external video
                <a
                  data-fancybox="video-gallery"
                  href={video.video_url}
                  data-caption={video.name}
                  className="video-gallery"
                >
                  <img
                    className="video-thumbnail"
                    src={video.video_poster || defaultImage}
                    alt=""
                  />
                  <div className="play-icon-div">
                    <button className="play-icon-wrapper">
                      <div className="triangle"></div>
                    </button>
                  </div>
                </a>
              ) : (
                // Local or default video
                <a
                  data-fancybox="video-gallery"
                  href={video.video || defaultVideo}
                  data-caption={video.name}
                  className="video-gallery"
                >
                  <img
                    className="video-thumbnail"
                    src={video.video_poster || defaultImage}
                    alt=""
                  />
                  <div className="play-icon-div">
                    <button className="play-icon-wrapper">
                      <div className="triangle"></div>
                    </button>
                  </div>
                </a>
              )}
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
          ))
        ) : (
          <NotAvailable name="Ma'lumot mavjud emas" />
        )}
      </div>
    </div>
  );
};

export default VideoList;
