import { ADD_NEW_MEMBER } from './actionHandlers';


function addNewMember(name, age, facebook_link, twitter_link, linkedin_link) {
  return {
    type: ADD_NEW_MEMBER,
    payload: {
      name,
      age,
      facebook: facebook_link,
      twitter: twitter_link,
      linkedin: linkedin_link,
    },
  };
}

export default addNewMember;
