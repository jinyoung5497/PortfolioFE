import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    hover: true,
    projectIndex: -1,
    title: "",
    english: false,
  },
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    hover: (state) => {
      state.value.hover = !state.value.hover;
    },
    hoverTrue: (state) => {
      state.value.hover = true;
    },
    hoverFalse: (state) => {
      state.value.hover = false;
    },
    projectIndex: (state, action) => {
      state.value.projectIndex = action.payload;
    },
    title: (state, action) => {
      state.value.title = action.payload;
    },
    toggleEnglish: (state) => {
      state.value.english = !state.value.english;
      console.log(state.value.english);
    },
  },
});

export const {
  hover,
  hoverTrue,
  hoverFalse,
  projectIndex,
  title,
  toggleEnglish,
  english,
} = pageSlice.actions;
export default pageSlice.reducer;
