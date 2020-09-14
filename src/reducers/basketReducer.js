import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  GET_PRODUCT_TO_DELETE,
} from "./../types/index";

const inisialState = {
  basketCase: [],
  producttoremove: null,
};

export default function (state = inisialState, action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basketCase: [...state.basketCase, action.payload],
      };
    case GET_PRODUCT_TO_DELETE:
      return {
        ...state,
        producttoremove: action.payload,
      };
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        basketCase: state.basketCase.filter(
          (basketcase) => basketcase.id !== state.producttoremove.id
        ),
      };
    default:
      return state;
  }
}
