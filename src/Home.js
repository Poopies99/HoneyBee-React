import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/6125q8xd30L._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD) - Space Grey"
            price={2999.00}
            rating={5}
            image="/images/macbook.png"
            quantity={1}
          />
          <Product
            id="49538094"
            title="DJI Mini 2 – Ultralight and Foldable Drone Quadcopter, 3-Axis Gimbal with 4K Camera, 12MP Photo, 31 Mins Flight Time, OcuSync 2.0 10km HD Video Transmission, QuickShots, Gray"
            price={1089.00}
            rating={4}
            image="/images/DJI.png"
            quantity={1}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Fitbit Charge 4 Activity Tracker, Granite, Refl/Black (S &L Bands Included)"
            price={199.99}
            rating={3}
            image="/images/FitBit.png"
            quantity={1}
          />
          <Product
            id="23445930"
            title="Hibiki Japanese Harmony, 700ml"
            price={163.98}
            rating={4}
            image="/images/hibiki.png"
            quantity={1}
          />
          <Product 
            id="3254354345"
            title="Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP785/ipad-pro-12-2018.png"
            quantity={1}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung 34-Inch CJ791 Thunderbolt 3 Curved QLED Widescreen Monitor (LC34J791WTNXZA)"
            price={1094.63}
            rating={4}
            image="/images/monitor.png"
            quantity={1}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;