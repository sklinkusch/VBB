/** @jsxImportSource theme-ui */
import React from "react";

type Props = {
  left: string,
  right: string
}

export default function Legendrow({left, right}: Props) {
  return (
    <React.Fragment>
      <div className="legendleft" sx={{ gridColumn: "1 / span 4" }}>{left}</div>
      <div className="legendright" sx={{ textAlign: "left", gridColumn: "5 / span 20" }}>{right}</div>
    </React.Fragment>
  );
}
