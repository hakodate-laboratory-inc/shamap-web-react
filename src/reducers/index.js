import { combineReducers } from "redux";
import { reduxTokenAuthReducer } from "redux-token-auth";
import map from "./map";

export default combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  map,
});
