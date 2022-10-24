import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    chosenTheme: "light",
  },
  reducers: {
    changeTheme(state, action) {
      if (action.payload === "dark") {
        state.chosenTheme = "dark";
      } else {
        state.chosenTheme = "light";
      }
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
