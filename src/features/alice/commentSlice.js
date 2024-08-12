import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BlogArticle from './../../service/blog';

// Async thunk for posting a comment
export const postComment = createAsyncThunk(
    'comments/postComment',
    async (user, { rejectWithValue }) => {
        try {
            const response = await BlogArticle.postComment(user); // id ni keyin jo'natish
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data?.errors || 'An error occurred while posting the comment.');
        }
    }
);

const initialState = {
    data: [],
    isLoading: false,
    error: null,
};
console.log(initialState.error);

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postComment.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(postComment.fulfilled, (state, action) => {
                state.data.push(action.payload);
                state.isLoading = false;
            })
            .addCase(postComment.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export default commentSlice.reducer;
