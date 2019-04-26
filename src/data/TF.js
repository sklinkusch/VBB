import stopsUnsorted from "./unsorted";

const stations = stopsUnsorted.filter(
  stop => stop.name.includes("S Mahlow") || stop.name.includes("S Blankenfelde")
);
const stops = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("Ahrensdorf (bei Ludwigsfelde),") ||
    stop.name.endsWith("(Heinersdorf)") ||
    stop.name.startsWith("Blankenfelde,") ||
    stop.name.startsWith("Blankenfelde (TF),") ||
    stop.name.startsWith("Dahlewitz,") ||
    stop.name.startsWith("Diedersdorf (TF),") ||
    stop.name.startsWith("Genshagen,") ||
    stop.name.startsWith("Glasow,") ||
    stop.name.startsWith("Glienick,") ||
    stop.name.startsWith("Gröben,") ||
    stop.name.startsWith("Groß Kienitz,") ||
    stop.name.startsWith("Groß Machnow,") ||
    stop.name.startsWith("Groß Schulzendorf,") ||
    stop.name.startsWith("Großbeeren,") ||
    stop.name.startsWith("Großbeuthen,") ||
    stop.name.startsWith("Heinersdorf (TF)") ||
    stop.name.startsWith("Jühnsdorf,") ||
    stop.name.startsWith("Jütchendorf,") ||
    stop.name.startsWith("Kerzendorf,") ||
    stop.name.startsWith("Klein Kienitz,") ||
    stop.name.startsWith("Kleinbeeren,") ||
    stop.name.startsWith("Kleinbeuthen,") ||
    stop.name.startsWith("Löwenbruch,") ||
    stop.name.startsWith("Ludwigsfelde,") ||
    stop.name.startsWith("Mahlow,") ||
    stop.name.startsWith("Mietgendorf,") ||
    stop.name.startsWith("Neubeeren,") ||
    stop.name.startsWith("Rangsdorf,") ||
    stop.name.startsWith("Schiaß,") ||
    stop.name.startsWith("Siethen,") ||
    stop.name.startsWith("Werben (TF),") ||
    stop.name.startsWith("Wietstock,")
);

export { stations, stops };
