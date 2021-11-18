import React from "react";
import Arrival from "./Arrival";
import Departure from "./Departure";

export default function Tablebody(props) {
  const { data, mode } = props;
  return (
    <React.Fragment>
      {data !== undefined && data !== null && data.length > 0 && (
        data.map(dep => {
          const identifier = `${dep.stop.id}:${dep.tripId}.${dep.when}`;
          if(mode === "dep") {
            return <Departure dep={dep} key={identifier} />
          } else {
            return <Arrival arr={dep} key={identifier} />
          }
        })
      )}
    </React.Fragment>
  );
}
