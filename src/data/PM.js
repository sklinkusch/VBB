import stopsUnsorted from "./unsorted";

const stations = stopsUnsorted.filter(stop =>
  stop.name.includes("S Teltow Stadt")
);
const stops = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("Bergholz-Rehbrücke,") ||
    stop.name.startsWith("Bliesendorf,") ||
    stop.name.startsWith("Caputh,") ||
    stop.name.startsWith("Caputh-Geltow,") ||
    stop.name.startsWith("Fahlhorst,") ||
    stop.name.startsWith("Ferch,") ||
    stop.name.startsWith("Ferch-Lienewitz,") ||
    stop.name.startsWith("Fresdorf,") ||
    stop.name.startsWith("Geltow,") ||
    stop.name.startsWith("Glindow,") ||
    stop.name.startsWith("Güterfelde,") ||
    stop.name.startsWith("Kleinmachnow,") ||
    stop.name.startsWith("Langerwisch,") ||
    stop.name.startsWith("Langerwisch-Süd,") ||
    stop.name.startsWith("Leest,") ||
    stop.name.startsWith("Michendorf,") ||
    stop.name.startsWith("Neu Töplitz,") ||
    stop.name.startsWith("Neuseddin,") ||
    stop.name.startsWith("Nudow,") ||
    stop.name.startsWith("Petzow,") ||
    stop.name.startsWith("Philippsthal,") ||
    stop.name.startsWith("Saarmund,") ||
    stop.name.startsWith("Schenkenhorst,") ||
    stop.name === "Seddin (PM), Bahnhof" ||
    stop.name.startsWith("Sputendorf,") ||
    stop.name.startsWith("Stahnsdorf,") ||
    stop.name.startsWith("Teltow,") ||
    stop.name.startsWith("Töplitz,") ||
    stop.name.startsWith("Werder (Havel),") ||
    stop.name.startsWith("Wildpark-West,") ||
    stop.name.startsWith("Wilhelmshorst,")
);
export { stations, stops };
