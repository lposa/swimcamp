import React from "react";
import gold from "../images/Gold 1Small.png";
import silver from "../images/Silver 1Small.png";
import bronze from "../images/Bronze 1Bronze_Small.png";
import shell from "../images/Shell.png";
import dolphin from "../images/Dolphin.png";
import shark from "../images/Shark.png";
import frog from "../images/Frog.png";
import Modal from "./Modal";

function Achievements() {
  return (
    <div className="container">
      <div className="achievements-info">
        <p>
          Points total: 325 <br /> Rank: Shell <img src={shell} alt="frog" />
        </p>
        <Modal />
      </div>
      <div className="achievements-container">
        <div className="achievements-content">
          <div className="front-content">
            <img src={gold} alt="gtrophy" />
          </div>

          <div className="back-content">
            <p>
              +100 points <br /> Race goal!
            </p>
          </div>
        </div>

        <div className="achievements-content">
          <div className="front-content">
            <img src={silver} alt="gtrophy" />
          </div>

          <div className="back-content">
            <p>
              +75 points <br /> Technique goal!
            </p>
          </div>
        </div>

        <div className="achievements-content">
          <div className="front-content">
            <img src={bronze} alt="gtrophy" />
          </div>

          <div className="back-content">
            <p>
              +50 points <br /> Practice goal!
            </p>
          </div>
        </div>

        <div className="achievements-content">
          <div className="front-content">
            <img src={gold} alt="gtrophy" />
          </div>

          <div className="back-content">
            <p>
              +100 points <br /> Race goal!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
