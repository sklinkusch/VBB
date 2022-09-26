import { remainingStops as stopsUnsorted } from "./B";

type Stop = {
  id: string,
  name: string
}

const stations = stopsUnsorted.filter(
  (stop: Stop) =>
    stop.name.startsWith("S Röntgental") ||
    stop.name.startsWith("S Zepernick") ||
    stop.name.startsWith("S Bernau-Friedenstal") ||
    stop.name.startsWith("S Bernau")
);

const remainingAfterStations = stopsUnsorted.filter(
  (stop: Stop) => stations.indexOf(stop) === -1
);

const stops = remainingAfterStations.filter(
  (stop: Stop) =>
    // Berlin C
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
    stop.name.startsWith("Ladeburg,") ||
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
    stop.name.startsWith("Zepernick,") ||
    // Weitere
    stop.name.startsWith("Althüttendorf,") ||
    stop.name.startsWith("Altenhof,") ||
    stop.name.startsWith("Biesenthal,") ||
    stop.name.startsWith("Brandenb. Viertel,") ||
    stop.name.startsWith("Britz,") ||
    stop.name.startsWith("Brodowin,") ||
    stop.name.startsWith("Chorin,") ||
    stop.name.startsWith("Eberswalde,") ||
    stop.name.startsWith("Eichhorst,") ||
    stop.name.startsWith("Finow,") ||
    stop.name.startsWith("Finowfurt,") ||
    stop.name.startsWith("Friedrichswalde,") ||
    stop.name.startsWith("Glambeck (BAR)") ||
    stop.name.startsWith("Golzow (BAR)") ||
    stop.name.startsWith("Groß Schönebeck,") ||
    stop.name.startsWith("Groß-Ziethen (BAR)") ||
    stop.name.startsWith("Grüntal,") ||
    stop.name === "Hirschfelde, Dorf" ||
    stop.name === "Hirschfelde, Am Trafo" ||
    stop.name.startsWith("Hohenfinow,") ||
    stop.name.startsWith("Joachimsthal,") ||
    stop.name.startsWith("Klandorf,") ||
    stop.name.startsWith("Klein Ziethen (BAR)") ||
    stop.name === "Klobbicke" ||
    stop.name.startsWith("Klosterfelde,") ||
    stop.name.startsWith("Lanke,") ||
    stop.name.startsWith("Lichterfelde (BAR)") ||
    stop.name.startsWith("Liepe (BAR)") ||
    stop.name.startsWith("Lottschesee,") ||
    stop.name.startsWith("Lüdersdorf (bei Oderberg)") ||
    stop.name.startsWith("Luisenfelde,") ||
    stop.name.startsWith("Lunow,") ||
    stop.name.startsWith("Marienwerder,") ||
    stop.name.startsWith("Melchow,") ||
    stop.name === "Neudorf (bei Prenden)" ||
    stop.name.startsWith("Neuehütte,") ||
    stop.name === "Neugrimnitz" ||
    stop.name.startsWith("Niederfinow,") ||
    stop.name.startsWith("Oderberg,") ||
    stop.name.startsWith("Neuendorf (bei Oderberg)") ||
    stop.name === "Parlow" ||
    stop.name === "Parstein" ||
    stop.name.startsWith("Prenden,") ||
    stop.name.startsWith("Ruhlsdorf (BAR)") ||
    stop.name.startsWith("Ruhlsdorf-Zerpenschleuse") ||
    stop.name.startsWith("Sandkrug,") ||
    stop.name.startsWith("Schönfeld (BAR)") ||
    stop.name.startsWith("Schönholz (BAR)") ||
    stop.name.startsWith("Senftenhütte") ||
    stop.name.startsWith("Serwest,") ||
    stop.name.startsWith("Sommerfelde,") ||
    stop.name === "Sophienstädt" ||
    stop.name.startsWith("Spechthausen,") ||
    stop.name.startsWith("Stolzenhagen (bei Oderberg)") ||
    stop.name.startsWith("Struwenberg,") ||
    stop.name.startsWith("Tempelfelde,") ||
    stop.name.startsWith("Tiefensee,") ||
    stop.name === "Tornow (BAR)" ||
    stop.name.startsWith("Trampe (BAR)") ||
    stop.name === "Tuchen" ||
    stop.name.startsWith("Ützdorf,") ||
    stop.name.startsWith("Werbellin,") ||
    stop.name.startsWith("Werftpfuhl,") ||
    stop.name.startsWith("Zerpenschleuse,")
);

const remainingStops = remainingAfterStations.filter(
  (stop: Stop) => stops.indexOf(stop) === -1
);
// console.log(`after BAR: ${remainingStops.length}`);
export { stations, stops, remainingStops };
