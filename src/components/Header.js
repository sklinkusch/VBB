import React from "react";
import stops from "../data/stops";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <h1>VBB departures</h1>
      <p className="rightpara">
        currently with data from {stops.length} stations and stops
      </p>
    </header>
  );
};

export default Header;
