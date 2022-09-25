/** @jsxImportSource theme-ui */
import { Fragment, MouseEventHandler } from "react";

type Props = {
  handleSubmit: MouseEventHandler
}

export default function Button({ handleSubmit }: Props) {
  return (
    <Fragment>
      <button onClick={handleSubmit} sx={{ padding: "5px", backgroundColor: "#ccc", opacity: 1 }}>
        <i className="fas fa-redo-alt" />
      </button>
    </Fragment>
  );
}
