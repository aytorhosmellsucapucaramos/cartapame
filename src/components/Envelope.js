import React from "react";
import "./Envelope.css";

const Envelope = ({ isOpen }) => {
  return (
    <div className={`envelope ${isOpen ? "opening" : ""}`}>
      <div className="envelope-body">
        <div className="wax-seal">
          <span className="seal-text">❤</span>
        </div>
      </div>
      <div className="flap"></div>
      <div className="envelope-shadow"></div>
    </div>
  );
};

export default Envelope;
