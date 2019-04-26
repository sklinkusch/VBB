import stopsUnsorted from "./unsorted";

const stationsP = stopsUnsorted.filter(
  stop =>
    stop.name.includes("S Potsdam Hauptbahnhof") ||
    stop.name.includes("S Babelsberg") ||
    stop.name.includes("S Griebnitzsee")
);
const stopsP = stopsUnsorted.filter(stop => stop.name.startsWith("Potsdam,"));

export { stationsP, stopsP };
