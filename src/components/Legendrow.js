import React from "react";

export default function Legendrow(props) {
  return (
    <React.Fragment>
      <div className="legendleft col-2">{props.left}</div>
      <div className="legendright col-10">{props.right}</div>
    </React.Fragment>
  );
}
