import React from "react";
import express from "../images/express.svg";
import regional from "../images/regional.svg";
import suburban from "../images/suburban.svg";
import subway from "../images/subway.svg";
import metrotram from "../images/metro-tram.svg";
import tram from "../images/tram.svg";
import metrobus from "../images/metro-bus.svg";
import expressbus from "../images/express-bus.svg";
import bus from "../images/bus.svg";
import specialbus from "../images/special-bus.svg";
import ferry from "../images/ferry.svg";
import "../styles/Product.scss";

const Product = props => {
  const { product, line } = props;
  switch (product) {
    case "express":
      return (
        <div className="mean col-md-1 col-2">
          <img src={express} alt="express" />
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
      if (line.startsWith("M")) {
        return (
          <div className="mean col-md-1 col-2">
            <img src={metrotram} alt="metro-tram" />
          </div>
        );
      }
      return (
        <div className="mean col-md-1 col-2">
          <img src={tram} alt="tram" />
        </div>
      );
    case "bus":
      if (line.startsWith("M")) {
        return (
          <div className="mean col-md-1 col-2">
            <img src={metrobus} alt="metro-bus" />
          </div>
        );
      }
      if (line === "TXL" || line.startsWith("X")) {
        return (
          <div className="mean col-md-1 col-2">
            <img src={expressbus} alt="express-bus" />
          </div>
        );
      }
      if (line === "A05") {
        return (
          <div className="mean col-md-1 col-2">
            <img src={specialbus} alt="special-bus" />
          </div>
        );
      }
      return (
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
