import React from "react";
import "./checkproduct.css";

import {
  getProductToDeleteAction,
  removeProductAction,
} from "./actions/productAction";
import { useDispatch, useSelector } from "react-redux";

function ChekoutProduct({ item }) {
  const dispatch = useDispatch();
  const { title, price, rating, image, hideButton } = item;

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
      <img className="checkoutprocuct__img" src={image} alt="" />
      <div className="basket__buttonremove">
        {hideButton && (
          <button
            className="button__remove"
            onClick={() => productToDelete(item)}
          >
            Remove from basket
          </button>
        )}
      </div>
    </div>
  );
}

export default ChekoutProduct;
