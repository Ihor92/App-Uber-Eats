import React from "react";

import "./RestaurantsCards.css";
import Card from "../Card/Card.jsx";

export function RestaurantsCards(props) {
  const arr = [1, 2, 3, 4, 5, 6];
  const { restaurants, isLoaded, hasItems } = props;

  const noLoadedData = <p> Что-то пошло не так!</p>;
  const noFilterData = <p> По вашему запросу ничего не найдено </p>;

  return (
    <>
      {!isLoaded && (
        <div className="restaurant-waiting__wrap">
          {arr.map(item => (
            <div className="restaurant-waiting" key={item}></div>
          ))}
        </div>
      )}

      {isLoaded && !hasItems && noLoadedData}
      {isLoaded && hasItems && restaurants.length === 0 && noFilterData}

      {isLoaded && (
        <div className="restaurant">
          <ul className="restaurants-cards">
            {restaurants.map(({ uuid, ...otherPorps }) => (
              <Card key={uuid} id={uuid} restaurant={otherPorps} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
