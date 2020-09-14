import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import basketReducer from "./basketReducer";
import userReducer from "./userReducer";

export default combineReducers({
  products: productsReducer,
  basket: basketReducer,
  user: userReducer,
});
