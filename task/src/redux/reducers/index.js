import { combineReducers } from "redux";
import AuthReducer from "./auth_reducer";

const RootReducer = combineReducers({
  Auth: AuthReducer,

});

export default RootReducer;
