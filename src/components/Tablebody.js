import React from "react";
import Departure from "./Departure";

export default function Tablebody(props) {
  const { data } = props;
  return (
    <React.Fragment>
      {data !== undefined && data !== null && data.length > 0 && (
        data.map(dep => {
          const identifier = `${dep.stop.id}:${dep.tripId}.${dep.when}`;
          return <Departure dep={dep} key={identifier} />;
        })
      )}
    </React.Fragment>
  );
}
