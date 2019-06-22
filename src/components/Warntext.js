import React, { Component } from "react";
import "../styles/Warntext.scss";

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
        <div className="warntext col-22">
          {warnings.map((warning, index) => {
            const { validFrom, validUntil, summary, text } = warning;
            const from = this.formatTime(validFrom);
            const until = this.formatTime(validUntil);
            const summaryFormatted = this.replaceLinks(summary);
            const textFormatted = this.replaceLinks(text);
            const limits =
              until === "31.12.2049, 23:59"
                ? `since ${from}`
                : `${from} - ${until}`;
            return (
              <p key={index}>
                <span className="fas fa-exclamation-triangle" />
                {limits}: {summaryFormatted}, {textFormatted}
              </p>
            );
          })}
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
