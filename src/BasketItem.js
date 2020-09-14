import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./basketItem.css";
import {
  getProductToDeleteAction,
  removeProductAction,
} from "./actions/productAction";



function BasketItem({ basket }) {
  const dispatch = useDispatch();

  const { title, price, rating, image } = basket;

  const productToDelete = (product) => {
    dispatch(getProductToDeleteAction(product));
    dispatch(removeProductAction(product.id));
  };

  return (
    <div className="basketitem">
      <div className="basketitem__info">
        <p>{title}</p>
        <p className="">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="basketitem__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <div className="basket__buttonremove">
        <button
          className="button__remove"
          onClick={() => productToDelete(basket)}
        >
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default BasketItem;
