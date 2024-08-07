import React from "react";
import Footer from "../Footer/Footer";
import "../Home/home.css";
import Testimonials from "./Testimonial/Testimonials";

const Home = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-text">
          <p>
            <p className="display-3 text-black">Welcome to HangOver </p>
            <b className="display-6 text-black">
              "You can't buy happiness, but beer comes pretty close"
              <br />
            </b>
            <div className="d-flex pt-4"  style={{paddingLeft: "8em"}}>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </p>
        </div>
        <div className="banner-img">
          {/* <img src="./assets/images/slider-img.png" alt="hero-background" /> */}
        </div>
      </div>
      <Testimonials/>
      <Footer/>
    </>
  );
};

export default Home;
