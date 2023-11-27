import { createSlice } from "@reduxjs/toolkit";

export const uploadedVideosSlice = createSlice({
  name: "uploadedVideos",
  initialState: {
    value: [],
  },
  reducers: {
    setUploadedVideos: (state, action) => {
      state.value = action.payload
    }
  }
})

export const {setUploadedVideos} = uploadedVideosSlice.actions;
export default uploadedVideosSlice.reducer
