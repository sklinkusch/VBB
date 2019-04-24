import React, { Component } from "react";
import express from "../images/express.svg";
import regional from "../images/regional.svg";
import suburban from "../images/suburban.svg";
import subway from "../images/subway.svg";
import metrotram from "../images/metro-tram.svg";
import tram from "../images/tram.svg";
import metrobus from "../images/metro-bus.svg";
import expressbus from "../images/express-bus.svg";
import bus from "../images/bus.svg";
import ferry from "../images/ferry.svg";
import "../styles/Product.css";

export default class Product extends Component {
  render() {
    const product = this.props.product;
    const line = this.props.line;
    switch (product) {
      case "express":
        return (
          <div className="mean">
            <img src={express} alt="express" />
          </div>
        );
      case "regional":
        return (
          <div className="mean">
            <img src={regional} alt="regional" />
          </div>
        );
      case "suburban":
        return (
          <div className="mean">
            <img src={suburban} alt="suburban" />
          </div>
        );
      case "subway":
        return (
          <div className="mean">
            <img src={subway} alt="subway" />
          </div>
        );
      case "tram":
        if (line.startsWith("M")) {
          return (
            <div className="mean">
              <img src={metrotram} alt="metro-tram" />
            </div>
          );
        }
        return (
          <div className="mean">
            <img src={tram} alt="tram" />
          </div>
        );
      case "bus":
        if (line.startsWith("M")) {
          return (
            <div className="mean">
              <img src={metrobus} alt="metro-bus" />
            </div>
          );
        }
        if (line === "TXL" || line.startsWith("X")) {
          return (
            <div className="mean">
              <img src={expressbus} alt="express-bus" />
            </div>
          );
        }
        return (
          <div className="mean">
            <img src={bus} alt="bus" />
          </div>
        );
      case "ferry":
        return (
          <div className="mean">
            <img src={ferry} alt="ferry" />
          </div>
        );
      default:
        return (
          <div className="mean">
            <img src={bus} alt="bus" />
          </div>
        );
    }
  }
}
