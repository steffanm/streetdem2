import { combineReducers } from "redux";
import { LOAD_USER } from "../actionTypes";

const userReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        currentlyAuthenticatedUser: payload,
      };

    default:
      break;
  }
  return state;
};

export default combineReducers({
  userState: userReducer,
});
