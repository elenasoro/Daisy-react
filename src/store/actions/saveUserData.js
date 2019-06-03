import { SAVE_USER_DATA } from './actionHandlers';


function saveUserData(name, email, phone) {
  return {
    type: SAVE_USER_DATA,
    payload: {
      name,
      email,
      phone,
    },
  };
}

export default saveUserData;
