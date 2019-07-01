import React from 'react';
import './content.css';

import {Search} from './search/content-search';
import {RestaurantsCards} from './RestaurantsCards/RestaurantsCards';


export function Content() {
  return (
    <div className="content">
      <div className="content__wrap">
        <Search />

        <h1 className="content-title">Kyiv Restaurants</h1>
        <div className="restaurant">
          
        <RestaurantsCards />

        </div>
      </div>
    </div>
  )
}