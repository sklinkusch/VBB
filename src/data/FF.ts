import { remainingStops as stopsUnsorted } from "./EE";

type Stop = {
  id: string,
  name: string
}

const stopsRaw = stopsUnsorted.filter((stop: Stop) =>
  stop.name.startsWith("Frankfurt (Oder)")
);

const remainingStops = stopsUnsorted.filter(
  (stop: Stop) => stopsRaw.indexOf(stop) === -1
);
// console.log(`after FF: ${remainingStops.length}`);

const stops = stopsRaw.map((stop: Stop) => {
  return {
    id: stop.id,
    name: stop.name,
    type: "BLN",
    duration: null
  };
});

export { stops, remainingStops };
