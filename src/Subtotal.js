import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { history, useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const basket = useSelector((state) => state.basket.basketCase);

  let total = 0;
  for (let i = 0; i < basket.length; i++) {
    total += basket[i].price;
  }
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={total}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={() => history.push("/payments")}>
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
