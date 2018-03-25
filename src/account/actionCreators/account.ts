import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

export const login = createAction<LoginPayLoad>(Actions.LOGIN);

export interface LoginPayLoad{
    isAuthenticated : boolean,
  claims? : {
    isAdmin : boolean
  },
}