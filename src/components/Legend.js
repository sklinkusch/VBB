import React from "react";
import Legendrow from "./Legendrow";
import "../styles/Legend.scss";

export default function Legend() {
  return (
    <div className="legend">
      <h3 className="col-24">Legend</h3>
      <Legendrow
        left="sched."
        right="time for the departure as stated in the timetable"
      />
      <Legendrow
        left="real"
        right="currently planned time for the departure (with delays)"
      />
      <Legendrow left="del." right="delay in minutes" />
      <Legendrow left="line" right="line or train number" />
      <Legendrow left="direction" right="terminus of this line or train" />
      <Legendrow
        left={<span className="fas fa-wheelchair" />}
        right="the bus, train or ship is barrier-free"
      />
      <Legendrow
        left={<span className="fas fa-bicycle" />}
        right="bike transport is permitted"
      />
      <Legendrow
        left={<span className="fas fa-exclamation-triangle" />}
        right="there is additional information for this line (detour, reasons for delays etc.)"
      />
      <Legendrow
        left={<span className="fas fa-times" />}
        right="cancellation/additional service"
      />
    </div>
  );
}
