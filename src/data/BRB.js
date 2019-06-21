import { remainingStops as stopsUnsorted } from "./BAR";
import { getBlnDuration } from "../components/helpers";

const stopsRaw = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("Brandenburg,") ||
    stop.name.startsWith("Gollwitz (bei Jeserig)") ||
    stop.name.startsWith("Göttin (Brandenburg)") ||
    stop.name.startsWith("Klein Kreutz") ||
    stop.name.startsWith("Saaringen,") ||
    stop.name === "Schmerzke" ||
    stop.name.startsWith("Wust,")
);

const remainingStops = stopsUnsorted.filter(
  stop => stopsRaw.indexOf(stop) === -1
);
// console.log(`after BRB: ${remainingStops.length}`);

const stops = stopsRaw.map(stop => {
  const stopDuration = getBlnDuration() || 60;
  return {
    id: stop.id,
    name: stop.name,
    duration: stopDuration
  };
});

export { stops, remainingStops };
