import React from "react";

const Bike = props => {
  for (let i = 0; i < props.remarks.length; i++) {
    if (props.remarks[i].code === "FB") {
      return (
        <div className="bike col-md-1 col-6">
          <span className="fas fa-bicycle" title="bike transport" />
        </div>
      );
    }
    return <div className="bike col-md-1 col-6" />;
  }
  return <div className="bike col-md-1 col-6" />;
};

export default Bike;
