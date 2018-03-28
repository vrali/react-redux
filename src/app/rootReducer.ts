import { combineReducers, Reducer } from 'redux';
import accountReducer from '../account/reducers/accountReducer';
import appReducer from "./reducers/appReducer"

export interface RootState {
  auth : Auth;
}

export default combineReducers<RootState>({
  auth : accountReducer,
  app : appReducer
});
