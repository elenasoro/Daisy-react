import { ACTION_CHANGE_USERS_LIST } from '../actionHandlers';


const initialState = {
    users: []
  };

export function usersReducer(state = initialState, action){
  switch(action.type){
    case ACTION_CHANGE_USERS_LIST:
      return {
        ...state,
        users: action.users
      }
    default: 
      return state;
  }
}

