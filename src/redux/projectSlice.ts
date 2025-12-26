import { createSlice } from "@reduxjs/toolkit";
import type { Project } from "../interfaces/projectCrad.interface";

const initialState: Project = {
  $id: "",
  name: "",
  github: "",
  image: "",
  details: "",
  deployLink: "",
  techStack: [],
  type: "",
  domain: "",
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    updateIsOpen: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateIsOpen } = projectSlice.actions;

export default projectSlice.reducer;
