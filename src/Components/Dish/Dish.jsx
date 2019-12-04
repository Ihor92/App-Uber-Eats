import React from "react";
import "./Dish.css";

export function Dish({ section, restaurant }) {
  return section.itemUuids.map((item, i) => {
    let dishPhoto = restaurant.items[item].imageUrl;
    return (
      <li className="dishes-item dishes-item_wrap" key={i}>
        <div className="dishes-item__content">
          <h5 className="dishes-menu__subtitle">
            {restaurant.items[item].title}
          </h5>
          <span className="dishes-description">
            {restaurant.items[item].itemDescription}
          </span>
          <span className="dishes-price">
            {restaurant.items[item].price / 100 + " ₴"}
          </span>
        </div>

        {dishPhoto && (
          <div className="dishes-block__img">
            <img
              src={restaurant.items[item].imageUrl}
              alt=""
              className="dishes-img"
            />
          </div>
        )}
      </li>
    );
  });
}
