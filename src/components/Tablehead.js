import React from "react";
import "../styles/Tablehead.scss";

export default function Tablehead() {
  return (
    <div className="row thead">
      <div className="plantime thead col-md-2">sched.</div>
      <div className="realtime thead col-md-2">real</div>
      <div className="delay thead col-md-2">del.</div>
      <div className="mean thead col-md-1" />
      <div className="line thead col-md-3">line</div>
      <div className="direction thead col-md-8">direction</div>
      <div className="platform thead col-md-2">track</div>
      <div className="barrier thead col-md-1" />
      <div className="bike thead col-md-1" />
      <div className="warning thead col-md-1" />
      <div className="status thead col-md-1" />
    </div>
  );
}
