import React from "react";
import "./RestaurantPage.css";

import { HeaderCard } from "../HeaderCard/HeaderCard";
import { NavigationOfDishes } from "../NavigationOfDishes/NavigationOfDishes";
import { Dishes } from "../Dishes/Dishes";

export function RestaurantPage() {
  return (
    <>
      <HeaderCard />
      <NavigationOfDishes />
      <Dishes />
    </>
  );
}
