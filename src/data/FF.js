import { remainingStops as stopsUnsorted } from "./EE";
import { getBlnDuration } from "../components/helpers";

const stopsRaw = stopsUnsorted.filter(stop =>
  stop.name.startsWith("Frankfurt (Oder)")
);

const remainingStops = stopsUnsorted.filter(
  stop => stopsRaw.indexOf(stop) === -1
);
// console.log(`after FF: ${remainingStops.length}`);

const stops = stopsRaw.map(stop => {
  const stopDuration = getBlnDuration() || 60;
  return {
    id: stop.id,
    name: stop.name,
    duration: stopDuration
  };
});

export { stops, remainingStops };
