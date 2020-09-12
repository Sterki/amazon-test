import { ADD_TO_BASKET } from "./../types/index";

export function addToBasketAction(items) {
  return (dispatch) => {
    dispatch(addToBasket(items));
  };
}
const addToBasket = (items) => ({
  type: ADD_TO_BASKET,
  payload: items,
});
