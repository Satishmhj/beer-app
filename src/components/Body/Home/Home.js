import React from "react";
import "../Home/home.css";

const Home = () => {

  return (
    <>
      <div class="banner">
        <div class="banner-text">
          <p>
              <p className="display-3 text-black">Welcome to HangOver </p>
            <b className="display-6 text-black">
              "You can't buy happiness, but beer comes pretty close"
              <br />
            </b>
            <div className="d-flex justify-content-center">
              <button class="btn btn-primary">Learn More</button>
            </div>
          </p>
        </div>
        <div class="banner-img">
          {/* <img src="./assets/images/slider-img.png" alt="hero-background" /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
