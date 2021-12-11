import { createStore } from "redux";

import rootReducer from "./reducers";

const initialState = {
  searchState: {
    participantSearchResults: [],
    filteredSearchResults: [],
    searchValues: "",
    searchName: "",
    searchDob: "",
  },
  servicesSearchState: {
    servicesSearchResults: [],
    loadedServices: [],
    searchServicesValues: "",
  },
  userState: {
    focusedParticipant: {},
    serviceLetters: [],
  },
  providerState: {
    focusedProvider: null,
  },
};

export default createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
