import stopsUnsorted from "./unsorted";

const stations = stopsUnsorted.filter(
  stop =>
    stop.name.includes("S Potsdam Hauptbahnhof") ||
    stop.name.includes("S Babelsberg") ||
    stop.name.includes("S Griebnitzsee")
);
const stops = stopsUnsorted.filter(stop => stop.name.startsWith("Potsdam,"));

export { stations, stops };
