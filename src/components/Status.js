import React, { Component } from "react";

export default class Status extends Component {
  render() {
    const remarks = this.props.remarks;
    for (let i = 0; i < remarks.length; i++) {
      if (remarks[i].type === "status") {
        return (
          <div className="status">
            <span className="fas fa-times" title={remarks[i].text} />
          </div>
        );
      }
    }
    return <div className="status" />;
  }
}
