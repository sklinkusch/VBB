/** @jsxImportSource theme-ui */
import Legendrow from "../Legendrow/Legendrow";
import getLocale from "../Locales/getLocale";

export default function LegendDep() {
  return (
    <div className="legend" sx={{ display: ["none", "none", "grid"], gridTemplateColumns: "repeat(24,1fr)", border: "2px solid black", width: "70%", margin: "0 auto 40px auto", borderRadius: "10px" }}>
      <h3 sx={{ gridColumn: "1 / span 24" }}>{getLocale("legend")}</h3>
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
      <Legendrow left={getLocale("direction")} right={getLocale("directionDesc")} />
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
