import { remainingStops as stopsUnsorted } from "./SA";

const stops = stopsUnsorted.filter(
  stop =>
    stop.name === "Altenbach" ||
    stop.name.startsWith("Altmittweida,") ||
    stop.name.startsWith("Beilrode,") ||
    stop.name === "Bennewitz" ||
    stop.name === "Borsdorf(Sachs)" ||
    stop.name.startsWith("Chemnitz,") ||
    stop.name.startsWith("Cossebaude,") ||
    stop.name.startsWith("Coswig (bei Dresden)") ||
    stop.name === "Dahlen(Sachs)" ||
    stop.name.startsWith("Delitzsch ") ||
    stop.name.startsWith("Döbeln,") ||
    stop.name.startsWith("Doberschütz,") ||
    stop.name.startsWith("Dresden,") ||
    stop.name.startsWith("Dresden-") ||
    stop.name.startsWith("Eilenburg,") ||
    stop.name.startsWith("Erlau(Sachsen)") ||
    stop.name.startsWith("Frauenhain,") ||
    stop.name === "Gerichshain" ||
    stop.name.startsWith("Gröditz,") ||
    stop.name.startsWith("Großenhain,") ||
    stop.name.startsWith("Hoyerswerda,") ||
    stop.name === "Klitten" ||
    stop.name === "Kühren" ||
    stop.name.startsWith("Lampertswalde,") ||
    stop.name.startsWith("Lauta,") ||
    stop.name.startsWith("Leipzig,") ||
    stop.name.startsWith("Leipzig-") ||
    stop.name.startsWith("Leipzig ") ||
    stop.name.startsWith("Limmritz (Sachsen)") ||
    stop.name === "Lohsa" ||
    stop.name === "Machern(Sachs)" ||
    stop.name.startsWith("Mittweida,") ||
    stop.name === "Mücka" ||
    stop.name.startsWith("Mockrehna,") ||
    stop.name.startsWith("Niederau,") ||
    stop.name.startsWith("Niederwartha,") ||
    stop.name.startsWith("Oberlichtenau,") ||
    stop.name === "Oschatz" ||
    stop.name.startsWith("Ostrau,") ||
    stop.name.startsWith("Ottendorf(Mittweida)") ||
    stop.name.startsWith("Priestewitz,") ||
    stop.name.startsWith("Rackwitz (bei Leipzig)") ||
    stop.name.startsWith("Radebeul-Naundorf,") ||
    stop.name.startsWith("Riesa,") ||
    stop.name.startsWith("Schwarzkollm,") ||
    stop.name.startsWith("Schweikershain,") ||
    stop.name.startsWith("Seerhausen,") ||
    stop.name.startsWith("Stauchitz,") ||
    stop.name.startsWith("Steina,") ||
    stop.name.startsWith("Tiefenau,") ||
    stop.name.startsWith("Torgau,") ||
    stop.name === "Uhyst" ||
    stop.name.startsWith("Waldheim,") ||
    stop.name.startsWith("Weinböhla Hp,") ||
    stop.name.startsWith("Wülknitz,") ||
    stop.name === "Wurzen" ||
    stop.name.startsWith("Zabeltitz,") ||
    stop.name.startsWith("Zeithain,") ||
    stop.name.startsWith("Zschaitz,") ||
    stop.name === "Zschortau"
);

const remainingStops = stopsUnsorted.filter(stop => stops.indexOf(stop) === -1);
console.log(`after SN: ${remainingStops.length}`);
// console.log(remainingStops);
export { stops, remainingStops };
