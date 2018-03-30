import { handleActions, Action } from "redux-actions";
import * as Actions from "../constants/actions";

 
let user = JSON.parse(localStorage.getItem('user'));
const initialState : User = user || {};

export default handleActions<User, User>(
  {
    [Actions.LOGIN_SUCCESS]: (state, action) => {
      return Object.assign({}, action.payload);
    },
    [Actions.LOGOUT] : (state) =>{
      return Object.assign({},null);
    }
  },
  initialState
);
