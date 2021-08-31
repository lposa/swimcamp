import React from "react";
import homeBackground from "../images/homepagebanner.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home-image-container">
        <div
          className="container explore-container"
          style={{ display: "inline", position: "absolute" }}
        >
          <div className="row " style={{ display: "grid" }}>
            <div id="home-heading" className="col">
              DIVE IN WITH US
            </div>
          </div>
          <div
            className="row justify-content-center "
            style={{ display: "grid" }}
          >
            <div className="col ">
              <button className="buttonHome btn">EXPLORE</button>
            </div>
          </div>
        </div>

        <img src={homeBackground} alt="home" className="img-fluid home-image" />
      </div>
      <Footer />
    </>
  );
}
