import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/gateway/launch/CTA_TEST/THEBOYSS2/THBY_S2_GWBleedingHero_P_COVIDUPDATE_XSite_1500x600_PV_de-DE._CB404811843_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="23568912"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://m.media-amazon.com/images/I/510AO7UjVPL._AC_UY218_.jpg"
            rating={3}
          />
          <Product
            id="23568932"
            title="Fighting Stick für PS3, PS4 PXN 0082 Arcade Fight Stick with USB PC Street Fighter Arcade Game Fight Joystick"
            price={39.99}
            image="https://m.media-amazon.com/images/I/419djIc9VNL._AC_SL260_.jpg"
            rating={5}
          />
          {/*producto*/}
        </div>
        <div className="home__row">
          <Product
            id="23568912"
            title="The lean Starup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/510AO7UjVPL._AC_UY218_.jpg"
            rating={3}
          />
          <Product
            id="23568932"
            title="The lean Starup"
            price={39.99}
            image="https://m.media-amazon.com/images/I/419djIc9VNL._AC_SL260_.jpg"
            rating={5}
          />
          <Product
            id="23568912"
            title="The lean Starup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/510AO7UjVPL._AC_UY218_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="23568912"
            title="The lean Starup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/510AO7UjVPL._AC_UY218_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">{/*producto*/}</div>
      </div>
    </div>
  );
}
export default Home;
