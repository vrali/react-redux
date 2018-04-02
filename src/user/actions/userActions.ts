import { createAction } from "redux-actions";
import * as Actions from "../constants/actions";
import thunk, { ThunkAction } from "redux-thunk";
import { Dispatch } from "redux";

export const loginSuccess = createAction<User>(Actions.LOGIN_SUCCESS);
export const logout = createAction(Actions.LOGOUT);

export const login = (credentials: LoginPayLoad) => {
  return (dispatch: Dispatch<User>) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let user = {
          isAuthenticated: true,
          emailAddress : "vinay@gmail.com",
          firstName : "Vinay",
          lastName : "Rali",
          claims: {
            isAdmin: false
          }
        } as User;
        dispatch(loginSuccess(user));
        resolve(user);
      }, 1000);
    });
  };
};

