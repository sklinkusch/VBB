import React from "react";
import "../styles/Warntext.scss";

const Warntext = props => {
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
  const warnings = props.remarks.filter(remark => remark.type === "warning");
  if (warnings.length > 0) {
    return (
      <div className="warntext col-22">
        {warnings.map((warning, index) => {
          const { validFrom, validUntil, summary, text } = warning;
          const from = formatTime(validFrom);
          const until = formatTime(validUntil);
          const summaryFormatted = formatText(summary);
          const textFormatted = formatText(text);
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
};

export default Warntext;
