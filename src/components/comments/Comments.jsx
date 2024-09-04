// import "./Comment.css";

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
// import BlogArticle from "../../service/blog";
// import { useSelector, useDispatch } from "react-redux";
// import Loader from "../../ui/Loader";
// import NotAvailable from "../../helpers/NotAvailable";
// import { formatDate } from "../../utils/formatDate";
// import axios, { all } from "axios";

// function Comments({ comment, postId }) {
//   const [subComments, setSubComments] = useState([]);
//   const [subExtraComments, setExtraSubComments] = useState([]);
//   const [showSubcomments, setShowsubcomments] = useState(false);
//   const [showExtraSubcomments, setShowExtrasubcomments] = useState(false);

//   const main_url = "http://95.46.96.78:7777/api/v1";

//   const getSubComments = () => {
//     axios
//       .get(`${main_url}/main/comments/by-comment/${comment.id}/`)
//       .then((response) => {
//         setSubComments(response.data);
//       })
//       .catch(() => {
//         throw new Error("Xatolik yuz berdi!");
//       });
//       setShowsubcomments(!showSubcomments)
//       setShowExtrasubcomments(false);
//     };
    
//     const getExtraSubComments = (id) => {
//       axios
//       .get(`${main_url}/main/comments/by-comment/${id}/`)
//       .then((response) => {
//         setExtraSubComments(response.data);
//       })
//       .catch(() => {
//         throw new Error("Xatolik yuz berdi!");
//       });
//       setShowExtrasubcomments(!showExtraSubcomments)
//   };

//   return (
//     <div className="article-comments">
//       {/* <div className="title">
//         Izohlar ({comments && comments.results?.length})
//       </div> */}
//       <div className="items">
//         <div className="item">
//           <div className="name">
//             {comment.full_name}
//             <div className="created-at">
//               <span>{formatDate(comment.created_at)}</span>
//             </div>
//           </div>
//           <div className="description">{comment.text}</div>
//           <div className="actions">
//             <button onClick={() => getSubComments(comment.id)}>
//               Javob berish
//             </button>
//             <button onClick={() => getSubComments(comment.id)}>
//               Barcha javoblarni ko'rish
//             </button>
//           </div>
//         </div>
//         <div className={`sub-comment ${showSubcomments ? 'show' : 'none'}`}>
//           {subComments.results?.length > 0 &&
//             subComments.results.map((subComment) => (
//               <div>
//                 <div className="item" key={subComment.id}>
//                   <div className="name">
//                     {subComment.full_name}
//                     <div className="created-at">
//                       <span>{formatDate(subComment.created_at)}</span>
//                     </div>
//                   </div>
//                   <div className="description">{subComment.text}</div>
//                   <div className="actions">
//                     <button onClick={() => getSubComments(subComment.id)}>
//                       Javob berish
//                     </button>
//                     <button onClick={() => getExtraSubComments(subComment.id)}>
//                       Barcha javoblarni ko'rish
//                     </button>
//                   </div>
//                 </div>
//                 <div className={`extra-sub-comments ${showExtraSubcomments ? 'show' : 'none'}`}>
//                   {subExtraComments.results?.length > 0 &&
//                     subExtraComments.results.map((subExtraComment) => (
//                       <div className="item" key={subExtraComment.id}>
//                         <div className="name">
//                           {subExtraComment.full_name}
//                           <div className="created-at">
//                             <span>
//                               {formatDate(subExtraComment.created_at)}
//                             </span>
//                           </div>
//                         </div>
//                         <div className="description">
//                           {subExtraComment.text}
//                         </div>
//                       </div>
//                     ))}
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Comments;

// import { useState } from "react";
// import CommentForm from "../commentForm/commentForm";
// import "./comments.css";

// function Comments({ comment, postId }) {
//   const [showReplyForm, setShowReplyForm] = useState(false);
//   const [showReplies, setShowReplies] = useState(false);
//   const [replyLimit, setReplyLimit] = useState(5);

//   const toggleReplyForm = () => {
//     setShowReplyForm(!showReplyForm);
//   };

//   const toggleReplies = () => {
//     setShowReplies(!showReplies);
//   };

//   const loadMoreReplies = () => {
//     setReplyLimit((prevLimit) => prevLimit + 5);
//   };

//   return (
//     <div className="comment">
//       <div className="comment-header">
//         <span className="comment-author">{comment.full_name}</span>
//         <span className="comment-date">{new Date(comment.created_at).toLocaleDateString()}</span>
//       </div>
//       <div className="comment-body">
//         <p>{comment.text}</p>
//       </div>
//       <div className="comment-actions">
//         <button onClick={toggleReplyForm} className="reply-btn">Javob berish</button>
//         {comment.replies?.length > 0 && (
//           <button onClick={toggleReplies} className="view-replies-btn">
//             Javoblarni ko'rsatish ({comment.replies.length})
//           </button>
//         )}
//       </div>
//       {showReplyForm && (
//         <CommentForm postId={postId} parentId={comment.id} />
//       )}
//       {showReplies && (
//         <div className="replies-section">
//           {comment.replies.slice(0, replyLimit).map((reply) => (
//             <Comments key={reply.id} comment={reply} postId={postId} />
//           ))}
//           {replyLimit < comment.replies.length && (
//             <button className="show-more-btn" onClick={loadMoreReplies}>
//               Yana ko'rsatish
//             </button>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Comments;


