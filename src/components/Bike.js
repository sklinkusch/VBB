import React, { Component } from "react";

export default class Bike extends Component {
  render() {
    for (let i = 0; i < this.props.remarks.length; i++) {
      if (this.props.remarks[i].code === "FB") {
        return (
          <div className="bike col-md-1 col-6">
            <span className="fas fa-bicycle" title="bike transport" />
          </div>
        );
      }
      return <div className="bike col-md-1 col-6" />;
    }
    return <div className="bike col-md-1 col-6" />;
  }
}
