import { remainingStops as stopsUnsorted } from "./OSL";

const stations = stopsUnsorted.filter(
  stop =>
    stop.name.includes("S Potsdam Hauptbahnhof") ||
    stop.name.includes("S Babelsberg") ||
    stop.name.includes("S Griebnitzsee")
);
const remainingAfterStations = stopsUnsorted.filter(
  stop => stations.indexOf(stop) === -1
);
const stopsRaw = remainingAfterStations.filter(stop =>
  stop.name.startsWith("Potsdam,")
);
const remainingStops = remainingAfterStations.filter(
  stop => stopsRaw.indexOf(stop) === -1
);
// console.log(`after P: ${remainingStops.length}`);

const stops = stopsRaw.map(stop => {
  return {
    id: stop.id,
    name: stop.name,
    type: "BLN",
    duration: null
  };
});

export { stations, stops, remainingStops };
