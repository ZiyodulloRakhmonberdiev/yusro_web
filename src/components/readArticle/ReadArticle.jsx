// import "./readArticle.css";
// import { Link, useLocation, useParams } from "react-router-dom";
// import AnswerToQuestions from "./../answerToQuestions/AnswerToQuestions";
// import BlogArticle from "./../../service/blog";
// import ExtraPagesHeader from "./../extraPagesHeader/ExtraPagesHeader";
// import useFetch from "./../../hooks/useFetch";
// import { formatDate } from "../../utils/formatDate";
// import PopularPosts from "../popularPosts/PopularPosts";
// import { useEffect, useState } from "react";
// import Comments from "../comments/Comments";
// import CommentPost from "../commentPost/CommentPost";
// import axios from "axios"
// import PostTags from "../postTags/PostTags";
// import { v4 as uuidv4 } from "uuid";
// // import axios from "axios";

// function ReadArticle() {
//   const { id } = useParams();
//   const [copied, setCopied] = useState(false);
//   const [subComments, setSubComments] = useState([]);

//   const {
//     data: article,
//     loading,
//     error,
//   } = useFetch(() => BlogArticle.readArticle(id));

//   const handleCopyLink = () => {
//     navigator.clipboard
//       .writeText(window.location.href)
//       .then(() => {
//         setCopied(true);
//         setTimeout(() => setCopied(false), 2000);
//       })
//       .catch((err) => console.error("Nusxalashda muammo yuz berdi", err));
//   };

//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);


//   const main_url = "http://95.46.96.78:7777/api/v1"
//   const [comments, setComments] = useState([]);
  

//   useEffect(() => {
//     axios
//       .get(`${main_url}/main/comments/by-post/${id}/`)
//       .then((response) => {
//         setComments(response.data)
//       })
//       .catch(() => {
//         throw new Error('Xatolik yuz berdi!');
//       });
//   }, []);



  // const getSubComments = (id) => {
  //   setCommentId(id);
  //   axios
  //       .get(`${main_url}/main/comments/by-comment/2/`)
  //       .then((response) => {
  //         setSubComments(response.data);
  //         console.log(response);
          
  //       })
  //       .catch(() => {
  //         throw new Error("Xatolik yuz berdi!");
  //       });
  // };

//   return (
//     <div className="read-article blog">
//       <ExtraPagesHeader title={article.name} />
//       <div className="container">
//         <div className="article-info">
//           <div className="item" key={article.id}>
//             <div className="header-image">
//               <img src={article.image} alt="" />
//               <span className="created-date">
//                 {formatDate(article.created_at)}
//               </span>
//             </div>
//             <div className="header-title">
//               <div className="tags">
//                 <i className="fa-solid fa-tag"></i>
//                 {article.post_tag &&
//                   article.post_tag?.map((tag) => (
//                     <span className="tag" key={uuidv4()}>
//                       {tag.name}
//                     </span>
//                   ))}
//               </div>
//               <div className="comments">
//                 <i className="fa-regular fa-comment"></i>
//                 <span>{comments && comments.results?.length}</span>
//               </div>
//             </div>
//             <div className="info">
//               <div className="title">{article.name}</div>
//               <div className="intro-text">
//                 <i className="fa-solid fa-quote-right"></i>
//                 <p>{article.post_slogan}</p>
//                 <span>Yusro Tour</span>
//               </div>
//               <div className="description">{article.post_content}</div>
//             </div>
//             <div className="extra-info">
//               <div>
//                 <span>Teglar:</span>{" "}
//                 {article.post_tag &&
//                   article.post_tag.map((tag) => (
//                       <span className="tag" key={uuidv4()}>
//                       {tag.name}
//                     </span>
//                   ))}
//               </div>
//               <p onClick={handleCopyLink}>
//                 <span>Bu postni ulashish</span>
//                 <i className="fa-solid fa-link"></i>
//                 {copied && <p className="copied">Nusxalandi</p>}
//               </p>
//             </div>
//             {/* <Comments articleComments={article.comments && article.comments} loading={loading} error={error} /> */}
//             {/* <Comments postId={id} comments={comments} /> */}
//             {
//               comments.results?.length > 0 && (
//                 <div className="comments-main">Izohlar: ({comments.results?.length})</div>
//               )
//             }
//             {
//               comments.results?.map((comment) => (
//                 <Comments comment={comment} key={uuidv4()} />
//               ))
//             }
//             {/* <CommentPost id={id}/> */}
//           </div>
//         </div>
//         <div className="blog-tags">
//           <PopularPosts />
//           <AnswerToQuestions />
//           {/* <PostTags /> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ReadArticle;

import "./readArticle.css";
import { Link, useLocation, useParams } from "react-router-dom";
import AnswerToQuestions from "./../answerToQuestions/AnswerToQuestions";
import BlogArticle from "./../../service/blog";
import ExtraPagesHeader from "./../extraPagesHeader/ExtraPagesHeader";
import useFetch from "./../../hooks/useFetch";
import { formatDate } from "../../utils/formatDate";
import PopularPosts from "../popularPosts/PopularPosts";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function ReadArticle() {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);
  const [comments, setComments] = useState([]);
  const [visibleComments, setVisibleComments] = useState(5);
  const [replyingTo, setReplyingTo] = useState(null);
  const [newReply, setNewReply] = useState("");

  const {
    data: article,
    loading,
    error,
  } = useFetch(() => BlogArticle.readArticle(id));

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Nusxalashda muammo yuz berdi", err));
  };

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const main_url = "http://95.46.96.78:7777/api/v1";

  useEffect(() => {
    axios
      .get(`${main_url}/main/comments/by-post/${id}/`)
      .then((response) => {
        setComments(response.data.results);
      })
      .catch(() => {
        throw new Error("Xatolik yuz berdi!");
      });
  }, [id]);

  const loadMoreComments = () => {
    setVisibleComments((prev) => prev + 5);
  };

  const loadMoreReplies = (commentId) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, visibleReplies: comment.visibleReplies + 5 }
          : comment
      )
    );
  };

  const handleReply = (commentId) => {
    setReplyingTo(commentId);
  };

  const submitReply = (commentId) => {
    const reply = {
      id: uuidv4(),
      content: newReply,
      parent: commentId,
      created_at: new Date().toISOString(),
    };

    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, replies: [reply, ...comment.replies || []] }
          : comment
      )
    );

    setNewReply("");
    setReplyingTo(null);
  };

  return (
    <div className="read-article blog">
      <ExtraPagesHeader title={article.name} />
      <div className="container">
        <div className="article-info">
          <div className="item" key={article.id}>
            <div className="header-image">
              <img src={article.image} alt="" />
              <span className="created-date">
                {formatDate(article.created_at)}
              </span>
            </div>
            <div className="header-title">
              <div className="tags">
                <i className="fa-solid fa-tag"></i>
                {article.post_tag &&
                  article.post_tag?.map((tag) => (
                    <span className="tag" key={uuidv4()}>
                      {tag.name}
                    </span>
                  ))}
              </div>
              <div className="comments">
                <i className="fa-regular fa-comment"></i>
                <span>{comments?.length}</span>
              </div>
            </div>
            <div className="info">
              <div className="title">{article.name}</div>
              <div className="intro-text">
                <i className="fa-solid fa-quote-right"></i>
                <p>{article.post_slogan}</p>
                <span>Yusro Tour</span>
              </div>
              <div className="description">{article.post_content}</div>
            </div>
            <div className="extra-info">
              <div>
                <span>Teglar:</span>{" "}
                {article.post_tag &&
                  article.post_tag.map((tag) => (
                    <span className="tag" key={uuidv4()}>
                      {tag.name}
                    </span>
                  ))}
              </div>
              <p onClick={handleCopyLink}>
                <span>Bu postni ulashish</span>
                <i className="fa-solid fa-link"></i>
                {copied && <p className="copied">Nusxalandi</p>}
              </p>
            </div>

            {comments.slice(0, visibleComments).map((comment) => (
              <div key={comment.id} className="comment">
                <div>{comment.content}</div>
                <div>
                  <button onClick={() => handleReply(comment.id)}>Javob berish</button>
                  <button onClick={() => loadMoreReplies(comment.id)}>Javoblarni ko'rish</button>
                </div>
                {comment.id === replyingTo && (
                  <div className="reply-form">
                    <input
                      type="text"
                      value={newReply}
                      onChange={(e) => setNewReply(e.target.value)}
                      placeholder="Javob yozish..."
                    />
                    <button onClick={() => submitReply(comment.id)}>
                      Yuborish
                    </button>
                  </div>
                )}
                {comment.replies?.slice(0, comment.visibleReplies || 5).map((reply) => (
                  <div key={reply.id} className="reply">
                    <Link to={`#comment-${comment.id}`}>Izohga javob</Link>: {reply.content}
                  </div>
                ))}
                {comment.replies?.length > (comment.visibleReplies || 5) && (
                  <button onClick={() => loadMoreReplies(comment.id)}>Yana ko'rsatish</button>
                )}
              </div>
            ))}

            {comments.length > visibleComments && (
              <button onClick={loadMoreComments}>Yana ko'rsatish</button>
            )}
          </div>
        </div>
        <div className="blog-tags">
          <PopularPosts />
          <AnswerToQuestions />
        </div>
      </div>
    </div>
  );
}

export default ReadArticle;

