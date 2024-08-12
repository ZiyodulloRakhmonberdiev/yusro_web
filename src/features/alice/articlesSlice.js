import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BlogArticle from './../../service/blog';

export const fetchArticles = createAsyncThunk(
    'articles/fetchArticles',
    async ({ page, pageSize, categoryId }) => {
        const response = await BlogArticle.fetchArticles({ 
            page, 
            page_size: pageSize,
            category_id: categoryId,
            order_by: '-created_at' 
        });
        return response;
    }
);

const articleSlice = createSlice({
    name: 'articles',
    initialState: {
        data: [],
        status: 'idle',
        isLoading: true,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.status = 'loading';
                state.isLoading = true;
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.isLoading = false;
                state.data = action.payload.results;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.status = 'failed';
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
});

export default articleSlice.reducer;
