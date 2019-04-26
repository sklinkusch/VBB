import stopsUnsorted from "./unsorted";

const stations = stopsUnsorted.filter(stop =>
  stop.name.includes("S Teltow Stadt")
);
const stops = stopsUnsorted.filter(
  stop =>
    // Stahnsdorf
    stop.name.startsWith("Güterfelde,") ||
    stop.name.startsWith("Schenkenhorst,") ||
    stop.name.startsWith("Sputendorf,") ||
    stop.name.startsWith("Stahnsdorf,") ||
    // Kleinmachnow
    stop.name.startsWith("Kleinmachnow,") ||
    // Teltow
    stop.name.startsWith("Teltow,") ||
    stop.name.includes("Teltow Stadt") ||
    // Nuthetal
    stop.name.startsWith("Bergholz-Rehbrücke,") ||
    stop.name.startsWith("Fahlhorst,") ||
    stop.name.startsWith("Nudow,") ||
    stop.name === "Philippsthal" ||
    stop.name.startsWith("Saarmund,") ||
    stop.name.startsWith("Tremsdorf,") ||
    // Michendorf
    stop.name.startsWith("Fresdorf,") ||
    stop.name.startsWith("Langerwisch,") ||
    stop.name.startsWith("Langerwisch-Süd,") ||
    stop.name.startsWith("Michendorf,") ||
    stop.name.startsWith("Wildenbruch,") ||
    stop.name.startsWith("Wilhelmshorst,") ||
    // Seddiner See
    stop.name.startsWith("Kähnsdorf,") ||
    stop.name.startsWith("Neuseddin,") ||
    stop.name.startsWith("Seddin (PM),") ||
    stop.name === "Seddin, Jägerhof" ||
    // Schwielowsee
    stop.name.startsWith("Caputh-Geltow,") ||
    stop.name.startsWith("Caputh,") ||
    stop.name.startsWith("Ferch-Lienewitz,") ||
    stop.name.startsWith("Ferch,") ||
    stop.name.startsWith("Geltow,") ||
    stop.name.startsWith("Wildpark-West,") ||
    // Werder (Havel)
    stop.name.startsWith("Werder (Havel),") ||
    stop.name.startsWith("Bliesendorf,") ||
    stop.name.startsWith("Derwitz,") ||
    stop.name.startsWith("Glindow,") ||
    stop.name.startsWith("Kemnitz (PM),") ||
    stop.name.startsWith("Petzow,") ||
    stop.name.startsWith("Phöben,") ||
    stop.name.startsWith("Plötzin,") ||
    stop.name.startsWith("Neu Plötzin,") ||
    stop.name.startsWith("Plessow,") ||
    stop.name.startsWith("Töplitz,") ||
    stop.name.startsWith("Leest,") ||
    stop.name.startsWith("Neu Töplitz,")
);
export { stations, stops };
