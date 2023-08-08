//authSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
    user: null,
    status:"idle"

};

export const signupUserAsync = createAsyncThunk(
    'user/signupUser',
    async (data) => {
        let url = "http://localhost:8080/auth/signup/";
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            },
            body: JSON.stringify(data),
        });
        const d = await response.json();
        return d;
    }
);




export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        increment: (state) => {

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signupUserAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signupUserAsync.fulfilled, (state, action) => {

                if (action.payload == "Internal Server Error" || action.payload == "unable to save user" || action.payload == "Sorry a user already exists with this email") {
                    state.status = 'fulfilled';
                    return;
                }
                else {
                    state.status = 'fulfilled';
                    state.user = action.payload;
                }
            })
            .addCase(loginUserAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUserAsync.fulfilled, (state, action) => {
                if (action.payload == "Internal Server Error" || action.payload == "Invalid Email Or Password") {
                    state.status = 'fulfilled';
                    return;
                }
                else {
                    state.status = 'fulfilled';
                    state.user = action.payload;
                }
            })
            .addCase(logoutUserAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(logoutUserAsync.fulfilled, (state, action) => {
                if (action.payload == "Internal Server Error") {
                    state.status = 'fulfilled';
                    return;
                }
                else {
                    state.status = 'fulfilled';
                    state.user = null;
                }
            })
            .addCase(getUserAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUserAsync.fulfilled, (state, action) => {
                if (action.payload == "Internal Server Error" || action.payload == "Token Not Found" || action.payload=="Invalid Token") {
                    state.status = 'fulfilled';
                    return;
                }
                else {
                    state.status = 'fulfilled';
                    state.user = action.payload;
                }
            })



    },


});

export const { increment } = userSlice.actions;
export default userSlice.reducer;