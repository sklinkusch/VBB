import { remainingStops as stopsUnsorted } from "./OPR";

const stops = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("Allmosen,") ||
    stop.name.startsWith("Altdöbern,") ||
    stop.name === "Amandusdorf" ||
    stop.name.startsWith("Annahütte,") ||
    stop.name.startsWith("Arnsdorf,") ||
    stop.name.startsWith("Bahnsdorf (OSL)") ||
    stop.name === "Barzig" ||
    stop.name.startsWith("Bathow,") ||
    stop.name === "Belten" ||
    stop.name.startsWith("Belten,") ||
    stop.name === "Biehlen" ||
    stop.name.startsWith("Bischdorf,") ||
    stop.name.startsWith("Boblitz,") ||
    stop.name === "Bolschwitz" ||
    stop.name.startsWith("Briesen (bei Missen)") ||
    stop.name.startsWith("Brieske,") ||
    stop.name.startsWith("Brieske Ost,") ||
    stop.name === "Bronkow" ||
    stop.name.startsWith("Buchwäldchen,") ||
    stop.name.startsWith("Buchwalde,") ||
    stop.name === "Buckow (OSL)" ||
    stop.name.startsWith("Burkersdorf,") ||
    stop.name === "Cabel" ||
    stop.name.startsWith("Calau,") ||
    stop.name.startsWith("Chransdorf,") ||
    stop.name === "Craupe" ||
    stop.name === "Dörrwalde" ||
    stop.name.startsWith("Dörrwalde,") ||
    stop.name.startsWith("Drochow,") ||
    stop.name === "Eisdorf" ||
    stop.name === "Fleißdorf" ||
    stop.name === "Frauendorf, Oberdorf" ||
    stop.name === "Frauendorf, Unterdorf" ||
    stop.name === "Frauendorf, Lindenauer Str." ||
    stop.name.startsWith("Frauwalde,") ||
    stop.name.startsWith("Freienhufen,") ||
    stop.name === "Gahlen" ||
    stop.name.startsWith("Gahlen,") ||
    stop.name.startsWith("Gollmitz,") ||
    stop.name.startsWith("Göritz (OSL)") ||
    stop.name === "Gosda (bei Bronkow)" ||
    stop.name === "Groß Beuchow" ||
    stop.name === "Groß Jehser" ||
    stop.name.startsWith("Groß Jehser,") ||
    stop.name === "Groß Klessow" ||
    stop.name.startsWith("Groß Lübbenau,") ||
    stop.name.startsWith("Groß Mehßow,") ||
    stop.name === "Groß Radden" ||
    stop.name.startsWith("Groß Radden,") ||
    stop.name === "Großkmehlen" ||
    stop.name.startsWith("Großkmehlen,") ||
    stop.name.startsWith("Großkoschen,") ||
    stop.name.startsWith("Großräschen,") ||
    stop.name.startsWith("Grünewald,") ||
    stop.name.startsWith("Grünewalde,") ||
    stop.name.startsWith("Guteborn,") ||
    stop.name.startsWith("Hermsdorf,") ||
    stop.name.startsWith("Hindenberg (OSL)") ||
    stop.name.startsWith("Hohenbocka,") ||
    stop.name.startsWith("Hörlitz,") ||
    stop.name.startsWith("Hosena,") ||
    stop.name.startsWith("Jannowitz,") ||
    stop.name === "Kalkwitz" ||
    stop.name === "Kemmen" ||
    stop.name.startsWith("Kittlitz,") ||
    stop.name === "Klein Beuchow" ||
    stop.name === "Klein Klessow" ||
    stop.name === "Klein Mehßow" ||
    stop.name === "Klein Radden" ||
    stop.name === "Kleinkmehlen" ||
    stop.name.startsWith("Kleinkmehlen,") ||
    stop.name.startsWith("Kleinkoschen,") ||
    stop.name.startsWith("Kleinleipisch,") ||
    stop.name.startsWith("Klettwitz,") ||
    stop.name.startsWith("Koßwig,") ||
    stop.name.startsWith("Kostebrau,") ||
    stop.name.startsWith("Krimnitz,") ||
    stop.name.startsWith("Kroppen,") ||
    stop.name.startsWith("Laasow,") ||
    stop.name.startsWith("Lauchhammer Mitte,") ||
    stop.name.startsWith("Lauchhammer Ost,") ||
    stop.name.startsWith("Lauchhammer Süd,") ||
    stop.name.startsWith("Lauchhammer West,") ||
    stop.name === "Leeskow" ||
    stop.name.startsWith("Leipe,") ||
    stop.name === "Lichtenau" ||
    stop.name.startsWith("Lieske,") ||
    stop.name === "Lindchen" ||
    stop.name.startsWith("Lindenau,") ||
    stop.name.startsWith("Lipsa,") ||
    stop.name.startsWith("Lipten,") ||
    stop.name.startsWith("Lübbenau,") ||
    stop.name === "Lubochow" ||
    stop.name === "Luckaitz" ||
    stop.name.startsWith("Luckaitztal,") ||
    stop.name === "Lug" ||
    stop.name.startsWith("Lug,") ||
    stop.name === "Mallenchen" ||
    stop.name.startsWith("Meuro,") ||
    stop.name.startsWith("Missen,") ||
    stop.name === "Mlode" ||
    stop.name.startsWith("Mlode,") ||
    stop.name.startsWith("Muckwar,") ||
    stop.name.startsWith("Naundorf (bei Vetschau)") ||
    stop.name === "Neudöbern" ||
    stop.name.startsWith("Neupetershain,") ||
    stop.name.startsWith("Niemtsch,") ||
    stop.name === "Ogrosen" ||
    stop.name.startsWith("Ogrosen,") ||
    stop.name.startsWith("Ortrand,") ||
    stop.name.startsWith("Peickwitz,") ||
    stop.name === "Peitzendorf" ||
    stop.name === "Plieskendorf" ||
    stop.name.startsWith("Pritzen,") ||
    stop.name.startsWith("Raddusch,") ||
    stop.name.startsWith("Radensdorf (bei Calau)") ||
    stop.name.startsWith("Ragow (OSL)") ||
    stop.name.startsWith("Ranzow,") ||
    stop.name.startsWith("Reddern,") ||
    stop.name.startsWith("Repten") ||
    stop.name.startsWith("Ressen,") ||
    stop.name === "Rettchensdorf" ||
    stop.name === "Reuden" ||
    stop.name.startsWith("Ruhland,") ||
    stop.name === "Rutzkau" ||
    stop.name === "Saadow" ||
    stop.name.startsWith("Saalhausen,") ||
    stop.name.startsWith("Säritz,") ||
    stop.name.startsWith("Saßleben,") ||
    stop.name.startsWith("Schipkau,") ||
    stop.name === "Schöllnitz" ||
    stop.name === "Schönfeld (bei Lübbenau)" ||
    stop.name === "Schrakau" ||
    stop.name.startsWith("Schwarzbach,") ||
    stop.name.startsWith("Schwarzheide,") ||
    stop.name.startsWith("Schwarzheide Ost,") ||
    stop.name.startsWith("Sedlitz,") ||
    stop.name === "SeeCampus (NL)" ||
    stop.name === "Seese Ost" ||
    stop.name === "Sella" ||
    stop.name.startsWith("Senftenberg,") ||
    stop.name === "Settinchen" ||
    stop.name === "Stradow" ||
    stop.name.startsWith("Suschow,") ||
    stop.name.startsWith("Suschow Süd,") ||
    stop.name.startsWith("Tettau,") ||
    stop.name === "Tornitz" ||
    stop.name.startsWith("Vetschau,") ||
    stop.name === "Weißag" ||
    stop.name === "Werchow" ||
    stop.name.startsWith("Wormlage,") ||
    stop.name === "Woschkow" ||
    stop.name.startsWith("Woschkow,") ||
    stop.name === "Wüstenhain" ||
    stop.name.startsWith("Zerkwitz,") ||
    stop.name === "Zinnitz" ||
    stop.name === "Zwietow"
);
const remainingStops = stopsUnsorted.filter(stop => stops.indexOf(stop) === -1);
// console.log(`after OSL: ${remainingStops.length}`);

export { stops, remainingStops };
