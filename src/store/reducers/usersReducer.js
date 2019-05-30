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

// export const usersReducer = (state = initialState, action) => {
//     switch (action.type){

//       case ACTION_CHANGE_USERS_LIST:
//           return {...state, users: action.users};
  
    //   case ACTION_CHANGE_SECOND_NAME:
    //       return {...state, secondName: action.payload};
  //   }
  //   return state;
  // };

