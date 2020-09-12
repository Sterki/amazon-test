import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const basket = useSelector((state) => state.basket.basket);

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://images-eu.ssl-images-amazon.com/images/G/03/misc/xsite/logos/a.de_logo_RGB_online_schwarz.jpg"
        />
      </Link>
      <div className="header__search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOn">Hellow Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOn">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOn">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">
            {basket.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
