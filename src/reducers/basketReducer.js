import { ADD_TO_BASKET } from "./../types/index";

const inisialState = {
  basket: [],
};

export default function (state = inisialState, action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

    default:
      return state;
  }
}
