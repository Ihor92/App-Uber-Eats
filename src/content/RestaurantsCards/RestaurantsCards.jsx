import React from "react";
import "./RestaurantsCards.css";
import { Card } from "./Card/card";
import { restaurants } from "../data";

export function RestaurantsCards(props) {
  return (
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
  );
}
