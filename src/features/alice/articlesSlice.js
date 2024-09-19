import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BlogArticle from "./../../service/blog";

export const fetchArticlesByCategory = createAsyncThunk(
  "articles/fetchArticlesByCategory",
  async ({ page, pageSize, categoryId }) => {
    const response = categoryId
      ? await BlogArticle.fetchArticlesByCategory(categoryId, page, pageSize)
      : await BlogArticle.fetchArticles({ page, page_size: pageSize });
    return response;
  }
);

const articleSlice = createSlice({
  name: "articles",
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
      .addCase(fetchArticlesByCategory.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(fetchArticlesByCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLoading = false;
        state.data = action.payload.results;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchArticlesByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default articleSlice.reducer;
