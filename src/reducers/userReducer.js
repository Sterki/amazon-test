import { GET_USER_AUTH, CLOSE_SESION } from "./../types/index";

const inisialState = {
  userloged: null,
};
export default (state = inisialState, action) => {
  switch (action.type) {
    case GET_USER_AUTH:
      return {
        ...state,
        userloged: action.payload,
      };
    case CLOSE_SESION:
      return {
        ...state,
        userloged: null,
      };
    default:
      return state;
  }
};
