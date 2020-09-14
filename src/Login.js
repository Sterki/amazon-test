import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./login.css";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";
import { obtieneUsuarioAuthAction } from "./actions/userAction";
import { useDispatch } from "react-redux";

function Login() {
  const history = useHistory();

  const [email, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //aqui vamos a ejecutar firebase para poder realizar el login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://images-eu.ssl-images-amazon.com/images/G/03/misc/xsite/logos/a.de_logo_RGB_online_weiss._CB485936565_.gif"
        />
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="login__container">
          <div className="login__input">
            <h2>Sign In</h2>
          </div>

          {/* <div className="login__input">
            <label>Name</label>
            <input
              className="login__inputform"
              type="text"
              name="name"
              placeholder="Type your Name"
            />
          </div> */}
          <div className="login__input">
            <label>Email</label>
            <input
              className="login__inputform"
              type="text"
              name="email"
              placeholder="Type your Email"
              value={email}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="login__input">
            <label>Password</label>
            <input
              className="login__inputform"
              type="password"
              name="password"
              placeholder="Type your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login__input">
            <button className="login__button">Sign In</button>
          </div>
          {/* <div className="login__input">
            <label>Confirm</label>
            <input
              className="login__inputform"
              type="password"
              name="confirm"
              placeholder="Type your Confirm"
            />
          </div> */}
          <div className="login__input">
            <p>
              By creating an account you agree to Amazon's Conditions of Use &
              Sale. Please see our Privacy Notice, our Cookies Notice and our
              Interest-Based Ads Notice.{" "}
            </p>
          </div>
          <div className="login__input">
            <Link to="/register">
              <button className="register__button">
                Create your Amazon Account
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
