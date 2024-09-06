// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import BlogArticle from '../../service/blog';

// // Async thunk for fetching comments for a specific post
// export const fetchComments = createAsyncThunk(
//     'comments/fetchComments',
//     async ({ postId, page, pageSize }, { rejectWithValue }) => {
//         try {
//             const response = await BlogArticle.fetchComments({
//                 post_id: postId,
//                 page,
//                 page_size: pageSize,
//                 order_by: '-created_at'
//             });
//             return response;
//         } catch (error) {
//             return rejectWithValue(error.response?.data?.errors || 'Kommentlarni olishda xatolik yuz berdi!');
//         }
//     }
// );

// const initialState = {
//     data: [],
//     isLoading: false,
//     error: null,
// };

// const commentsSlice = createSlice({
//     name: 'fetchComments',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchComments.pending, (state) => {
//                 state.isLoading = true;
//                 state.error = null;
//             })
//             .addCase(fetchComments.fulfilled, (state, action) => {
//                 state.data = action.payload.results; // Or action.payload if it's the entire data
//                 state.isLoading = false;
//             })
//             .addCase(fetchComments.rejected, (state, action) => {
//                 state.error = action.payload;
//                 state.isLoading = false;
//             });
//     },
// });

// export default commentsSlice.reducer;
