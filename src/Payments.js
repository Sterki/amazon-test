import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./basketItem.css";
import "./payment.css";
import CheckoutProduct from "./ChekoutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { useHistory } from "react-router-dom";
import { EmptyBasketAction } from "./actions/productAction";
import { db } from "./firebase";

function Payments() {
  const basket = useSelector((state) => state.basket.basketCase);
  const user = useSelector((state) => state.user.userloged);
  const dispatch = useDispatch();
  const stripe = useStripe();
  const element = useElements();
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const history = useHistory();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // stripes expect the total in a currency submits
        url: `/payments/create?total=${total * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log("the secret is >>>>>", clientSecret);
  const handleSubmit = async (e) => {
    // here will go the fancy code for stripes
    // and display any error as the cutomer types their card details
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: element.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentintent = payment confimaction

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch(EmptyBasketAction());
        history.replace("/orders");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  let total = 0;
  for (let i = 0; i < basket.length; i++) {
    total += basket[i].price;
  }
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payments">
      <div className="payments__titleCheckout">
        <h1>Checkout ({basket.length} items)</h1>
      </div>

      <div className="payments__container">
        <div className="payments__section">
          <div className="payments__title">
            <h2>Delivery Address</h2>
          </div>

          <div className="payments__address">
            <p>Hello: {user?.email}</p>
            <p>123 react js</p>
            <p>Germany, DE</p>
          </div>
        </div>
        <div className="payments__section">
          <div className="payments__title">
            <h2>Review items and delivery</h2>
          </div>

          <div className="payments__address">
            {basket.map((item) => (
              <CheckoutProduct key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="payments__section">
          <div className="payments__title">
            <h2>Payments Details</h2>
          </div>
          <div className="payments__address">
            {/* Stripe magic will go here */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payments__price">
                <CurrencyFormat
                  renderText={(value) => <h3>Order total: {value}</h3>}
                  decimalScale={2}
                  value={total}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button
                  className="payment__button"
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                </button>
              </div>
              {/* Error */}
              {error ? <div>{error}</div> : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
