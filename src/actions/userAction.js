import { GET_USER_AUTH, CLOSE_SESION } from "./../types/index";

export function obtieneUsuarioAuthAction(user) {
  return (dispatch) => {
    dispatch(getUserAuth(user));
  };
}
const getUserAuth = (user) => ({
  type: GET_USER_AUTH,
  payload: user,
});

export function closeSesionAction() {
  return (dispatch) => {
    dispatch(closeSesion());
  };
}

const closeSesion = () => ({
  type: CLOSE_SESION,
});
