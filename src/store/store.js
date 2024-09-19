import { configureStore } from "@reduxjs/toolkit";
import ArticlesReducer from '../features/alice/articlesSlice';
import VideosReducer from '../features/alice/videosSlice';
import commentReducer from '../features/alice/commentSlice'

const store = configureStore({
  reducer: {
    articles: ArticlesReducer,
    comments: commentReducer,
    videos: VideosReducer,
  },
  devTools: process.env.NODE_ENV !== "production"
});

export default store;
