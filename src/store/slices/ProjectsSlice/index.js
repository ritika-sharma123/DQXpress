import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    value: 0,
    new_project_details: {
      data_source: {
        project_details: {
          project_name: "",
          description: ""
        }
      }
    }
  },
  reducers: {
    increment: (state) => {
      state.value += 5;
    },
    updateNewProjectDetails: (state) => {
     // new_project_details.project_name.description.data_source.target
    },
  },
  extraReducers: (builder) => {},
});

export const { increment } = projectsSlice.actions;

export default projectsSlice.reducer;
