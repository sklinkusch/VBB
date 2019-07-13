import React from "react";

const Barrier = props => {
  for (let i = 0; i < props.remarks.length; i++) {
    if (props.remarks[i].code === "bf") {
      return (
        <div className="barrier col-md-1 col-6">
          <span className="fas fa-wheelchair" title="barrier-free" />
        </div>
      );
    }
    return <div className="barrier col-md-1 col-6" />;
  }
  return <div className="barrier col-md-1 col-6" />;
};

export default Barrier;
