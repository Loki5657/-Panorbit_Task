import { AuthTypes } from "../action_types/auth_types";

const initialState = {

};

export default function AuthReducer(state = initialState, action = null) {
  if (!state) {
    state = initialState;
  }
  switch (action.type) {
    case AuthTypes.GET_USERDATASUCCESS: {
      localStorage.setItem("user", JSON.stringify(action.data));
      return {
        ...action.data,
      };
    }
    
    default:
      return state;
  }
}
