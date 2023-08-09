//authSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
    videos:null,
    status:"idle",
    currentVideo:null

};

export const createcommentAsync = createAsyncThunk(
    'comment/createcomment',
    async (data) => {
        
        let url = "http://localhost:8080/comment/createcomment";
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            },
            body:JSON.stringify(data)
        });
        const d = await response.json();
        return d;
    }
);

export const getcommentbyvideoAsync = createAsyncThunk(
    'comment/getcommentbyvideo',
    async (id) => {
        
        let url = `http://localhost:8080/comment/getcommentbyid/${id}`;
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




export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        increment: (state) => {

        },
    },
    extraReducers: (builder) => {
        builder
           
            .addCase(createcommentAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createcommentAsync.fulfilled, (state, action) => {
                
            })
            .addCase(getcommentbyvideoAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getcommentbyvideoAsync.fulfilled, (state, action) => {
                
            })
    },


});

export const { increment } = commentSlice.actions;
export default commentSlice.reducer;