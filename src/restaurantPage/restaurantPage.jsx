import React from "react";
import "./restaurantPage.css";

import { HeaderCard } from "./components/headerCard/headerCard";
import { NavigationOfDishes } from "./components/navigationOfDishes/navigationOfDishes";
import { Dishes } from "./components/dishes/dishes";
import { Footer } from "../footer/footer";

export function RestaurantPage() {
  return (
    <>
      <HeaderCard />
      <NavigationOfDishes />
      <Dishes />
    </>
  );
}
