import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const product = this.props.product;
    switch (product) {
      case "express":
      case "regional":
        return (
          <div className="mean">
            <span className="fas fa-train" />
          </div>
        );
      case "suburban":
      case "subway":
        return (
          <div className="mean">
            <span className="fas fa-subway" />
          </div>
        );
      case "tram":
        return (
          <div className="mean">
            <span className="fas fa-tram" />
          </div>
        );
      case "bus":
        return (
          <div className="mean">
            <span className="fas fa-bus" />
          </div>
        );
      case "ferry":
        return (
          <div className="mean">
            <span className="fas fa-ship" />
          </div>
        );
      default:
        return (
          <div className="mean">
            <span className="fas fa-bus" />
          </div>
        );
    }
  }
}
