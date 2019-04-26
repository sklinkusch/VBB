import stopsUnsorted from "./unsorted";

const stations = stopsUnsorted.filter(
  stop => stop.name.includes("S Mahlow") || stop.name.includes("S Blankenfelde")
);
const stops = stopsUnsorted.filter(
  stop =>
    // Ludwigsfelde
    stop.name.startsWith("Ludwigsfelde,") ||
    stop.name.startsWith("Ahrensdorf (bei Ludwigsfelde),") ||
    stop.name.startsWith("Genshagen,") ||
    stop.name.startsWith("Gröben,") ||
    stop.name.startsWith("Groß Schulzendorf,") ||
    stop.name.startsWith("Jütchendorf,") ||
    stop.name.startsWith("Kerzendorf,") ||
    stop.name.startsWith("Löwenbruch,") ||
    stop.name.startsWith("Mietgendorf,") ||
    stop.name.startsWith("Schiaß,") ||
    stop.name.startsWith("Siethen,") ||
    stop.name.startsWith("Wietstock,") ||
    // Trebbin
    stop.name.startsWith("Trebbin,") ||
    stop.name.startsWith("Blankensee (TF),") ||
    stop.name.startsWith("Christinendorf,") ||
    stop.name.startsWith("Glau,") ||
    stop.name.startsWith("Großbeuthen,") ||
    stop.name.startsWith("Kleinbeuthen,") ||
    stop.name.startsWith("Klein Schulzendorf,") ||
    stop.name.startsWith("Kliestow,") ||
    stop.name.startsWith("Löwendorf,") ||
    stop.name.startsWith("Lüdersdorf (TF),") ||
    stop.name.startsWith("Märkisch Wilmersdorf,") ||
    stop.name.startsWith("Schönhagen (TF),") ||
    stop.name.startsWith("Stangenhagen,") ||
    stop.name.startsWith("Thyrow,") ||
    stop.name.startsWith("Wiesenhagen,") ||
    stop.name.startsWith("Priedel")
);

export { stations, stops };
