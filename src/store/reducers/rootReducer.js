import { ACTION_CHANGE_USERS_LIST } from '../actionHandlers';

import { combineReducers } from 'redux';
import { reducer as fetchReducer } from 'react-redux-fetch';

import { usersReducer } from '../reducers/usersReducer';




const rootReducer = combineReducers({
    usersReducer: usersReducer,
    // ... other reducers
    repository: fetchReducer,
});
   
export default rootReducer;

// export const usersReducer = (state = initialState, action) => {
//     switch (action.type){

//       case ACTION_CHANGE_USERS_LIST:
//           return {...state, users: action.payload, isLoaded:true};
  
//     //   case ACTION_CHANGE_SECOND_NAME:
//     //       return {...state, secondName: action.payload};
//     }
//     return state;
//   };