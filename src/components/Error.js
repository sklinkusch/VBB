import React from "react";
import "../styles/Error.css";

export default function Error(props) {
  if (props.error !== null) {
    return <p className="error">{props.error}</p>;
  } else {
    return <p className="error" />;
  }
}
