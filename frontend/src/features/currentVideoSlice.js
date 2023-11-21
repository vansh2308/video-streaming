import { createSlice } from "@reduxjs/toolkit";

export const currentVideoSlice = createSlice({
  name: "currentVideo",
  initialState: {
    value: {},
  },
  reducers: {
    setCurrentVideo: (state, action) => {
      state.value = action.payload
    }
  }
})

export const {setCurrentVideo} = currentVideoSlice.actions
export default currentVideoSlice.reducer