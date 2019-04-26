import stopsUnsorted from "./unsorted";

const stopsFilter = stopsUnsorted.filter(
  stop =>
    stop.name.includes("(Berlin)") ||
    stop.name.startsWith("Berlin,") ||
    stop.name.includes("Berlin Hauptbahnhof")
);
const stops = stopsFilter.map(stop => {
  if (stop.name.startsWith("Berlin,")) {
    return { id: stop.id, name: stop.name.substr(8) };
  } else if (stop.name.endsWith("(Berlin)")) {
    return { id: stop.id, name: stop.name.substring(0, stop.name.length - 9) };
  }
  return { id: stop.id, name: stop.name };
});
export default stops;
