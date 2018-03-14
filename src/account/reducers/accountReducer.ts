import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';

const initialState: AuthState = {
    isAuthenticated : false,
    claims : {
        isAdmin : true
    }
};

export default handleActions<AuthState,any>({
  [Actions.LOGIN]: (state, action) => {
    return {
        isAuthenticated : true,
        claims : {
            isAdmin : false
        }
    };
  },
}, initialState);
