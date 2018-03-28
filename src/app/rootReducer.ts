import { combineReducers, Reducer } from "redux";
import loginReducer from "../user/reducers/loginReducer";
import appReducer from "./reducers/appReducer";

export interface RootState {
  user: User;
}

export default combineReducers<RootState>({
  user: loginReducer,
  app: appReducer
});
