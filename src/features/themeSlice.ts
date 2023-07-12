import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

// Define a type for the slice state
interface themeState {
  theme: "light" | "dark";
}

// Define the initial state using that type
const initialState: themeState = {
  theme: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLight: (state) => {
      state.theme = "light";
    },
    setDark: (state) => {
      state.theme = "dark";
    },
  },
});

export const { setDark, setLight } = themeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
