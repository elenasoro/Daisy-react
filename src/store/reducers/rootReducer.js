import { combineReducers } from 'redux';
import { reducer as fetchReducer } from 'react-redux-fetch';
import { usersReducer } from '../reducers/usersReducer';
import { newUserReducer } from '../reducers/newUserReducer';

const rootReducer = combineReducers({
    usersReducer: usersReducer,
    newUserReducer: newUserReducer,
    repository: fetchReducer,
});
   
export default rootReducer;
