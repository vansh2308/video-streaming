import { createSlice } from "@reduxjs/toolkit";

export const watchLaterSlice = createSlice({
  name: "watchLater",
  initialState: {
    value: [],
  },
  reducers: {
    setWatchLater: (state, action) => {
      state.value = action.payload
    }
  }
})

export const {setWatchLater} = watchLaterSlice.actions;
export default watchLaterSlice.reducer
