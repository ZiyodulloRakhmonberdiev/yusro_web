import "./readVideo.css";
import { Link, useLocation, useParams } from "react-router-dom";
import AnswerToQuestions from "../answerToQuestions/AnswerToQuestions";
import ExtraPagesHeader from "../extraPagesHeader/ExtraPagesHeader";
import useFetch from "../../hooks/useFetch";
import { formatDate } from "../../utils/formatDate";
// import PopularPosts from '../popularPosts/PopularPosts';
import { useEffect, useState } from "react";
import Comments from "../comments/Comments";
import CommentPost from "../commentPost/CommentPost";
import VideoArticle from "../../service/video";
import defaultVideo from "../../video/defaultVideo.mp4"

function ReadVideo() {
  const { id } = useParams();
  const {
    data: video,
    loading,
    error,
  } = useFetch(() => VideoArticle.readVideo(id));
  console.log(video);

  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Nusxalashda muammo yuz berdi: ", err));
  };

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="read-video blog">
      <ExtraPagesHeader title={video.title} />
      <div className="container">
        <div className="video-info">
          <div className="item" key={video.id}>
            <div className="header-image">
              <video src={video.video_url ? video.video_url : video.video ? video.video : defaultVideo} controls />
              <span className="created-date">
                {formatDate(video.created_at)}
              </span>
            </div>
            <div className="header-title">
              {/* <div className="tags">
                <i className="fa-solid fa-tag"></i>
                {video.tags &&
                  video.tags.map((tag) => (
                    <span key={tag.id}>{tag.name}</span>
                  ))}
              </div> */}
              {/* <div className="author">
                <i className="fa-solid fa-user"></i>
                <span>{video.author}</span>
              </div> */}
              {/* <div className="comments">
                <i className="fa-regular fa-comment"></i>
                <span>{video.comments && video.comments.length}</span>
              </div> */}
              {/* <div className="views">
                <i className="fa-solid fa-eye"></i>
                <span>{video.views}</span>
              </div> */}
            </div>
            <div className="info">
              <div className="title">{video.name}</div>
              {/* <div className="intro-text">
                <i className="fa-solid fa-quote-right"></i>
                <p>{video.intro_text}</p>
                <span>Yusro Tour</span>
              </div> */}
              <div className="description">{video.text}</div>
            </div>
            <div className="extra-info">
              {/* <div>
                <span>Teglar:</span>{" "}
                {video.tags &&
                  video.tags.map((tag) => (
                    <span key={tag.id}>{tag.name}</span>
                  ))}
              </div> */}
              <p onClick={handleCopyLink}>
                <span>Bu postni ulashish</span>
                <i className="fa-solid fa-link"></i>
                {copied && <p className="copied">Nusxalandi</p>}
              </p>
            </div>
            {/* <Comments
              videoComments={video.comments && video.comments}
              loading={loading}
              error={error}
            /> */}
            {/* <CommentPost id={id} /> */}
          </div>
        </div>
        <div className="blog-tags">
          {/* <PopularPosts /> */}
          <AnswerToQuestions />
        </div>
      </div>
    </div>
  );
}

export default ReadVideo;
