import { ADD_NEW_MEMBER } from '../actions/actionHandlers';


const initialState = {
  newMember: {
    name: '',
    age: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
};

function newMemberReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_MEMBER:
      return {
        ...state,
        newMember: action.payload,
      };
    default:
      return state;
  }
}

export default newMemberReducer;
