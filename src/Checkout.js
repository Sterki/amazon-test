import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/03/videogames/650._CB428445247_.jpg"
          alt=""
        />
        <div className="checkout_title">
          <h2>Your Shoping Basket</h2>
          {/**BasketItem */}
          {/**BasketItem */}
          {/**BasketItem */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
