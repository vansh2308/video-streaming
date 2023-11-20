import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice"
import userReducer from "./features/userSlice"
import videoListReducer from "./features/videoListSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    videoList: videoListReducer
  }
})