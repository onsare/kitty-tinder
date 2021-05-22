import React from "react";

function Card({ picture }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${picture})` }}></div>
  );
}

export default Card;
