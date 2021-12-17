import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  search: "false",
  searchFirstName: {},
  searchLastName: {},
  searchDOB: {},
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    userSearhResults(state, action) {
      return {};
    },
    userSearchFirstName(state, action) {},
    userSearchLastName(state, action) {},
    userSearchFDOB(state, action) {},
  },
});

export const {
  userSearhResults,
  userSearchFirstName,
  userSearchLastName,
  userSearchFDOB,
} = searchSlice.actions;

export default searchSlice.reducer;
