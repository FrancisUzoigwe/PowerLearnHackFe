import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const globalState = createSlice({
  name: "state",
  initialState,
  reducers: {
    toggle: (state: any) => {
      state.toggle = true;
    },
    // onChangeToggled: (state: any) => {
    //   state.toggle = false;
    // },
  },
});

export const { toggle } = globalState.actions;

export default globalState.reducer;
