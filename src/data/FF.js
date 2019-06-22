import { remainingStops as stopsUnsorted } from "./EE";

const stopsRaw = stopsUnsorted.filter(stop =>
  stop.name.startsWith("Frankfurt (Oder)")
);

const remainingStops = stopsUnsorted.filter(
  stop => stopsRaw.indexOf(stop) === -1
);
// console.log(`after FF: ${remainingStops.length}`);

const stops = stopsRaw.map(stop => {
  return {
    id: stop.id,
    name: stop.name,
    type: "BLN",
    duration: null
  };
});

export { stops, remainingStops };
