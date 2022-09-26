import { remainingStops as stopsUnsorted } from "./PL";

type Stop = {
  id: string,
  name: string
}

const stops = stopsUnsorted.filter(
  (stop: Stop) => stop.name.startsWith("Lübeck,") || stop.name.startsWith("Lübeck ")
);

const remainingStops = stopsUnsorted.filter((stop: Stop) => stops.indexOf(stop) === -1);
// console.log(`after OT: ${remainingStops.length}`);
// console.log(remainingStops);
export { stops, remainingStops };
