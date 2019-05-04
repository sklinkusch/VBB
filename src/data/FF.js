import stopsUnsorted from "./unsorted";

const stops = stopsUnsorted.filter(stop =>
  stop.name.startsWith("Frankfurt (Oder)")
);

export { stops };
