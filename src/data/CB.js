import stopsUnsorted from "./unsorted";

const stops = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("Cottbus,") ||
    stop.name.startsWith("Haasow,") ||
    stop.name.startsWith("Hänchen,") ||
    stop.name.startsWith("Klein Gaglow,") ||
    stop.name.startsWith("Kolkwitz,")
);

export { stops };
