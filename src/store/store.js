import { configureStore } from "@reduxjs/toolkit";
import adminAuthSlice from '../features/admin/auth/authSlice'
import AuthReducer from '../features/auth/authSlice';
import ArticlesReducer from '../features/alice/articlesSlice'; // Correct path
import VideosReducer from '../features/alice/videosSlice'; // Correct path
import commentReducer from '../features/alice/commentSlice'

const store = configureStore({
  reducer: {
    adminAuth: adminAuthSlice,
    auth: AuthReducer,
    articles: ArticlesReducer,
    comments: commentReducer,
    videos: VideosReducer,
  },
  devTools: process.env.NODE_ENV !== "production"
});

export default store;
