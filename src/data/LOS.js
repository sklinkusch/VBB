import stopsUnsorted from "./unsorted";

const stations = stopsUnsorted.filter(stop => stop.name.includes("S Erkner"));
const stops = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("Erkner,") ||
    stop.name.startsWith("Gosen,") ||
    stop.name.startsWith("Grünheide,") ||
    stop.name.startsWith("Neu Zittau,") ||
    stop.name.startsWith("Schöneiche (bei Berlin),") ||
    stop.name.startsWith("Steinfurt,") ||
    stop.name.startsWith("Woltersdorf (LOS),")
);

export { stations, stops };
