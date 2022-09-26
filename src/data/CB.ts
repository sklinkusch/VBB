import { remainingStops as stopsUnsorted } from "./BRB";

type Stop = {
  id: string,
  name: string
}

const stopsRaw = stopsUnsorted.filter(
  (stop: Stop) =>
    stop.name.startsWith("Cottbus,") ||
    stop.name.startsWith("Haasow,") ||
    stop.name.startsWith("Hänchen,") ||
    stop.name.startsWith("Klein Gaglow,") ||
    stop.name.startsWith("Kolkwitz,")
);

const remainingStops = stopsUnsorted.filter(
  (stop: Stop) => stopsRaw.indexOf(stop) === -1
);
// console.log(`after CB: ${remainingStops.length}`);

const stops = stopsRaw.map((stop: Stop) => {
  return {
    id: stop.id,
    name: stop.name,
    type: "BLN",
    duration: null
  };
});

export { stops, remainingStops };
