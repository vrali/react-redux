import { combineReducers, Reducer } from 'redux';
import accountReducer from '../account/reducers/accountReducer';
import appReducer from "./reducers/appReducer"

export interface RootState {
  account : Auth;
}

export default combineReducers<RootState>({
  account : accountReducer,
  app : appReducer
});
