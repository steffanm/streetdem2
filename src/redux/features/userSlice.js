import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  userName: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogIn(state, action) {
      console.log({ state, action });

      return { ...state, loggedIn: true };
    },
    userLogOut(state, action) {
      return { ...state, loggedIn: false };
    },
    updateUserDetails(state, action) {
      return { ...state, userName: { payload: test } };
    },
  },
});

export const { userLogIn, userLogOut, updateUserDetails } = userSlice.actions;

export default userSlice.reducer;
