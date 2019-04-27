import stopsUnsorted from "./unsorted";

const stations = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("S Röntgental") ||
    stop.name.startsWith("S Zepernick") ||
    stop.name.startsWith("S Bernau-Friedenstal") ||
    stop.name.startsWith("S Bernau")
);
const stops = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("Ahrensfelde,") ||
    stop.name.startsWith("Albertshof (BAR)") ||
    stop.name.startsWith("Basdorf (BAR)") ||
    stop.name.startsWith("Bernau,") ||
    stop.name.startsWith("Birkenhöhe,") ||
    stop.name.startsWith("Birkholz (BAR)") ||
    stop.name.startsWith("Birkholzaue,") ||
    stop.name.startsWith("Blumberg (BAR),") ||
    stop.name.startsWith("Börnicke (BAR)") ||
    stop.name.startsWith("Danewitz") ||
    stop.name.startsWith("Eiche,") ||
    stop.name.startsWith("Elisenau,") ||
    stop.name.startsWith("Gorinsee,") ||
    stop.name === "Hobrechtsfelde" ||
    stop.name.startsWith("Krummensee (BAR)") ||
    stop.name.startsWith("Lindenberg (BAR)") ||
    stop.name.startsWith("Lobetal,") ||
    stop.name.startsWith("Löhme,") ||
    stop.name.startsWith("Mehrow,") ||
    stop.name.startsWith("Neu-Lindenberg") ||
    stop.name.startsWith("Rüdnitz,") ||
    stop.name.startsWith("Schmetzdorf (BAR)") ||
    stop.name.startsWith("Schönerlinde (BAR)") ||
    stop.name.startsWith("Schönow (BAR),") ||
    stop.name.startsWith("Schönwalde (BAR)") ||
    stop.name.startsWith("Schwanebeck (BAR)") ||
    stop.name.startsWith("Seefeld,") ||
    stop.name.startsWith("Seefeld (Mark)") ||
    stop.name.startsWith("Stolzenhagen,") ||
    stop.name.startsWith("Stolzenhagen (bei Wandlitz)") ||
    stop.name.startsWith("Wandlitz,") ||
    stop.name.startsWith("Weesow") ||
    stop.name.startsWith("Werneuchen,") ||
    stop.name === "Willmersdorf (BAR)" ||
    stop.name.startsWith("Willmersdorf,") ||
    stop.name.startsWith("Zepernick,")
);
export { stations, stops };
