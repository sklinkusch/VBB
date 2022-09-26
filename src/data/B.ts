import stopsUnsorted from "./unsorted";

type Stop = {
  id: string,
  name: string
}

const stopsFilter = stopsUnsorted.filter(
  (stop: Stop) =>
    stop.name.includes("(Berlin)") ||
    stop.name.includes("(Bln)") ||
    stop.name.startsWith("Berlin,") ||
    stop.name.includes("Berlin Hauptbahnhof") ||
    stop.name === "U Stadtmitte/Krausenstr." ||
    stop.name === "U Alexanderplatz [Bus]" ||
    stop.name === "S Rahnsdorf [Tram]"
);
const stopsRaw = stopsFilter.map((stop: Stop) => {
  console.log(stop)
  if (stop.name.startsWith("Berlin,")) {
    return { id: stop.id, name: stop.name.substr(8) };
  } else if (stop.name.endsWith("(Berlin)")) {
    return { id: stop.id, name: stop.name.substring(0, stop.name.length - 9) };
  } else if (stop.name.includes("(Bln)")) {
    const newName = stop.name.replace("(Bln)", "");
    return { id: stop.id, name: newName };
  } else if (stop.name.includes("(Berlin)")) {
    const newName = stop.name.replace("(Berlin)", "");
    return { id: stop.id, name: newName };
  }
  return { id: stop.id, name: stop.name };
});

export const remainingStops = stopsUnsorted.filter(
  (stop: Stop) => stopsFilter.indexOf(stop) === -1
);
const stops = stopsRaw.map((stop: Stop) => {
  if (
    stop.name.includes("S+U Berlin Hauptbahnhof") ||
    stop.name.includes("S+U Zoologischer Garten")
  ) {
    return {
      id: stop.id,
      name: stop.name,
      type: "BHF"
    };
  } else {
    return {
      id: stop.id,
      name: stop.name,
      type: "BLN"
    };
  }
});
// console.log(`after B: ${remainingStops.length}`);
export default stops;
