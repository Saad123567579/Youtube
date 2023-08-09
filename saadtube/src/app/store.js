import { configureStore } from '@reduxjs/toolkit';

import userReducer from "../features/userSlice";
import videoReducer from "../features/videoSlice";
import commentReducer from "../features/commentSlice";
export const store = configureStore({
  reducer: {
    comment:commentReducer,
    user:userReducer,
    video:videoReducer
  },
});