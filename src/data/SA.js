import { remainingStops as stopsUnsorted } from "./MV";

const stops = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("Angern-Rogätz,") ||
    stop.name.startsWith("Annaburg,") ||
    stop.name === "Bergwitz" ||
    stop.name.startsWith("Biederitz,") ||
    stop.name.startsWith("Bitterfeld,") ||
    stop.name === "Brehna" ||
    stop.name.startsWith("Bülzig,") ||
    stop.name.startsWith("Burg (bei Magdeburg)") ||
    stop.name === "Burgkemnitz" ||
    stop.name.startsWith("Coswig (Anhalt)") ||
    stop.name.startsWith("Demker,") ||
    stop.name.startsWith("Dessau,") ||
    stop.name === "Dessau-Süd" ||
    stop.name.startsWith("Eichstedt (Altmark)") ||
    stop.name.startsWith("Elster (Elbe)") ||
    stop.name.startsWith("Geestgottberg,") ||
    stop.name.startsWith("Genthin,") ||
    stop.name.startsWith("Gerwisch,") ||
    stop.name.startsWith("Goldbeck (bei Osterburg)") ||
    stop.name === "Gräfenhainichen" ||
    stop.name === "Greppin" ||
    stop.name.startsWith("Griebo,") ||
    stop.name.startsWith("Güsen,") ||
    stop.name.startsWith("Halle (Saale)") ||
    stop.name.startsWith("Hämerten,") ||
    stop.name === "Hohenthurm" ||
    stop.name.startsWith("Holzdorf,") ||
    stop.name.startsWith("Jeber-Bergfrieden,") ||
    stop.name === "Jeßnitz(Anh)" ||
    stop.name.startsWith("Jessen (Elster)") ||
    stop.name.startsWith("Klieken,") ||
    stop.name === "Landsberg(b. Halle/Saale)" ||
    stop.name.startsWith("Linda (Elster)") ||
    stop.name.startsWith("Lutherstadt Wittenberg,") ||
    stop.name.startsWith("Magdeburg,") ||
    stop.name.startsWith("Magdeburg-Neustadt,") ||
    stop.name.startsWith("Mahlwinkel,") ||
    stop.name.startsWith("Meinsdorf (bei Roßlau)") ||
    stop.name.startsWith("Möser,") ||
    stop.name.startsWith("Mühlanger,") ||
    stop.name === "Muldenstein" ||
    stop.name.startsWith("Osterburg,") ||
    stop.name === "Petersroda" ||
    stop.name === "Pratau" ||
    stop.name === "Radis" ||
    stop.name === "Roitzsch(Bitterf)" ||
    stop.name.startsWith("Roßlau,") ||
    stop.name === "Schollene" ||
    stop.name === "Schönebeck(Elbe)" ||
    stop.name === "Schönebeck Süd" ||
    stop.name.startsWith("Schönebeck-") ||
    stop.name.startsWith("Schönhausen (Elbe)") ||
    stop.name.startsWith("Seehausen (Altmark)") ||
    stop.name.startsWith("Stendal,") ||
    stop.name.startsWith("Tangerhütte,") ||
    stop.name === "Wolfen(Bitterfeld)" ||
    stop.name.startsWith("Wolmirstedt,") ||
    stop.name.startsWith("Zahna,") ||
    stop.name.startsWith("Zielitz,") ||
    stop.name.startsWith("Zörnigall,")
);

const remainingStops = stopsUnsorted.filter(stop => stops.indexOf(stop) === -1);

console.log(`after SA: ${remainingStops.length}`);
// console.log(remainingStops);
export { stops, remainingStops };
