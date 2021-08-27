import React from "react";
import somi from "../images/radisic.jpg";

function CoachFeedback() {
  return (
    <div className="container">
      <div className="feedback-container">
        <img
          src={somi}
          alt="somi"
          style={{ borderRadius: "50%", margin: "10px 10px" }}
        />

        <div className="feedback-container-quote">
          <i class="fas fa-quote-left"></i>
          <p>
            Leonard is one amazing athlete and a human being. He exelled in
            every aspect during this camp. He improved a lot, especially in his
            technique. He is also a great team leader and worthy of being the
            team captain. Others should look up to him.{" "}
          </p>
          <i class="fas fa-quote-right"></i>
        </div>
      </div>
    </div>
  );
}

export default CoachFeedback;
