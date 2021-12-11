import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: "false",
  userName: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogIn(state, action) {},
    userLogOut(state, action) {},
  },
});

export const { userLogIn, userLogOut } = userSlice.actions;

export default userSlice.reducer;
