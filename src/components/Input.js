import React from "react";

export default function Input(props) {
  return (
    <React.Fragment>
      <input
        type="text"
        onChange={event => props.filterStops(event.target.value)}
        ref={props.inputField}
        placeholder="Insert stop, then choose from list"
      />
    </React.Fragment>
  );
}
