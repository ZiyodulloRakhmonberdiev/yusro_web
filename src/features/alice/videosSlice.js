import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import VideoArticle from "./../../service/video";

export const fetchVideosByCategory = createAsyncThunk(
  "articles/fetchVideosByCategory",
  async ({ page, pageSize, categoryId }) => {
    const response = categoryId
      ? await VideoArticle.fetchVideosByCategory(categoryId, page, pageSize)
      : await VideoArticle.fetchVideos({ page, page_size: pageSize });
    return response;
  }
);

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    data: [],
    status: "idle",
    isLoading: true,
    error: null,
    pagination: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideosByCategory.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(fetchVideosByCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLoading = false;
        state.data = action.payload.results;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchVideosByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default videosSlice.reducer;
