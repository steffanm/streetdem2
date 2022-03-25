import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: "false",
  entities: {},
};

const serviceLetterSlice = createSlice({
  name: "service letter",
  initialState,
  reducers: {
    createServiceLetter(state, action) {},
    editServiceLetter(state, action) {},
    deleteServiceLetter(state, action) {},
  },
});

export const { userLogIn, userLogOut } = serviceLetterSlice.actions;

export default serviceLetterSlice.reducer;
