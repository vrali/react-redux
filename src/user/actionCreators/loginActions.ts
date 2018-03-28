import { createAction } from "redux-actions";
import * as Actions from "../constants/actions";
import thunk, { ThunkAction } from "redux-thunk";
import { Dispatch } from "redux";

export const loginSuccess = createAction<User>(Actions.LOGIN_SUCCESS);

export const login = (credentials: LoginPayLoad) => {
  return (dispatch: Dispatch<User>) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch(
          loginSuccess({
            isAuthenticated: true,
            claims: {
              isAdmin: false
            }
          } as User)
        );
        resolve();
      }, 1000);
    });
  };
};
