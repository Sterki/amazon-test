import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";
import { useSelector } from "react-redux";
import BasketItem from "./BasketItem";

function Checkout() {
  const basket = useSelector((state) => state.basket.basketCase);

  const user = useSelector((state) => state.user.userloged);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/03/videogames/650._CB428445247_.jpg"
          alt=""
        />
        <div className="checkout_title">
          {user ? <h3>hello, {user.email}</h3> : null}
          <h2>Your Shoping Basket</h2>

          {basket.map((basket) => (
            <BasketItem key={basket.id} basket={basket} />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
