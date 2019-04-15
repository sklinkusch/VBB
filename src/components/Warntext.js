import React, { Component } from "react";
import "../styles/Warntext.css";

export default class Warntext extends Component {
  formatTime(timestamp) {
    if (timestamp !== null && timestamp !== undefined) {
      const dateArray = timestamp.substr(0, 10).split("-");
      const [year, month, day] = dateArray;
      const time = timestamp.substr(11, 5);
      return `${day}.${month}.${year}, ${time}`;
    }
    return null;
  }
  render() {
    const warnings = this.props.remarks.filter(
      remark => remark.type === "warning"
    );
    if (warnings.length > 0) {
      return (
        <div className="warntext">
          <p>
            <span className="fas fa-exclamation-triangle" />
          </p>
          {warnings.map((warning, index) => (
            <p key={index}>
              {this.formatTime(warning.validFrom)} -{" "}
              {this.formatTime(warning.validUntil)}:{" "}
              {this.replaceLinks(warning.summary)},{" "}
              {this.replaceLinks(warning.text)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  }
  replaceLinks(item) {
    if (/<a.*href=".*".*>.*<\/a>/.test(item)) {
      const pattern = /<a.*href="(.*)".*>(.*)<\/a>/g;
      return item.replace(pattern, "$2 ($1)");
    }
    return item;
  }
}
