import stopsB from "./B";
import { stations as stationsP, stops as stopsP } from "./P";
import { stations as stationsPM, stops as stopsPM } from "./PM";

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
