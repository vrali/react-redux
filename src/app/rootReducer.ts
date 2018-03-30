import { combineReducers, Reducer } from "redux";
import userReducer from "../user/reducers/userReducer";
import appReducer from "./reducers/appReducer";

export interface RootState {
  user: User;
}

export default combineReducers<RootState>({
  user: userReducer,
  app: appReducer
});
