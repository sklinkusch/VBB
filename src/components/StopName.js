import React from "react";

export default function StopName(props) {
  return props.element === "h2" ? <h2>{props.stop}</h2> : <h3>{props.stop}</h3>;
}
