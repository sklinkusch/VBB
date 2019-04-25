const stopObject = require("vbb-stations/full.json");
const stopsUnsorted = Object.keys(stopObject).map(key => {
  return { id: stopObject[key].id, name: stopObject[key].name };
});
const stopsFilter = stopsUnsorted.filter(
  stop =>
    // Berlin
    stop.name.includes("(Berlin)") ||
    stop.name.startsWith("Berlin,") ||
    stop.name.includes("Berlin Hauptbahnhof") ||
    // Potsdam
    stop.name.startsWith("Potsdam,") ||
    stop.name.includes("Potsdam Hauptbahnhof") ||
    // Stahnsdorf
    stop.name.startsWith("Güterfelde,") ||
    stop.name.startsWith("Schenkenhorst,") ||
    stop.name.startsWith("Sputendorf,") ||
    stop.name.startsWith("Stahnsdorf,")
);
const stopsRename = stopsFilter.map(stop => {
  if (stop.name.startsWith("Berlin,")) {
    return { id: stop.id, name: stop.name.substr(8) };
  } else if (stop.name.endsWith(" (Berlin)")) {
    return { id: stop.id, name: stop.name.substring(0, stop.name.length - 9) };
  }
  return { id: stop.id, name: stop.name };
});
const stops = stopsRename.sort((a, b) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  } else if (b.name.toLowerCase() < a.name.toLowerCase()) {
    return +1;
  } else {
    return 0;
  }
});
export default stops;
