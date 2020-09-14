import React from "react";
import "./product.css";
import { addToBasketAction } from "./actions/productAction";
import { useDispatch, useSelector } from "react-redux";

function Product({ id, title, image, price, rating }) {
  const dispatch = useDispatch();
  const items = {
    id: id,
    title: title,
    image: image,
    price: price,
    rating: rating,
  };

  const addToBasket = (items) => {
    dispatch(addToBasketAction(items));
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={() => addToBasket(items)}>Add to basket</button>
    </div>
  );
}

export default Product;
