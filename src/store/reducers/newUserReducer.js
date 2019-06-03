import { SAVE_USER_DATA } from '../actions/actionHandlers';


const initialState = {
  newUser: {
    name: 'unknown',
    email: 'unknown',
    phone: 'unknown',
  },
};

function newUserReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER_DATA:
      return {
        ...state,
        newUser: action.payload,
      };
    default:
      return state;
  }
}

export default newUserReducer;
