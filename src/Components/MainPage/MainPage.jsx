import React, { Component } from "react";
import "./MainPage.css";

import { Search } from "../Search/Search";
import { RestaurantsCards } from "../RestaurantsCards/RestaurantsCards";

export class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      restaurants: [],
      restaurantsFiltered: [],
      searchValue: ""
    };
  }

  componentDidMount() {
    fetch("https://uber-eats-mates.herokuapp.com/api/v1/restaurants")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            restaurants: result,
            restaurantsFiltered: result
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

  handleInputChange = event => {
    const restaurantsFiltered = this.state.restaurants.filter(restaurant =>
      restaurant.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.setState({ searchValue: event.target.value, restaurantsFiltered });
  };

  render() {
    const { isLoaded, restaurantsFiltered, searchValue } = this.state;
    return (
      <div className="main-page">
        <div className="main-page_wrap">
          <Search value={searchValue} onChange={this.handleInputChange} />

          <h1 className="main-page__title">Kyiv Restaurants</h1>

          <RestaurantsCards
            restaurants={restaurantsFiltered}
            isLoaded={isLoaded}
          />
        </div>
      </div>
    );
  }
}
