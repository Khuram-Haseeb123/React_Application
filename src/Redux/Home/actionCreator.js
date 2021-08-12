import { types } from './types';




const signup = data => {
  return {
    type: types.SIGNUP_REQUEST,
    payload: data,
  };
};




export {

  signup,

};