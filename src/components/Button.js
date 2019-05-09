import React from "react";

export default function Button(props) {
  return (
    <React.Fragment>
      <button onClick={() => props.handleSubmit()}>Refresh</button>
    </React.Fragment>
  );
}
