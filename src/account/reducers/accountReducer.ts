import { handleActions, Action } from 'redux-actions';
import * as Actions from '../constants/actions';

const initialState: Auth = {
    isAuthenticated : false,
    claims : {
        isAdmin : true
    }
};

export default handleActions<Auth,Auth>({
  [Actions.LOGIN_SUCCESS]: (state, action) => {
    return Object.assign({},action.payload);
  },
}, initialState);
