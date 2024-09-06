import "./readVideo.css";
import { useLocation, useParams } from "react-router-dom";
import AnswerToQuestions from "../answerToQuestions/AnswerToQuestions";
import ExtraPagesHeader from "../extraPagesHeader/ExtraPagesHeader";
import useFetch from "../../hooks/useFetch";
import { formatDate } from "../../utils/formatDate";
import PopularPosts from '../popularPosts/PopularPosts';
import VideoArticle from "../../service/video";
import defaultVideo from "../../video/defaultVideo.mp4";
import { v4 as uuidv4 } from "uuid";
import VideoPlayer from "../videoPlayer/VideoPlayer"; // Import the VideoPlayer component
import { useEffect, useState } from "react";
import CommentsSection from "../videoCommentsSection/CommentsSection";
import CommentForm from "../commentVideo/CommentForm";

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

  return (
    <div className="read-video blog">
      <ExtraPagesHeader title={video.name} />
      <div className="container">
        <div className="video-info">
          <div className="item">
            <div className="header-image">
              <VideoPlayer
                videoUrl={video.video_url ? video.video_url : null}
                localVideo={video.video}
                defaultVideo={defaultVideo}
              />
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
