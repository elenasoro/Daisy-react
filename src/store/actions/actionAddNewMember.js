import { ADD_NEW_MEMBER } from './actionHandlers';

export default function addNewMember(name, age, facebookLink, twitterLink, linkedinLink) {
  return {
    type: ADD_NEW_MEMBER,
    payload: {
      name,
      age,
      facebook: facebookLink,
      twitter: twitterLink,
      linkedin: linkedinLink,
    },
  };
}

// export default addNewMember;
