import stopsUnsorted from "./unsorted";

const stations = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("S Birkenstein") ||
    stop.name.startsWith("S Hoppegarten") ||
    stop.name.startsWith("S Neuenhagen") ||
    stop.name.startsWith("S Fredersdorf") ||
    stop.name.startsWith("S Petershagen Nord") ||
    stop.name.startsWith("S Strausberg") ||
    stop.name.startsWith("S Hegermühle")
);
const stops = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("Altlandsberg,") ||
    stop.name.startsWith("Bruchmühle,") ||
    stop.name.startsWith("Buchholz (MOL),") ||
    stop.name.startsWith("Eggersdorf (Strausberg),") ||
    stop.name.startsWith("Fredersdorf (MOL),") ||
    stop.name.startsWith("Gielsdorf,") ||
    stop.name.startsWith("Hennickendorf (MOL),") ||
    stop.name.startsWith("Herzfelde (MOL),") ||
    stop.name.startsWith("Hönow,") ||
    stop.name.startsWith("Hoppegarten,") ||
    stop.name.startsWith("Münchehofe (bei Dahlwitz-Hoppegarten)") ||
    stop.name.startsWith("Neuenhagen,") ||
    stop.name.startsWith("Petershagen (b. Berlin)") ||
    stop.name.startsWith("Rüdersdorf,") ||
    stop.name.startsWith("Alt Rüdersdorf,") ||
    stop.name.startsWith("Seeberg (MOL)") ||
    stop.name.startsWith("Strausberg,") ||
    stop.name.startsWith("Vogelsdorf,") ||
    stop.name.startsWith("Waldesruh") ||
    stop.name.startsWith("Wegendorf,") ||
    stop.name.startsWith("Wesendahl") ||
    stop.name.startsWith("Wilkendorf")
);

export { stations, stops };
