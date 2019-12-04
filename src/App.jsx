import React from "react";
import { Header } from "./Components/Header/Header";
import { MainPage } from "./Components/MainPage/MainPage";
import { RestaurantPage } from "./Components/RestaurantPage/RestaurantPage";
import { Footer } from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route path="/" exact component={MainPage} />
        <Route path="/:id" component={RestaurantPage} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
