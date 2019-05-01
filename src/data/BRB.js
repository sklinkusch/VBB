import stopsUnsorted from "./unsorted";

const stops = stopsUnsorted.filter(stop =>
  stop.name.startsWith("Brandenburg,")
);

export { stops };
