import stopsUnsorted from "./unsorted";

const stops = stopsUnsorted.filter(
  stop =>
    stop.name === "Atterwasch" ||
    stop.name === "Auras" ||
    stop.name === "Babow" ||
    stop.name.startsWith("Bagenz,") ||
    stop.name === "Bärenbrück" ||
    stop.name.startsWith("Bärenklau (SPN)") ||
    stop.name.startsWith("Bloischdorf,") ||
    stop.name === "Bohrau" ||
    stop.name.startsWith("Bohsdorf,") ||
    stop.name === "Brahmow" ||
    stop.name === "Bresinchen" ||
    stop.name.startsWith("Briesen (SPN)") ||
    stop.name.startsWith("Briesnig,") ||
    stop.name === "Brodtkowitz" ||
    stop.name === "Bühlow" ||
    stop.name.startsWith("Bühlow,") ||
    stop.name.startsWith("Burg,") ||
    stop.name === "Casel" ||
    stop.name.startsWith("Dahlitz,") ||
    stop.name.startsWith("Deulowitz,") ||
    stop.name.startsWith("Dissen,") ||
    stop.name.startsWith("Döbern,") ||
    stop.name === "Domsdorf (bei Drebkau)" ||
    stop.name.startsWith("Drachhausen,") ||
    stop.name.startsWith("Drebkau,") ||
    stop.name.startsWith("Drehnow,") ||
    stop.name.startsWith("Drewitz,") ||
    stop.name.startsWith("Drieschnitz,") ||
    stop.name.startsWith("Dubrau,") ||
    stop.name.startsWith("Eichow,") ||
    stop.name.startsWith("Eichwege,") ||
    stop.name.startsWith("Fehrow,") ||
    stop.name.startsWith("Forst,") ||
    stop.name === "Frauendorf, Nord" ||
    stop.name === "Frauendorf, Waldstr." ||
    stop.name.startsWith("Friedrichshain,") ||
    stop.name.startsWith("Gablenz,") ||
    stop.name === "Gahry" ||
    stop.name.startsWith("Gahry,") ||
    stop.name.startsWith("Glinzig,") ||
    stop.name.startsWith("Golschow,") ||
    stop.name.startsWith("Gosda (bei Döbern)") ||
    stop.name.startsWith("Gosda (bei Klinge)") ||
    stop.name.startsWith("Grabko,") ||
    stop.name.startsWith("Grano,") ||
    stop.name.startsWith("Graustein,") ||
    stop.name.startsWith("Greifenhain,") ||
    stop.name.startsWith("Grießen,") ||
    stop.name === "Groß Bademeusel" ||
    stop.name.startsWith("Groß Breesen,") ||
    stop.name.startsWith("Groß Döbbern,") ||
    stop.name.startsWith("Groß Drewitz,") ||
    stop.name === "Groß Gastrose" ||
    stop.name.startsWith("Groß Gastrose,") ||
    stop.name.startsWith("Groß Jamno,") ||
    stop.name.startsWith("Groß Kölzig,") ||
    stop.name.startsWith("Groß Luja,") ||
    stop.name.startsWith("Groß Oßnig,") ||
    stop.name.startsWith("Groß Schacksdorf,") ||
    stop.name.startsWith("Groß See,") ||
    stop.name.startsWith("Guben,") ||
    stop.name === "Guhrow" ||
    stop.name.startsWith("Guhrow,") ||
    stop.name.startsWith("Gulben,") ||
    stop.name.startsWith("Heinersbrück,") ||
    stop.name.startsWith("Horlitza,") ||
    stop.name.startsWith("Hornow,") ||
    stop.name.startsWith("Illmersdorf,") ||
    stop.name.startsWith("Jämlitz,") ||
    stop.name.startsWith("Jänschwalde,") ||
    stop.name.startsWith("Kraftwerk Jänschwalde,") ||
    stop.name.startsWith("Tagebau Jänschwalde,") ||
    stop.name.startsWith("Jehserig,") ||
    stop.name.startsWith("Jerischke,") ||
    stop.name.startsWith("Jethe,") ||
    stop.name.startsWith("Jocksdorf,") ||
    stop.name === "Kackrow" ||
    stop.name.startsWith("Kahsel,") ||
    stop.name === "Karlsfeld" ||
    stop.name.startsWith("Karlsfeld,") ||
    stop.name.startsWith("Kathlow,") ||
    stop.name.startsWith("Kerkwitz,") ||
    stop.name === "Klein Bademeusel" ||
    stop.name.startsWith("Klein Döbbern,") ||
    stop.name.startsWith("Klein Gastrose,") ||
    stop.name === "Klein Jamno" ||
    stop.name.startsWith("Klein Jamno,") ||
    stop.name.startsWith("Klein Kölzig,") ||
    stop.name === "Klein Limberg" ||
    stop.name.startsWith("Klein Loitz,") ||
    stop.name === "Klein Oßnig" ||
    stop.name === "Klinge" ||
    stop.name.startsWith("Klinge,") ||
    stop.name.startsWith("Komptendorf,") ||
    stop.name.startsWith("Koppatz,") ||
    stop.name.startsWith("Koschendorf,") ||
    stop.name.startsWith("Krayne,") ||
    stop.name.startsWith("Krieschow,") ||
    stop.name.startsWith("Kunersdorf (SPN)") ||
    stop.name.startsWith("Laubsdorf,") ||
    stop.name === "Laubst" ||
    stop.name.startsWith("Lauschütz,") ||
    stop.name.startsWith("Leuthen,") ||
    stop.name.startsWith("Lieskau,") ||
    stop.name.startsWith("Limberg,") ||
    stop.name.startsWith("Löschen,") ||
    stop.name.startsWith("Lübbinchen,") ||
    stop.name.startsWith("Mattendorf,") ||
    stop.name.startsWith("Maust,") ||
    stop.name.startsWith("Milkersdorf,") ||
    stop.name === "Muckrow" ||
    stop.name === "Mulknitz" ||
    stop.name.startsWith("Müschen,")
);

export { stops };
