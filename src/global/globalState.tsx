import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: {} || null,
  toggle: false,
};

const globalState = createSlice({
  name: "state",
  initialState,
  reducers: {
    userState: (state, { payload }) => {
      state.state = payload;
    },
    logOut: (state: any) => {
      state.state = null;
    },
  },
});

export const { logOut, userState } = globalState.actions;

export default globalState.reducer;
