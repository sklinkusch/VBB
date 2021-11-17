import React from "react";
import Legendrow from "./Legendrow";
import getLocale from "./getLocale";
import "../styles/Legend.scss";

export default function LegendArr() {
  return (
    <div className="legend">
      <h3 className="col-24">{getLocale("legend")}</h3>
      <Legendrow
        left={getLocale("scheduled")}
        right={getLocale("scheduledDesc")}
      />
      <Legendrow
        left={getLocale("real")}
        right={getLocale("realDesc")}
      />
      <Legendrow left={getLocale("delay")} right={getLocale("delayDesc")} />
      <Legendrow left={getLocale("line")} right={getLocale("lineDesc")} />
      <Legendrow left={getLocale("from")} right={getLocale("fromDesc")} />
      <Legendrow
        left={<span className="fas fa-wheelchair" />}
        right={getLocale("barrierfree")}
      />
      <Legendrow
        left={<span className="fas fa-bicycle" />}
        right={getLocale("bike")}
      />
      <Legendrow
        left={<span className="fas fa-exclamation-triangle" />}
        right={getLocale("attention")}
      />
      <Legendrow
        left={<span className="fas fa-times" />}
        right={getLocale("cancelled")}
      />
    </div>
  );
}
