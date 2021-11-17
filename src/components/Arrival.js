import React from "react";
import Product from "./Product";
import "../styles/Departure.scss";
import Barrier from "./Barrier";
import Bike from "./Bike";
import Warning from "./Warning";
import Status from "./Status";
import Warntext from "./Warntext";
import Stattext from "./Stattext";
import Time from "./Time";

const Arrival = props => {
  const getDelay = (delay, cancelled) => {
    if (delay != null) {
      return Math.floor(delay / 60);
    } else if (cancelled) {
      return "X";
    } else {
      return "?";
    }
  };
  const getPlanTime = (realtime, delay) => {
    let hours = Number(realtime.substr(0, 2));
    let minutes = Number(realtime.substr(3, 2));
    minutes -= delay;
    if (minutes < 0) {
      minutes += 60;
      hours -= 1;
    }
    if (minutes > 59) {
      minutes -= 60;
      hours += 1;
    }
    if (hours < 0) {
      hours += 24;
    }
    if (hours > 23) {
      hours -= 24;
    }
    let hourString = hours < 10 ? `0${hours}` : `${hours}`;
    let minuteString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${hourString}:${minuteString}`;
  };
  const getTime = timestamp => {
    if (timestamp != null) {
      return timestamp.substr(11, 5);
    } else {
      return "";
    }
  };
  let delayMin;
  if (props.arr.cancelled) {
    delayMin = getDelay(props.arr.delay, props.arr.cancelled);
  } else {
    delayMin = getDelay(props.arr.delay, false);
  }
  let realtime = getTime(props.arr.when);
  let plantime;
  if (props.arr.when != null && props.arr.delay != null) {
    plantime = getPlanTime(realtime, delayMin);
  } else if (props.arr.when != null && delayMin === "?") {
    plantime = realtime;
    realtime = "";
  } else {
    plantime =
      getTime(props.arr.formerScheduledWhen) ||
      getTime(props.arr.scheduledWhen);
  }
  const { line, provenance, remarks, platform } = props.arr;
  const { name: linenumber } = line;
  return (
    <React.Fragment>
      <div className="row" key={props.arr.tripId}>
        <Time time={plantime} />
        <Time time={realtime} />
        <div className="delay col-md-2 col-8">{delayMin}</div>
        <Product line={line} />
        <div className="line col-md-3 col-6">{linenumber}</div>
        <div className="direction col-md-8 col-13">{provenance}</div>
        <div className="platform col-md-2 col-3">{platform}</div>
        <Barrier remarks={remarks} />
        <Bike remarks={remarks} />
        <Warning remarks={remarks} />
        <Status remarks={remarks} />
      </div>
      <div className="row row-add" key={`add:${props.arr.tripId}`}>
        <Warntext remarks={remarks} />
        <Stattext remarks={remarks} />
      </div>
    </React.Fragment>
  );
};

export default Arrival;
