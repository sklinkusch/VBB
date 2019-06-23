import React from "react";

export default function Input(props) {
  return (
    <React.Fragment>
      <input
        type="text"
        onKeyPress={event => props.filterStops(event)}
        ref={props.inputField}
        placeholder="Insert stop, press enter, then choose"
      />
    </React.Fragment>
  );
}
