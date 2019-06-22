import React from "react";

export default function Legendrow(props) {
  return (
    <React.Fragment>
      <div className="legendleft col-4">{props.left}</div>
      <div className="legendright col-20">{props.right}</div>
    </React.Fragment>
  );
}
