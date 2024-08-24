import { configureStore } from "@reduxjs/toolkit";
import adminAuthSlice from '../features/admin/auth/authSlice'
import AuthReducer from '../features/auth/authSlice';
import ArticlesReducer from '../features/alice/articlesSlice'; // Correct path
import VideosReducer from '../features/alice/videosSlice'; // Correct path
import commentReducer from '../features/alice/commentSlice'
import fetchCommentReducer from '../features/alice/fetchCommentSlice'

const store = configureStore({
  reducer: {
    adminAuth: adminAuthSlice,
    auth: AuthReducer,
    articles: ArticlesReducer,
    comments: commentReducer,
    fetchComments: fetchCommentReducer,
    videos: VideosReducer,
  },
  devTools: process.env.NODE_ENV !== "production"
});

export default store;
