import React from "react";
import "./Dish.css";
import { restaurants } from "../InfoCard.js";

export function Dish({ section }) {
  return section.itemUuids.map((item, i) => {
    let dishPhoto = restaurants.items[item].imageUrl;
    return (
      <>
        <li className="dishes-item dishes-item_wrap" key={i}>
          <div className="dishes-item__content">
            <h5 className="dishes-menu__subtitle">
              {restaurants.items[item].title}
            </h5>
            <span className="dishes-description">
              {restaurants.items[item].itemDescription}
            </span>
            <span className="dishes-price">
              {restaurants.items[item].price / 100 + " ₴"}
            </span>
          </div>

          {dishPhoto && (
            <div className="dishes-block__img">
              <img
                src={restaurants.items[item].imageUrl}
                alt=""
                className="dishes-img"
              />
            </div>
          )}
        </li>
      </>
    );
  });
}
