import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  GET_PRODUCT_TO_DELETE,
  EMPTY_BASKET,
} from "./../types/index";

export function addToBasketAction(items) {
  return (dispatch) => {
    dispatch(addToBasket(items));
  };
}
const addToBasket = (items) => ({
  type: ADD_TO_BASKET,
  payload: items,
});

export function getProductToDeleteAction(product) {
  return (dispatch) => {
    dispatch(getProductoToDelete(product));
  };
}

const getProductoToDelete = (product) => ({
  type: GET_PRODUCT_TO_DELETE,
  payload: product,
});

export function removeProductAction(id) {
  return (dispatch) => {
    dispatch(removeProduct(id));
  };
}
const removeProduct = (id) => ({
  type: REMOVE_FROM_BASKET,
  payload: id,
});

export function EmptyBasketAction() {
  return (dispatch) => {
    dispatch(empyBasket());
  };
}
const empyBasket = () => ({
  type: EMPTY_BASKET,
});
