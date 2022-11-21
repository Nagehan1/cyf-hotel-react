import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import "./App.css";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />

      <Bookings />
      <Restaurant />

      <Footer />
    </div>
  );
};

export default App;
