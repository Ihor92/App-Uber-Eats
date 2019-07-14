import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export function Card(props) {
  return (
    <li className="card">
      <Link to="/restaurant">
        <img
          className="card__img"
          src={props.imageUrl}
          alt="Food in restaurant"
        />
      </Link>

      <span className="card__name card__name_uppercaset">{props.title}</span>
      <span className="card__kitchen">
        {props.priceBucket} •{" "}
        {props.categories.map(category => {
          return category.keyName + " • ";
        })}
      </span>

      <span className="card__delivery">
        {props.etaRange.min} - {props.etaRange.max} Min
      </span>
    </li>
  );
}
