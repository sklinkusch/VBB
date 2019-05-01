import stopsUnsorted from "./unsorted";

const stops = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("Brandenburg,") ||
    stop.name.startsWith("Gollwitz (bei Jeserig)") ||
    stop.name.startsWith("Göttin (Brandenburg)") ||
    stop.name.startsWith("Klein Kreutz") ||
    stop.name.startsWith("Saaringen,") ||
    stop.name === "Schmerzke" ||
    stop.name.startsWith("Wust,")
);

export { stops };
