import React, { useState } from "react";
import "./register.css";
import "./login.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const { name, email, password, confirm } = info;
  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //aqui procedemos a crear nuestro usuario con firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //succesfully create a new user with email and password
        console.log(auth);
        history.push("/");
      })
      .catch((error) => alert(error.message));

    // return auth.updateCurrentUser({
    //   displayName: name,
    // });
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
            <h2>Create Amazon Account</h2>
          </div>

          <div className="login__input">
            <label>Name</label>
            <input
              className="login__inputform"
              type="text"
              name="name"
              placeholder="Type your Name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="login__input">
            <label>Email</label>
            <input
              className="login__inputform"
              type="text"
              name="email"
              placeholder="Type your Email"
              value={email}
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>

          <div className="login__input">
            <label>Confirm</label>
            <input
              className="login__inputform"
              type="password"
              name="confirm"
              placeholder="Type your Confirm"
              value={confirm}
              onChange={handleChange}
            />
          </div>
          <div className="login__input">
            <button className="login__button">Create an Amazon Account</button>
          </div>
          <div className="login__input">
            <p>
              By creating an account you agree to Amazon's Conditions of Use &
              Sale. Please see our Privacy Notice, our Cookies Notice and our
              Interest-Based Ads Notice.{" "}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
