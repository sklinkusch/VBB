/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment, lazy } from "react";
const Time = lazy(() => import("./Time"));
const Product = lazy(() => import("./Product"));
const Barrier = lazy(() => import("./Barrier"));
const Bike = lazy(() => import("./Bike"));
const Warning = lazy(() => import("./Warning"));
const Status = lazy(() => import("./Status"));
const Warntext = lazy(() => import("./Warntext"));
const Stattext = lazy(() => import("./Stattext"));

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
    <Fragment>
      <div className="row" key={props.arr.tripId} sx={{ display: "grid", gridTemplateColumns: "repeat(24,1fr)" }}>
        <Time time={plantime} class="plantime" />
        <Time time={realtime} class="realtime" />
        <div className="delay" sx={{ textAlign: ["center", "center", "right"], gridColumn: ["17 / span 8", "5 / span 2"]}}>{delayMin}</div>
        <Product line={line} />
        <div className="line" sx={{ textAlign: "left", gridColumn: ["2 / span 6", "8 / span 3"] }}>{linenumber}</div>
        <div className="direction" sx={{ textAlign: "left", gridColumn: ["8 / span 13", "11 / span 8"] }}>{provenance}</div>
        <div className="platform" sx={{ textAlign: "center", gridColumn: ["22 / span 3", "19 / span 2"] }}>{platform}</div>
        <Barrier remarks={remarks} />
        <Bike remarks={remarks} />
        <Warning remarks={remarks} />
        <Status remarks={remarks} />
      </div>
      <div className="row row-add" key={`add:${props.arr.tripId}`} sx={{ display: "grid", gridTemplateColumns: "repeat(24, 1fr)", borderBottom: ["1px solid #ccc", "1px solid #ccc","none"] }}>
        <Warntext remarks={remarks} />
        <Stattext remarks={remarks} />
      </div>
    </Fragment>
  );
};

export default Arrival;
