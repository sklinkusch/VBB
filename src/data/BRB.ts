import { remainingStops as stopsUnsorted } from "./BAR";

type Stop = {
  id: string,
  name: string
}

const stopsRaw = stopsUnsorted.filter(
  (stop: Stop) =>
    stop.name.startsWith("Brandenburg,") ||
    stop.name.startsWith("Gollwitz (bei Jeserig)") ||
    stop.name.startsWith("Göttin (Brandenburg)") ||
    stop.name.startsWith("Klein Kreutz") ||
    stop.name.startsWith("Saaringen,") ||
    stop.name === "Schmerzke" ||
    stop.name.startsWith("Wust,")
);

const remainingStops = stopsUnsorted.filter(
  (stop: Stop) => stopsRaw.indexOf(stop) === -1
);
// console.log(`after BRB: ${remainingStops.length}`);

const stops = stopsRaw.map((stop: Stop) => {
  return {
    id: stop.id,
    name: stop.name,
    type: "BLN",
    duration: null
  };
});

export { stops, remainingStops };
