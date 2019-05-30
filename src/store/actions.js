import { ACTION_CHANGE_USERS_LIST } from './actionHandlers';
import Axios from 'axios';


export function changeUsersListSuccess(users){
  return {
    type: ACTION_CHANGE_USERS_LIST,
    users: users
  }
}

export function changeUsersList(url){
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
      .then(res => {
        const users = res.data;
        dispatch(changeUsersListSuccess(users));
      })
      
  }
}


// export const changeUsersList = (users) => {
//     let newUsers = [];
//     Axios.get('https://randomuser.me/api/?results=5')
//     .then(function (response) {
//         newUsers = response.data.results; 
//         console.log(newUsers);
//     })
//     return {
      
//       type: ACTION_CHANGE_USERS_LIST,
//       users: newUsers
//     }
//   }

//  export const changeSecondName = (newSecondName) => {
//     return {
//       type: ACTION_CHANGE_SECOND_NAME,
//       payload: newSecondName
//     }
//   }

