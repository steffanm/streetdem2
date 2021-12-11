import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: "false",
  providerID: {},
};

const providerSlice = createSlice({
  name: "provider",
  initialState,
  reducers: {
    providerLogIn(state, action) {},
    providerLogOut(state, action) {},
  },
});

export const { userLogIn, userLogOut } = providerSlice.actions;

export default providerSlice.reducer;
