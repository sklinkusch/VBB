/** @jsxImportSource theme-ui */
import { Fragment } from "react";

export default function Button({ handleSubmit }: { handleSubmit: Function }) {
  return (
    <Fragment>
      <button onClick={() => handleSubmit()} sx={{ padding: "5px", backgroundColor: "#ccc", opacity: 1 }}>
        <i className="fas fa-redo-alt" />
      </button>
    </Fragment>
  );
}
