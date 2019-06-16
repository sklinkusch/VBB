import { remainingStops as stopsUnsorted } from "./PL";

const stops = stopsUnsorted.filter(
  stop => stop.name.startsWith("Lübeck,") || stop.name.startsWith("Lübeck ")
);

const remainingStops = stopsUnsorted.filter(stop => stops.indexOf(stop) === -1);
// console.log(`after OT: ${remainingStops.length}`);
// console.log(remainingStops);
export { stops, remainingStops };
