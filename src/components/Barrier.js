import React, { Component } from "react";

export default class Barrier extends Component {
  render() {
    for (let i = 0; i < this.props.remarks.length; i++) {
      if (this.props.remarks[i].code === "bf") {
        return (
          <div className="barrier col-md-1 col-6">
            <span className="fas fa-wheelchair" title="barrier-free" />
          </div>
        );
      }
      return <div className="barrier col-md-1 col-6" />;
    }
    return <div className="barrier col-md-1 col-6" />;
  }
}
