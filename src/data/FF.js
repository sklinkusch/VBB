import { remainingStops as stopsUnsorted } from "./EE";

const stops = stopsUnsorted.filter(stop =>
  stop.name.startsWith("Frankfurt (Oder)")
);

const remainingStops = stopsUnsorted.filter(stop => stops.indexOf(stop) === -1);
console.log(`after FF: ${remainingStops.length}`);

export { stops, remainingStops };
