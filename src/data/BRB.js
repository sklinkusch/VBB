import { remainingStops as stopsUnsorted } from "./BAR";

const stops = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("Brandenburg,") ||
    stop.name.startsWith("Gollwitz (bei Jeserig)") ||
    stop.name.startsWith("Göttin (Brandenburg)") ||
    stop.name.startsWith("Klein Kreutz") ||
    stop.name.startsWith("Saaringen,") ||
    stop.name === "Schmerzke" ||
    stop.name.startsWith("Wust,")
);

const remainingStops = stopsUnsorted.filter(stop => stops.indexOf(stop) === -1);
// console.log(`after BRB: ${remainingStops.length}`);

export { stops, remainingStops };
