import React from "react";
import "./style.scss";

const CircleRating = ({ rating }) => {
  return (
    <div className="circleRating">
      <span className="ratingValue">{rating}</span>
    </div>
  );
};

export default CircleRating;
