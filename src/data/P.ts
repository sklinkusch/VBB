import { remainingStops as stopsUnsorted } from "./OSL";

type Stop = {
  id: string,
  name: string
}

const stations = stopsUnsorted.filter(
  (stop: Stop) =>
    stop.name.includes("S Potsdam Hauptbahnhof") ||
    stop.name.includes("S Babelsberg") ||
    stop.name.includes("S Griebnitzsee")
);
const remainingAfterStations = stopsUnsorted.filter(
  (stop: Stop) => stations.indexOf(stop) === -1
);
const stopsRaw = remainingAfterStations.filter((stop: Stop) =>
  stop.name.startsWith("Potsdam,")
);
const remainingStops = remainingAfterStations.filter(
  (stop: Stop) => stopsRaw.indexOf(stop) === -1
);
// console.log(`after P: ${remainingStops.length}`);

const stops = stopsRaw.map((stop: Stop) => {
  return {
    id: stop.id,
    name: stop.name,
    type: "BLN",
    duration: null
  };
});

export { stations, stops, remainingStops };
