import React from "react";
import { Header } from "./header/header";
import { Content } from "./content/content";
import { Footer } from "./footer/footer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RestaurantPage } from "./restaurantPage/restaurantPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route path="/" exact component={Content} />
        <Route path="/restaurant" component={RestaurantPage} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
