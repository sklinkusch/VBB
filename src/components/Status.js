import React from "react";

const Status = props => {
  const { remarks } = props;
  for (let i = 0; i < remarks.length; i++) {
    const { type, text } = remarks[i];
    if (type === "status") {
      return (
        <div className="status col-md-1 col-6">
          <span className="fas fa-times" title={text} />
        </div>
      );
    }
  }
  return <div className="status col-md-1 col-6" />;
};

export default Status;
