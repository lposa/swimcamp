import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div
        style={{
          alignSelf: "flex-end",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "12px",
          }}
        >
          powered by pox development
        </p>
      </div>
      <div
        style={{
          fontSize: "2rem",
          color: "#009ffd",
          marginLeft: "0",
        }}
      >
        <Link>
          <i className="fab fa-instagram px-3"></i>
        </Link>
        <Link>
          <i className="fab fa-facebook-square"></i>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
