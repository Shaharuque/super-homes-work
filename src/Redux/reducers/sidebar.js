import { createSlice } from "@reduxjs/toolkit";


export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState : {
    overlay: false,
    min: false,
    close: false,
    dark: false,
  },
  reducers: {
    overlay: (state) => {
      state.overlay = !state.overlay;
    },
    minmax: (state) => {
      state.min = !state.min;
    },
    openclose: (state) => {
      state.close = !state.close;
    },
    darkLight: (state) => {
      state.dark = !state.dark;
    },
  },
});
export const { overlay, minmax, openclose, darkLight } = sidebarSlice.actions;

export default sidebarSlice.reducer;
