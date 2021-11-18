import React from "react";
import "../styles/Tablehead.scss";
import getLocale from "./getLocale";

export default function Tablehead({mode}) {
  return (
    <div className="row thead">
      <div className="plantime thead col-md-2">{getLocale("scheduled")}</div>
      <div className="realtime thead col-md-2">{getLocale("real")}</div>
      <div className="delay thead col-md-2">{getLocale("delay")}</div>
      <div className="mean thead col-md-1" />
      <div className="line thead col-md-3">{getLocale("line")}</div>
      {mode === "dep" 
        ? (<div className="direction thead col-md-8">{getLocale("direction")}</div>) 
        : (<div className="direction thead col-md-8">{getLocale("from")}</div>)}
      <div className="platform thead col-md-2">{getLocale("track")}</div>
      <div className="barrier thead col-md-1" />
      <div className="bike thead col-md-1" />
      <div className="warning thead col-md-1" />
      <div className="status thead col-md-1" />
    </div>
  );
}
