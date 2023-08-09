//authSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
    videos:null,
    status:"idle"

};

export const getallvideoAsync = createAsyncThunk(
    'user/getallvideo',
    async () => {
        let url = "http://localhost:8080/video/getallvideo";
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            }
        });
        const d = await response.json();
        return d;
    }
);


export const userSlice = createSlice({
    name: 'video',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        increment: (state) => {

        },
    },
    extraReducers: (builder) => {
        builder
           
            .addCase(getallvideoAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getallvideoAsync.fulfilled, (state, action) => {
                if (action.payload == "Internal Server Error" || action.payload == "Not Found" ) {
                    state.status = 'fulfilled';
                    return;
                }
                else {
                    state.status = 'fulfilled';
                    state.videos = action.payload;
                }
            })
    },


});

export const { increment } = userSlice.actions;
export default userSlice.reducer;