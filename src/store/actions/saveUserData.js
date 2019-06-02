import { SAVE_USER_DATA } from './actionHandlers';


export function saveUserData(name, email, phone){
  return {
    type: SAVE_USER_DATA,
    payload: {
        name: name, 
        email: email,
        phone: phone
    }
  }
}

