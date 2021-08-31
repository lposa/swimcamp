import React from "react";

function Card({ practice }) {
  return (
    <div className="container card-container">
      <div className="card-practices">
        <h3>{practice.title}</h3>
        <p>{practice.type}</p>
        <p>{practice.date}</p>
        <p style={{ whiteSpace: "pre-line" }}>{practice.practice}</p>
        <button>See how I did</button>
      </div>
    </div>
  );
}

export default Card;
