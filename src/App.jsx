import React from 'react';
import {Header} from "./header/header";
import {Content} from './content/content';
import {Footer} from './footer/footer.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {RestaurantPage} from './restaurantPage/restaurantPage';

function App() {
  return (
    <>
      <Header />

      <Router>
        <Route path='./content/content' exact component={Content}/>
        <Route path='./restaurantPage/restaurantPage' component={RestaurantPage}/>
      </Router>

      <Footer />
    </>
  );
}

export default App;