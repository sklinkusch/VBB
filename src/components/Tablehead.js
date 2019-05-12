import React from "react";
import "../styles/Tablehead.css";

export default function Tablehead() {
  return (
    <div className="row thead">
      <div className="plantime thead">sched.</div>
      <div className="realtime thead">real</div>
      <div className="delay thead">del.</div>
      <div className="mean thead" />
      <div className="line thead">line</div>
      <div className="direction thead">direction</div>
      <div className="platform thead">track</div>
      <div className="barrier thead" />
      <div className="bike thead" />
      <div className="warning thead" />
      <div className="status thead" />
    </div>
  );
}
