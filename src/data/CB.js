import { remainingStops as stopsUnsorted } from "./BRB";
import { getBlnDuration } from "../components/helpers";

const stopsRaw = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("Cottbus,") ||
    stop.name.startsWith("Haasow,") ||
    stop.name.startsWith("Hänchen,") ||
    stop.name.startsWith("Klein Gaglow,") ||
    stop.name.startsWith("Kolkwitz,")
);

const remainingStops = stopsUnsorted.filter(
  stop => stopsRaw.indexOf(stop) === -1
);
// console.log(`after CB: ${remainingStops.length}`);

const stops = stopsRaw.map(stop => {
  const stopDuration = getBlnDuration() || 60;
  return {
    id: stop.id,
    name: stop.name,
    duration: stopDuration
  };
});

export { stops, remainingStops };
