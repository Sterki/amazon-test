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

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

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
