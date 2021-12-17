import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: "false",
  entities: {},
};

const serviceLetterSlice = createSlice({
  name: "service letter",
  initialState,
  reducers: {
    userLogIn(state, action) {},
    userLogOut(state, action) {},
  },
});

export const { userLogIn, userLogOut } = serviceLetterSlice.actions;

export default serviceLetterSlice.reducer;
