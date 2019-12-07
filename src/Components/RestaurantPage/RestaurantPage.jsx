import React, { Component } from "react";
import "./RestaurantPage.css";

import { HeaderCard } from "../HeaderCard/HeaderCard";
import { NavigationOfDishes } from "../NavigationOfDishes/NavigationOfDishes";
import { Dishes } from "../Dishes/Dishes";

export class RestaurantPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      restaurant: null
    };
  }
  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    fetch(`https://uber-eats-mates.herokuapp.com/api/v1/restaurants/${id}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            restaurant: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { restaurant } = this.state;
    return (
      !!restaurant && (
        <>
          <HeaderCard restaurant={restaurant} />
          <NavigationOfDishes restaurant={restaurant} />
          <Dishes restaurant={restaurant} />
        </>
      )
    );
  }
}
