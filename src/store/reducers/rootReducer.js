import { combineReducers } from 'redux';
import { reducer as fetchReducer } from 'react-redux-fetch';
import usersReducer from './usersReducer';
import newUserReducer from './newUserReducer';
import newMemberReducer from './addNewMemberReducer';

const rootReducer = combineReducers({
  usersReducer,
  newUserReducer,
  newMemberReducer,
  repository: fetchReducer,
});

export default rootReducer;
