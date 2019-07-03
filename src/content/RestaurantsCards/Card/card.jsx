import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

export function Card(props) {
  return (
    <li className="restaurant__card">
      <Link to="/restaurant">
        <img
          className="restaurant__img"
          src={props.imageUrl}
          alt="Food in restaurant"
        />
      </Link>

      <span className="restaurant__name restaurant__name-uppercaset">
        {props.title}
      </span>
      <span className="restaurant__kitchen">
        {props.priceBucket} • {" "}
        {props.categories.map(category => {
          return category.keyName + " • ";
        })}
      </span>

      <span className="restaurant__time-delivery">
        {props.etaRange.min} - {props.etaRange.max} Min
      </span>
    </li>
  );
}
