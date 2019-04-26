import stopsB from "./B";
import { stationsP, stopsP } from "./P";
import { stationsPM, stopsPM } from "./PM";

const stopsBerlinUnsorted = [...stopsB, ...stationsP, ...stationsPM];
const stopsBerlin = sortItems(stopsBerlinUnsorted);
const stopsBrandenburgUnsorted = [...stopsP, ...stopsPM];
const stopsBrandenburg = sortItems(stopsBrandenburgUnsorted);
const stops = [...stopsBerlin, ...stopsBrandenburg];

export default stops;

function sortItems(array) {
  return array.sort((a, b) => {
    return a.name
      .toLowerCase()
      .localeCompare(b.name.toLowerCase(), "de", { sensitivity: "base" });
  });
}
