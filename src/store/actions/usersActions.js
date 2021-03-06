import Axios from 'axios';
import { ACTION_CHANGE_USERS_LIST } from './actionHandlers';


export function changeUsersListSuccess(users) {
  return {
    type: ACTION_CHANGE_USERS_LIST,
    users,
  };
}

export function changeUsersList(url) {
  return (dispatch) => {
    // fetch(url)
    //   .then(response => {
    //     if(!response.ok){
    //       throw new Error(response.statusText)
    //     }
    //     return response;
    //   })
    //   .then(response => response.json())
    //   .then(users => dispatch(changeUsersListSuccess(users)))

    Axios.get(url)
      .then((res) => {
        const users = res.data;
        dispatch(changeUsersListSuccess(users));
      });
  };
}
