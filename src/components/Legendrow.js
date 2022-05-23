/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react";

export default function Legendrow(props) {
  return (
    <Fragment>
      <div className="legendleft" sx={{ gridColumn: "1 / span 4" }}>{props.left}</div>
      <div className="legendright" sx={{ textAlign: "left", gridColumn: "5 / span 20" }}>{props.right}</div>
    </Fragment>
  );
}
