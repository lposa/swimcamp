import React from "react";
import somi from "../images/radisic.jpg";

function CoachFeedback() {
  return (
    <div className="container feedback">
      <div className="feedback-container">
        <img
          src={somi}
          alt="somi"
          style={{ borderRadius: "50%", margin: "10px 10px" }}
        />

        <div className="feedback-container-quote">
          <i class="fas fa-quote-left"></i>
          <p className="feedback-text">
            Leonard is one amazing athlete and a human being. He exelled in
            every aspect during this camp. He improved a lot, especially in his
            technique.
          </p>
          <i class="fas fa-quote-right"></i>
        </div>
      </div>
    </div>
  );
}

export default CoachFeedback;
