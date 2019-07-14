import React from "react";
import "./RestaurantsCards.css";
import { Card } from "../Card/Card.jsx";
import { restaurants } from "../Data.jsx";

export function RestaurantsCards(props) {
  return (
    <div className="restaurant">
      <ul className="restaurants-cards">
        {restaurants.map((restaurant, i) => {
          return (
            <Card
              key={i}
              title={restaurant.title}
              categories={restaurant.categories}
              priceBucket={restaurant.priceBucket}
              etaRange={restaurant.etaRange}
              imageUrl={restaurant.imageUrl}
            />
          );
        })}
      </ul>
    </div>
  );
}
