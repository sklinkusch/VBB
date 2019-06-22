import React from "react";

export default function Button(props) {
  return (
    <React.Fragment>
      <button onClick={() => props.handleSubmit()}>
        <i className="fas fa-redo-alt" />
      </button>
    </React.Fragment>
  );
}
