// import { createStore } from "redux";

// import rootReducer from "./reducers";

// const initialState = {
//   searchState: {
//     participantSearchResults: [],
//     filteredSearchResults: [],
//     searchValues: "",
//     searchName: "",
//     searchDob: "",
//   },
//   servicesSearchState: {
//     servicesSearchResults: [],
//     loadedServices: [],
//     searchServicesValues: "",
//   },
//   userState: {
//     focusedParticipant: {},
//     serviceLetters: [],
//   },
//   providerState: {
//     focusedProvider: null,
//   },
// };

// export default createStore(
//   rootReducer,
//   initialState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/userSlice";
import providerReducer from "./features/providerSlice";
import searchReducer from "./features/searchSlice";
import serviceLetterReducer from "./features/serviceLetterSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    provider: providerReducer,
    search: searchReducer,
    serviceLetter: serviceLetterReducer,
  },
});

export default store;
