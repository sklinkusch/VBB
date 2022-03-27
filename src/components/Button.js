/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react";

export default function Button(props) {
  return (
    <Fragment>
      <button onClick={() => props.handleSubmit()} sx={{ padding: "5px", backgroundColor: "#ccc", opacity: 1 }}>
        <i className="fas fa-redo-alt" />
      </button>
    </Fragment>
  );
}
