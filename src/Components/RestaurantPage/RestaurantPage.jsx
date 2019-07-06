import React from "react";
import "./RestaurantPage.css";

import { HeaderCard } from "../RestaurantPage/HeaderCard.jsx";
import { NavigationOfDishes } from "../RestaurantPage/NavigationOfDishes";
import { Dishes } from "../RestaurantPage/Dishes.jsx";

export function RestaurantPage() {
  return (
    <>
      <HeaderCard />
      <NavigationOfDishes />
      <Dishes />
    </>
  );
}
