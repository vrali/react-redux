import { combineReducers, Reducer } from 'redux';
import accountReducer from '../account/reducers/accountReducer';
import appReducer from "./reducers/appReducer"

export interface RootState {
  account : AuthState;
}

export default combineReducers<RootState>({
  account : accountReducer,
  app : appReducer
});