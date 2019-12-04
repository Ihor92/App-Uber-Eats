import React, { Component } from "react";
import "./MainPage.css";

import { Search } from "../Search/Search";
import { RestaurantsCards } from "../RestaurantsCards/RestaurantsCards";

export class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      restaurants: []
    };
  }

  componentDidMount() {
    fetch("https://uber-eats-mates.herokuapp.com/api/v1/restaurants")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            restaurants: result
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
    const { isLoaded, restaurants } = this.state;
    return (
      <div className="main-page">
        <div className="main-page_wrap">
          <Search />

          <h1 className="main-page__title">Kyiv Restaurants</h1>

          <RestaurantsCards restaurants={restaurants} isLoaded={isLoaded} />
        </div>
      </div>
    );
  }
}
