/** @jsxImportSource theme-ui */
import { Fragment, lazy } from "react";
const Time = lazy(() => import("./Time"));
const Product = lazy(() => import("./Product"));
const Barrier = lazy(() => import("./Barrier"));
const Bike = lazy(() => import("./Bike"));
const Warning = lazy(() => import("./Warning"));
const Status = lazy(() => import("./Status"));
const Warntext = lazy(() => import("./Warntext"));
const Stattext = lazy(() => import("./Stattext"));

interface Remark {
  code: string
  type: string
  validFrom: string
  validUntil: string
  summary: string
  text: string
}

interface Props {
  dep: {
    when: string | null
    delay: number | null
    cancelled: boolean
    formerScheduledWhen: string | null 
    scheduledWhen: string | null
    tripId: string
    line: {
      name: string
      express: boolean
      metro: boolean
      night: boolean
      product: string
    }
    direction: string
    remarks: Remark[]
    platform: number
  }
}

const Departure = (props: Props) => {
  const getDelay = (delay: number | null, cancelled: boolean) => {
    if (delay != null) {
      return Math.floor(delay / 60);
    } else if (cancelled) {
      return "X";
    } else {
      return "?";
    }
  };
  const getPlanTime = (realtime: string, delay: string | number) => {
    let hours = Number(realtime.substring(0, 2));
    let minutes = Number(realtime.substring(3, 5));
    if(typeof delay === "number") {
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
    }
    let hourString = hours < 10 ? `0${hours}` : `${hours}`;
    let minuteString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${hourString}:${minuteString}`;
  };
  const getTime = (timestamp: string | null) => {
    if (timestamp != null) {
      return timestamp.substring(11, 16);
    } else {
      return "";
    }
  };
  let delayMin;
  if (props.dep.cancelled) {
    delayMin = getDelay(props.dep.delay, props.dep.cancelled);
  } else {
    delayMin = getDelay(props.dep.delay, false);
  }
  let realtime = getTime(props.dep.when);
  let plantime;
  if (props.dep.when != null && props.dep.delay != null) {
    plantime = getPlanTime(realtime, delayMin);
  } else if (props.dep.when != null && delayMin === "?") {
    plantime = realtime;
    realtime = "";
  } else {
    plantime =
      getTime(props.dep.formerScheduledWhen) ||
      getTime(props.dep.scheduledWhen);
  }
  const { line, direction, remarks, platform } = props.dep;
  const { name: linenumber } = line;
  return (
    <Fragment>
      <div className="row" key={props.dep.tripId} sx={{ display: "grid", gridTemplateColumns: "repeat(24,1fr)" }}>
        <Time time={plantime} class="plantime" />
        <Time time={realtime} class="realtime" />
        <div className="delay" sx={{ textAlign: ["center", "center", "right"], gridColumn: ["17 / span 8", "5 / span 2"]}}>{delayMin}</div>
        <Product line={line} />
        <div className="line" sx={{ textAlign: "left", gridColumn: ["2 / span 6", "8 / span 3"] }}>{linenumber}</div>
        <div className="direction" sx={{ textAlign: "left", gridColumn: ["8 / span 13", "11 / span 8"] }}>{direction}</div>
        <div className="platform" sx={{ textAlign: "center", gridColumn: ["22 / span 3", "19 / span 2"] }}>{platform}</div>
        <Barrier remarks={remarks} />
        <Bike remarks={remarks} />
        <Warning remarks={remarks} />
        <Status remarks={remarks} />
      </div>
      <div className="row row-add" key={`add:${props.dep.tripId}`} sx={{ display: "grid", gridTemplateColumns: "repeat(24, 1fr)", borderBottom: ["1px solid #ccc", "1px solid #ccc","none"] }}>
        <Warntext remarks={remarks} />
        <Stattext remarks={remarks} />
      </div>
    </Fragment>
  );
};

export default Departure;