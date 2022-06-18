/** @jsxImportSource theme-ui */
import { Fragment } from "react";

interface Props {
  left: any
  right: any
}

export default function Legendrow(props: Props) {
  const { left, right } = props
  return (
    <Fragment>
      <div className="legendleft" sx={{ gridColumn: "1 / span 4" }}>{left}</div>
      <div className="legendright" sx={{ textAlign: "left", gridColumn: "5 / span 20" }}>{right}</div>
    </Fragment>
  );
}
