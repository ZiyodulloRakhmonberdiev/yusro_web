import "./readVideo.css";
import { useEffect, useRef, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import { useLocation, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import AnswerToQuestions from "../answerToQuestions/AnswerToQuestions";
import ExtraPagesHeader from "../extraPagesHeader/ExtraPagesHeader";
import useFetch from "../../hooks/useFetch";
import { formatDate } from "../../utils/formatDate";
import PopularPosts from "../popularPosts/PopularPosts";
import VideoArticle from "../../service/video";
import defaultVideo from "../../video/defaultVideo.mp4";
import CommentsSection from "../videoCommentsSection/CommentsSection";
import CommentForm from "../commentVideo/CommentForm";

import defaultImage from "../../images/image-default-post.jpg";

function ReadVideo() {
  const { id } = useParams();
  const { data: video } = useFetch(() => VideoArticle.readVideo(id));
  const [copied, setCopied] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Nusxalashda muammo yuz berdi: ", err));
  };

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
    <div className="read-video blog">
      <ExtraPagesHeader title={video.name} />
      <div className="container">
        <div className="video-info">
          <div className="item">
            <div className="header-image">
              {video.video_url ? (
                // YouTube or external video
                <a
                  data-fancybox="video-gallery"
                  href={video.video_url}
                  data-caption={video.name}
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
                  </div>{" "}
                </a>
              ) : (
                // Local or default video
                <a
                  data-fancybox="video-gallery"
                  href={video.video || defaultVideo}
                  data-caption={video.name}
                >
                  <img
                    className="video-thumbnail"
                    src={video.video_poster}
                    alt=""
                  />
                  <div className="play-icon-div">
                    <button className="play-icon-wrapper">
                      <div className="triangle"></div>
                    </button>
                  </div>
                </a>
              )}
              <span className="created-date">
                {formatDate(video.created_at)}
              </span>
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
              <div className="description">{video.text}</div>
            </div>
            <div className="extra-info">
              <p onClick={handleCopyLink}>
                <span>Bu postni ulashish</span>
                <i className="fa-solid fa-link"></i>
                {copied && <p className="copied">Nusxalandi</p>}
              </p>
            </div>
          </div>
          <CommentsSection postId={id} />
          <CommentForm postId={id} />
        </div>
        <div className="blog-tags">
          <PopularPosts />
          <AnswerToQuestions />
        </div>
      </div>
    </div>
  );
}

export default ReadVideo;
