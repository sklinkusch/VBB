import React, { lazy } from "react";
const Departure = lazy(() => import("./Departure"));
const Arrival = lazy(() => import("./Arrival"));

export default function Tablebody(props) {
  const { data = [], mode } = props;
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
