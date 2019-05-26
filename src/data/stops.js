import stopsB from "./B";
import { stations as stationsP, stops as stopsP } from "./P";
import { stations as stationsPM, stops as stopsPM } from "./PM";
import { stations as stationsTF, stops as stopsTF } from "./TF";
import { stations as stationsLDS, stops as stopsLDS } from "./LDS";
import { stations as stationsLOS, stops as stopsLOS } from "./LOS";
import { stations as stationsMOL, stops as stopsMOL } from "./MOL";
import { stations as stationsBAR, stops as stopsBAR } from "./BAR";
import { stations as stationsOHV, stops as stopsOHV } from "./OHV";
import { stops as stopsHVL } from "./HVL";
import { stops as stopsBRB } from "./BRB";
import { stops as stopsCB } from "./CB";
import { stops as stopsEE } from "./EE";
import { stops as stopsFF } from "./FF";
import { stops as stopsOSL } from "./OSL";
import { stops as stopsOPR } from "./OPR";
import { stops as stopsPR } from "./PR";
import { stops as stopsSPN } from "./SPN";

const stopsBerlinUnsorted = [
  ...stopsB,
  ...stationsP,
  ...stationsPM,
  ...stationsTF,
  ...stationsLDS,
  ...stationsLOS,
  ...stationsMOL,
  ...stationsBAR,
  ...stationsOHV
];
const stopsBerlin = sortItems(stopsBerlinUnsorted);
const stopsBrandenburgUnsorted = [
  ...stopsP,
  ...stopsPM,
  ...stopsTF,
  ...stopsLDS,
  ...stopsLOS,
  ...stopsMOL,
  ...stopsBAR,
  ...stopsOHV,
  ...stopsHVL,
  ...stopsBRB,
  ...stopsCB,
  ...stopsEE,
  ...stopsFF,
  ...stopsOSL,
  ...stopsOPR,
  ...stopsPR,
  ...stopsSPN
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
