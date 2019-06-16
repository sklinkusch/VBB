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
const stops = remainingAfterStations.filter(stop =>
  stop.name.startsWith("Potsdam,")
);
const remainingStops = remainingAfterStations.filter(
  stop => stops.indexOf(stop) === -1
);
// console.log(`after P: ${remainingStops.length}`);

export { stations, stops, remainingStops };
