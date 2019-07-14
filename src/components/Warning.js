import React from "react";

const Warning = props => {
  const formatTime = timestamp => {
    if (timestamp !== null && timestamp !== undefined) {
      const dateArray = timestamp.substr(0, 10).split("-");
      const [year, month, day] = dateArray;
      const time = timestamp.substr(11, 5);
      return `${day}.${month}.${year}, ${time}`;
    }
    return null;
  };
  const formatText = text => {
    const textWithoutLinks = replaceLinks(text);
    const formattedText = includeSpecialChars(textWithoutLinks);
    return formattedText;
  };
  const replaceLinks = item => {
    if (/<a.*href=".*".*>.*<\/a>/.test(item)) {
      const pattern = /<a.*href="(.*)".*>(.*)<\/a>/g;
      return item.replace(pattern, "$2 ($1)");
    }
    return item;
  };
  const includeSpecialChars = text => {
    let textWODoubleBrs = text.replace(/(\[br\]*)/g, " ");
    let textForm = textWODoubleBrs.replace(/&lt;/g, "<");
    textForm = textForm.replace(/&gt;/g, ">");
    return textForm;
  };
  const { remarks } = props;
  for (let i = 0; i < remarks.length; i++) {
    const { type } = remarks[i];
    if (type === "warning") {
      const from = formatTime(remarks[i].validFrom);
      const until = formatTime(remarks[i].validUntil);
      const summary = formatText(remarks[i].summary);
      const text = formatText(remarks[i].text);
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
};

export default Warning;
