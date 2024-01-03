import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    selectPage: (state, action) => {
      state = action.payload;
    },
  },
});
export const { selectPage } = paginationSlice.actions;
export default paginationSlice.reducer;
