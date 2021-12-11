import { LOAD_USER } from "./actionTypes";

export const loadUser = (userObj) => ({
  type: LOAD_USER,
  payload: userObj,
});
