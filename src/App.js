import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import store from "./store";
import { Provider, useSelector, useDispatch } from "react-redux";
import Login from "./Login";
import Register from "./Register";
import { auth } from "./firebase";
import { obtieneUsuarioAuthAction } from "./actions/userAction";
import Payments from "./Payments";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
const promise = loadStripe(
  "pk_test_51HSNCfBzzhlp7ugouT577pZjBSu7BucHFT7Ixrba99VprhrKr2jtGaB8bKcngPBppRsHdUMSGRp6xjizkEInuWZh00EOL57yu5"
);
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>", authUser);

      if (authUser) {
        //that means that the user logged in   // the user was logged in
        dispatch(obtieneUsuarioAuthAction(authUser));
      } else {
        // the user is logged out
        // dispatch(obtieneUsuarioAuthAction(null));
      }
    });
  }, []);

  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/payments">
              <Header />
              <Elements stripe={promise}>
                <Payments />
              </Elements>
            </Route>
            <Route path="/orders">
              <Header />
              <Orders />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default AppWrapper;
