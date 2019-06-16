import { remainingStops as stopsUnsorted } from "./SN";

const stops = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("Kostrzyn (PL)") ||
    stop.name === "Krajnik Dolny" ||
    stop.name.startsWith("Krajnik Dolny,") ||
    stop.name.startsWith("Krzewina Zgorzelecka,") ||
    stop.name.startsWith("Slubice,") ||
    stop.name.startsWith("Szczecin,")
);

const remainingStops = stopsUnsorted.filter(stop => stops.indexOf(stop) === -1);
// console.log(`after PL: ${remainingStops.length}`);
// console.log(remainingStops);
export { stops, remainingStops };
