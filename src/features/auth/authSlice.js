// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isLoading:false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInUserStart: (state, action) => {
            state.isLoading = true; // Contact yoki newsletter uchun
            state.error = null;
        },
        signInUserSuccess: (state, action) => {
            state.user = action.payload.user;
            state.isLoading = false; // Contact yoki newsletter uchun
            state.error = null;
        },
        signInUserFailure: (state, action) => {
            state.isLoading = false; // Contact yoki newsletter uchun
            state.error = action.payload.error;
        },
    },
});

export const { signInUserStart, signInUserSuccess, signInUserFailure } = authSlice.actions;
export default authSlice.reducer;
