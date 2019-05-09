import React from "react";
import Departure from "./Departure";

export default function Tablebody(props) {
  const { data, duration } = props;
  const text = `In the next ${duration} minutes, no departures are planned for the station or stop you have chosen.`;
  return (
    <React.Fragment>
      {data !== undefined && data !== null && data.length > 0 ? (
        data.map(dep => {
          const identifier = `${dep.stop.id}:${dep.tripId}.${dep.when}`;
          return <Departure dep={dep} key={identifier} />;
        })
      ) : (
        <div>{text}</div>
      )}
    </React.Fragment>
  );
}
