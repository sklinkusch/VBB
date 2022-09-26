import { remainingStops as stopsUnsorted } from "./SN";

type Stop = {
  id: string,
  name: string
}

const stops = stopsUnsorted.filter(
  (stop: Stop) =>
    stop.name.startsWith("Kostrzyn (PL)") ||
    stop.name === "Krajnik Dolny" ||
    stop.name.startsWith("Krajnik Dolny,") ||
    stop.name.startsWith("Krzewina Zgorzelecka,") ||
    stop.name.startsWith("Slubice,") ||
    stop.name.startsWith("Szczecin,")
);

const remainingStops = stopsUnsorted.filter((stop: Stop) => stops.indexOf(stop) === -1);
// console.log(`after PL: ${remainingStops.length}`);
// console.log(remainingStops);
export { stops, remainingStops };
