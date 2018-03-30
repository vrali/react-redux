import { handleActions, Action } from "redux-actions";
import * as Actions from "../constants/actions";

const initialState: User = {
  isAuthenticated: false,
  claims: {
    isAdmin: true
  }
};

export default handleActions<User, User>(
  {
    [Actions.LOGIN_SUCCESS]: (state, action) => {
      return Object.assign({}, action.payload);
    }
  },
  initialState
);
