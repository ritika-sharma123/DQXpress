import { configureStore } from "@reduxjs/toolkit";
import ProjectsSlice from "./slices/ProjectsSlice";

export const store = configureStore({
  reducer: {
    projects: ProjectsSlice,
  },
});
