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
    stop.name.startsWith("Stahnsdorf,") ||
    // Kleinmachnow
    stop.name.startsWith("Kleinmachnow,") ||
    // Teltow
    stop.name.startsWith("Teltow,") ||
    stop.name.includes("Teltow Stadt") ||
    // Nuthetal
    stop.name.startsWith("Bergholz-Rehbrücke,") ||
    stop.name.startsWith("Fahlhorst,") ||
    stop.name.startsWith("Nudow,") ||
    stop.name === "Philippsthal" ||
    stop.name.startsWith("Saarmund,") ||
    stop.name.startsWith("Tremsdorf,") ||
    // Michendorf
    stop.name.startsWith("Fresdorf,") ||
    stop.name.startsWith("Langerwisch,") ||
    stop.name.startsWith("Langerwisch-Süd,") ||
    stop.name.startsWith("Michendorf,") ||
    stop.name.startsWith("Wildenbruch,") ||
    stop.name.startsWith("Wilhelmshorst,") ||
    // Seddiner See
    stop.name.startsWith("Kähnsdorf,") ||
    stop.name.startsWith("Neuseddin,") ||
    stop.name.startsWith("Seddin (PM),") ||
    stop.name === "Seddin, Jägerhof" ||
    // Schwielowsee
    stop.name.startsWith("Caputh-Geltow,") ||
    stop.name.startsWith("Caputh,") ||
    stop.name.startsWith("Ferch-Lienewitz,") ||
    stop.name.startsWith("Ferch,") ||
    stop.name.startsWith("Geltow,") ||
    stop.name.startsWith("Wildpark-West,") ||
    // Werder (Havel)
    stop.name.startsWith("Werder (Havel),") ||
    stop.name.startsWith("Bliesendorf,") ||
    stop.name.startsWith("Derwitz,") ||
    stop.name.startsWith("Glindow,") ||
    stop.name.startsWith("Kemnitz (PM),") ||
    stop.name.startsWith("Petzow,") ||
    stop.name.startsWith("Phöben,") ||
    stop.name.startsWith("Plötzin,") ||
    stop.name.startsWith("Neu Plötzin,") ||
    stop.name.startsWith("Plessow,") ||
    stop.name.startsWith("Töplitz,") ||
    stop.name.startsWith("Leest,") ||
    stop.name.startsWith("Neu Töplitz,")
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
