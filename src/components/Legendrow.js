import React from "react";

export default function Legendrow(props) {
  return (
    <React.Fragment>
      <div className="legendleft">{props.left}</div>
      <div className="legendright">{props.right}</div>
    </React.Fragment>
  );
}
