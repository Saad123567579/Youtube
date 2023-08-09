//authSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
    videos:null,
    status:"idle",
    currentVideo:null

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

export const getidvideoAsync = createAsyncThunk(
    'user/getidvideo',
    async (id) => {
        await fetch(`http://localhost:8080/video/incrementviews/${id}`,{
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            }
        });

        let url = `http://localhost:8080/video/getvideobyid/${id}`;
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
            .addCase(getidvideoAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getidvideoAsync.fulfilled, (state, action) => {
                if (action.payload == "Internal Server Error" || action.payload == "Not Found" ) {
                    state.status = 'fulfilled';
                    return;
                }
                else {
                    state.status = 'fulfilled';
                    state.currentVideo = action.payload;
                }
            })
    },


});

export const { increment } = userSlice.actions;
export default userSlice.reducer;