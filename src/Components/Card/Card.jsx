import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  const {
    restaurant: { imageUrl, title, priceBucket, categories, etaRange },
    id
  } = props;

  return (
    <li className="card">
      <Link to={`/${id}`}>
        <img className="card__img" src={imageUrl} alt="Food in restaurant" />
      </Link>

      <span className="card__name card__name_uppercaset">{title}</span>
      <span className="card__kitchen">
        {priceBucket}
        {categories.map(category => {
          return ` ${category.keyName} • `;
        })}
      </span>

      <span className="card__delivery">
        {etaRange.min} - {etaRange.max} Min
      </span>
    </li>
  );
}
