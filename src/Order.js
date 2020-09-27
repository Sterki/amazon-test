import React from "react";
import "./order.css";
import moment from "moment";
import CheckoutProduct from "./ChekoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>transaction code: {order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct key={item.id} item={item} hideButton />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
