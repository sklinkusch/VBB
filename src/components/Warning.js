import React, { Component } from "react";

export default class Warning extends Component {
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
    const remarks = this.props.remarks;
    for (let i = 0; i < remarks.length; i++) {
      if (remarks[i].type === "warning") {
        const from = this.formatTime(remarks[i].validFrom);
        const until = this.formatTime(remarks[i].validUntil);
        const summary = this.replaceLinks(remarks[i].summary);
        const text = this.replaceLinks(remarks[i].text);
        return (
          <div className="warning col-md-1 col-6">
            <span
              className="fas fa-exclamation-triangle"
              title={`${from ? from : ""} - ${until ? until : ""}: ${
                summary ? summary : ""
              }, ${text ? text : ""}`}
            />
          </div>
        );
      }
    }
    return <div className="warning col-md-1 col-6" />;
  }
  replaceLinks(item) {
    if (/<a.*href=".*".*>.*<\/a>/.test(item)) {
      const pattern = /<a.*href="(.*)".*>(.*)<\/a>/g;
      return item.replace(pattern, "$2 ($1)");
    }
    return item;
  }
}
