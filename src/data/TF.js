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
    stop.name.startsWith("Wietstock,")
);

export { stations, stops };
