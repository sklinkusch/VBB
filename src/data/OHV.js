import stopsUnsorted from "./unsorted";

const stations = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("S Mühlenbeck-Mönchmühle") ||
    stop.name.startsWith("S Schönfließ") ||
    stop.name.startsWith("S Bergfelde") ||
    stop.name.startsWith("S Hohen Neuendorf") ||
    stop.name.startsWith("S Birkenwerder") ||
    stop.name.startsWith("S Borgsdorf") ||
    stop.name.startsWith("S Lehnitz") ||
    stop.name === "S Oranienburg Bhf"
);
const stops = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("Bärenklau (OHV),") ||
    stop.name.startsWith("Bergfelde,") ||
    stop.name.startsWith("Bernöwe") ||
    stop.name.startsWith("Birkenwerder,") ||
    stop.name.startsWith("Borgsdorf,") ||
    stop.name.startsWith("Bötzow,") ||
    stop.name.startsWith("Eichstädt,") ||
    stop.name.startsWith("Germendorf,") ||
    stop.name.startsWith("Glienicke/Nordbahn,") ||
    stop.name.startsWith("Hennigsdorf,") ||
    stop.name.startsWith("Hohen Neuendorf,") ||
    stop.name.startsWith("Leegebruch,") ||
    stop.name.startsWith("Marwitz,") ||
    stop.name.startsWith("Mönchmühle,") ||
    stop.name.startsWith("Mühlenbeck,") ||
    stop.name.startsWith("Neu-Vehlefanz") ||
    stop.name.startsWith("Nieder Neuendorf,") ||
    stop.name.startsWith("Oranienburg,") ||
    stop.name.startsWith("Pinnow (bei Velten)") ||
    stop.name.startsWith("Sachsenhausen,") ||
    stop.name.startsWith("Schildow,") ||
    stop.name.startsWith("Schmachtenhagen (OHV),") ||
    stop.name.startsWith("Schönfließ (OHV),") ||
    stop.name.startsWith("Stolpe (OHV),") ||
    stop.name.startsWith("Summt,") ||
    stop.name.startsWith("Vehlefanz,") ||
    stop.name.startsWith("Velten,") ||
    stop.name.startsWith("Wensickendorf,") ||
    stop.name.startsWith("Wolfslake") ||
    stop.name.startsWith("Zühlsdorf") ||
    stop.name.startsWith("Zühlslake")
);
export { stations, stops };
