import React from "react";
import "./Home.css";
import Product from "./Product";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

function Home() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className="home">
      <div className="home__container">
        <AutoplaySlider
          className="home__image"
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={5000}
        >
          <div
            className="home__img"
            data-src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_DE_Acquisition_FT_July2020/4830d4e4-65cf-4d28-b19e-9056442e955a._UR3000,600_SX1500_FMwebp_.jpg"
          />
          <div
            className="home__img"
            data-src="https://m.media-amazon.com/images/G/01/digital/video/sonata/DE_Big_Bang_Theory_Boxsets/b8fbd132-3440-4750-9062-12124c2ad289._UR3000,600_SX1500_FMwebp_.jpg"
          />
          <div
            className="home__img"
            data-src="https://m.media-amazon.com/images/G/01/digital/video/sonata/DE_SVOD_Superhero_Evergreen_Lucifer_S5_REDNOCTA/fefc4485-914d-406e-a70b-9411955e54b4._UR3000,600_SX1500_FMwebp_.jpg"
          />
        </AutoplaySlider>

        <div className="home__row">
          <Product
            id="25256528"
            title="AOC gaming monitor black/red, Black 24 Inch"
            price={171.86}
            image="https://m.media-amazon.com/images/I/618Vke7SWSL._AC_UY218_.jpg"
            rating={5}
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
            id="35356910"
            title="UMI Gaming Chair Office Chair with Footrests Gamer Swivel Chair Height-Adjustable Gaming Chair PC Chair Ergonomic Executive Chair with Armrests"
            price={169.99}
            image="https://m.media-amazon.com/images/I/61meDRZr-JL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="23568932"
            title="Sennheiser GSP 350 Closed Gaming Headphones, Black / Red"
            price={107.99}
            image="https://m.media-amazon.com/images/I/61GJN08rP8L._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="321456987"
            title="Razer DeathAdder Elite Gaming Mouse"
            price={59.99}
            image="https://m.media-amazon.com/images/I/51WE8KYgczL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">{/*producto*/}</div>
      </div>
    </div>
  );
}
export default Home;
