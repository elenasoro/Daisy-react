import { ACTION_CHANGE_USERS_LIST } from '../actionHandlers';

import { combineReducers } from 'redux';
import { reducer as fetchReducer } from 'react-redux-fetch';

import { usersReducer } from '../reducers/usersReducer';




const rootReducer = combineReducers({
    usersReducer: usersReducer,
    repository: fetchReducer,
});
   
export default rootReducer;
