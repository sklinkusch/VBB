import stopsB from "./B";
import { stations as stationsP, stops as stopsP } from "./P";
import { stations as stationsPM, stops as stopsPM } from "./PM";
import { stations as stationsTF, stops as stopsTF } from "./TF";
import { stations as stationsLDS, stops as stopsLDS } from "./LDS";
import { stations as stationsLOS, stops as stopsLOS } from "./LOS";
import { stations as stationsMOL, stops as stopsMOL } from "./MOL";

const stopsBerlinUnsorted = [
  ...stopsB,
  ...stationsP,
  ...stationsPM,
  ...stationsTF,
  ...stationsLDS,
  ...stationsLOS,
  ...stationsMOL
];
const stopsBerlin = sortItems(stopsBerlinUnsorted);
const stopsBrandenburgUnsorted = [
  ...stopsP,
  ...stopsPM,
  ...stopsTF,
  ...stopsLDS,
  ...stopsLOS,
  ...stopsMOL
];
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
