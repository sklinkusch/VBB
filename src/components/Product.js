import React from "react";
import train from "../images/express.svg";
import regional from "../images/regional.svg";
import suburban from "../images/suburban.svg";
import subway from "../images/subway.svg";
import metrotram from "../images/metro-tram.svg";
import tram from "../images/tram.svg";
import metrobus from "../images/metro-bus.svg";
import expressbus from "../images/express-bus.svg";
import bus from "../images/bus.svg";
import specialbus from "../images/special-bus.svg";
import nightbus from "../images/night-bus.svg";
import ferry from "../images/ferry.svg";
import "../styles/Product.scss";

const Product = props => {
  const { line } = props;
  const { express, metro, name, night, product } = line;
  switch (product) {
    case "express":
      return (
        <div className="mean col-md-1 col-2">
          <img src={train} alt="express" />
        </div>
      );
    case "regional":
      return (
        <div className="mean col-md-1 col-2">
          <img src={regional} alt="regional" />
        </div>
      );
    case "suburban":
      return (
        <div className="mean col-md-1 col-2">
          <img src={suburban} alt="suburban" />
        </div>
      );
    case "subway":
      return (
        <div className="mean col-md-1 col-2">
          <img src={subway} alt="subway" />
        </div>
      );
    case "tram":
      return metro ? (
        <div className="mean col-md-1 col-2">
          <img src={metrotram} alt="metro-tram" />
        </div>
      ) : (
        <div className="mean col-md-1 col-2">
          <img src={tram} alt="tram" />
        </div>
      );
    case "bus":
      return express ? (
        <div className="mean col-md-1 col-2">
          <img src={expressbus} alt="express-bus" />
        </div>
      ) : metro ? (
        <div className="mean col-md-1 col-2">
          <img src={metrobus} alt="metro-bus" />
        </div>
      ) : night ? (
        <div className="mean col-md-1 col-2">
          <img src={nightbus} alt="night-bus" />
        </div>
      ) : name === "A05" ? (
        <div className="mean col-md-1 col-2">
          <img src={specialbus} alt="special-bus" />
        </div>
      ) : (
        <div className="mean col-md-1 col-2">
          <img src={bus} alt="bus" />
        </div>
      );
    case "ferry":
      return (
        <div className="mean col-md-1 col-2">
          <img src={ferry} alt="ferry" />
        </div>
      );
    default:
      return (
        <div className="mean col-md-1 col-2">
          <img src={bus} alt="bus" />
        </div>
      );
  }
};

export default Product;
