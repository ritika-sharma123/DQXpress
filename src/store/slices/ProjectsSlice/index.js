import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 5;
    },
  },
  extraReducers: (builder) => {},
});

export const { increment } = projectsSlice.actions;

export default projectsSlice.reducer;
