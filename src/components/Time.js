import React from "react";

export default function Time(props) {
  if (props.time !== null && props.time !== undefined && props.time !== "") {
    return <div className="time col-md-2 col-8">{props.time}</div>;
  }
  return <div className="time col-md-2 col-8">&nbsp;</div>;
}
