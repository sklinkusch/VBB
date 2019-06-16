import { remainingStops as stopsUnsorted } from "./LDS";

const stations = stopsUnsorted.filter(stop => stop.name.includes("S Erkner"));
const remainingAfterStations = stopsUnsorted.filter(
  stop => stations.indexOf(stop) === -1
);
const stops = remainingAfterStations.filter(
  stop =>
    // Berlin C
    stop.name.startsWith("Erkner,") ||
    stop.name.startsWith("Gosen,") ||
    stop.name.startsWith("Grünheide,") ||
    stop.name.startsWith("Neu Zittau,") ||
    stop.name.startsWith("Schöneiche (bei Berlin),") ||
    stop.name.startsWith("Steinfurt,") ||
    stop.name.startsWith("Woltersdorf (LOS),") ||
    // Sonstige
    stop.name.startsWith("Ahrensdorf (LOS)") ||
    stop.name === "Alt Golm (LOS)" ||
    stop.name.startsWith("Alt Golm,") ||
    stop.name.startsWith("Alt Madlitz,") ||
    stop.name === "Alt Stahnsdorf" ||
    stop.name.startsWith("Arensdorf,") ||
    stop.name === "Aurith" ||
    stop.name.startsWith("Bad Saarow,") ||
    stop.name === "Bahro" ||
    stop.name.startsWith("Beerfelde,") ||
    stop.name.startsWith("Beeskow,") ||
    stop.name === "Behrensdorf" ||
    stop.name.startsWith("Berkenbrück (LOS)") ||
    stop.name === "Biegen" ||
    stop.name.startsWith("Biegenbrück,") ||
    stop.name.startsWith("Birkholz (LOS)") ||
    stop.name.startsWith("Bomsdorf,") ||
    stop.name.startsWith("Bornow,") ||
    stop.name.startsWith("Braunsdorf,") ||
    stop.name.startsWith("Bremsdorf,") ||
    stop.name.startsWith("Breslack,") ||
    stop.name === "Briescht" ||
    stop.name.startsWith("Briesen (Mark)") ||
    stop.name.startsWith("Brieskow-Finkenheerd,") ||
    stop.name.startsWith("Buchholz (LOS)") ||
    stop.name.startsWith("Buckow (bei Beeskow)") ||
    stop.name.startsWith("Bugk,") ||
    stop.name === "Chossewitz" ||
    stop.name.startsWith("Coschen,") ||
    stop.name === "Dahmsdorf (LOS)" ||
    stop.name === "Dammendorf" ||
    stop.name.startsWith("Demnitz,") ||
    stop.name.startsWith("Diensdorf-Radlow,") ||
    stop.name.startsWith("Drahendorf,") ||
    stop.name === "Dubrow" ||
    stop.name.startsWith("Eisenhüttenstadt,") ||
    stop.name.startsWith("Falkenberg (bei Beeskow)") ||
    stop.name.startsWith("Falkenberg (bei Briesen)") ||
    stop.name.startsWith("Friedland,") ||
    stop.name === "Fuhrmannsruh" ||
    stop.name.startsWith("Fünfeichen,") ||
    stop.name.startsWith("Fürstenwalde,") ||
    stop.name === "Giesensdorf (LOS)" ||
    stop.name.startsWith("Glienicke (LOS)") ||
    stop.name === "Glowe" ||
    stop.name === "Göhlen" ||
    stop.name === "Gölsdorf (LOS)" ||
    stop.name === "Görsdorf (bei Beeskow)" ||
    stop.name === "Görsdorf (bei Storkow)" ||
    stop.name.startsWith("Görzig,") ||
    stop.name === "Groß Briesen (LOS)" ||
    stop.name === "Groß Eichholz" ||
    stop.name.startsWith("Groß Lindow,") ||
    stop.name.startsWith("Groß Muckrow,") ||
    stop.name === "Groß Rietz" ||
    stop.name === "Groß Schauen" ||
    stop.name.startsWith("Groß Schauen,") ||
    stop.name.startsWith("Grunow (LOS)") ||
    stop.name === "Günthersdorf" ||
    stop.name.startsWith("Hangelsberg,") ||
    stop.name === "Hartensdorf" ||
    stop.name.startsWith("Hartmannsdorf (bei Storkow)") ||
    stop.name.startsWith("Hasenfelde,") ||
    stop.name.startsWith("Heinersdorf (LOS)") ||
    stop.name.startsWith("Henzendorf") ||
    stop.name.startsWith("Herzberg (LOS)") ||
    stop.name.startsWith("Jacobsdorf,") ||
    stop.name.startsWith("Jacobsdorf (Mark),") ||
    stop.name === "Jänickendorf (LOS)" ||
    stop.name.startsWith("Kagel,") ||
    stop.name === "Kaisermühl I" ||
    stop.name === "Kehrigk" ||
    stop.name.startsWith("Kienbaum,") ||
    stop.name === "Kieselwitz" ||
    stop.name === "Klein Muckrow" ||
    stop.name.startsWith("Klein Schauen,") ||
    stop.name === "Klein Briesen (LOS)" ||
    stop.name === "Kobbeln" ||
    stop.name === "Kohlsdorf" ||
    stop.name.startsWith("Kolpin,") ||
    stop.name.startsWith("Kossenblatt,") ||
    stop.name === "Krachtsheide" ||
    stop.name === "Kuhnshof" ||
    stop.name === "Kummerow (LOS)" ||
    stop.name.startsWith("Kummersdorf (LOS)") ||
    stop.name === "Kunersdorf (LOS)" ||
    stop.name.startsWith("Kunitzer Loose") ||
    stop.name.startsWith("Langewahl,") ||
    stop.name.startsWith("Lawitz,") ||
    stop.name === "Leißnitz" ||
    stop.name.startsWith("Limsdorf,") ||
    stop.name.startsWith("Lindenberg (Mark)") ||
    stop.name.startsWith("Lindow (LOS)") ||
    stop.name.startsWith("Markgrafpieske,") ||
    stop.name === "Merz" ||
    stop.name === "Mittweide" ||
    stop.name.startsWith("Mixdorf,") ||
    stop.name.startsWith("Möbiskruge,") ||
    stop.name === "Möllen" ||
    stop.name === "Möllendorf, Dorf" ||
    stop.name === "Möllendorf, Kreuzung" ||
    stop.name.startsWith("Mönchwinkel,") ||
    stop.name.startsWith("Müllrose,") ||
    stop.name === "Neu Boston" ||
    stop.name === "Neu Golm" ||
    stop.name.startsWith("Neu Golm,") ||
    stop.name.startsWith("Neu Madlitz,") ||
    stop.name === "Neu Stahnsdorf" ||
    stop.name.startsWith("Neubrück (Spree)") ||
    stop.name.startsWith("Neuendorf im Sande") ||
    stop.name === "Neuhartmannsdorf" ||
    stop.name === "Neumönchwinkel" ||
    stop.name === "Neureichenwalde" ||
    stop.name.startsWith("Neuzelle,") ||
    stop.name === "Niewisch" ||
    stop.name === "Ölsen" ||
    stop.name === "Ossendorf" ||
    stop.name.startsWith("Petersdorf (bei Briesen)") ||
    stop.name.startsWith("Petersdorf (bei Fürstenwalde)") ||
    stop.name.startsWith("Pfaffendorf,") ||
    stop.name.startsWith("Philadelphia,") ||
    stop.name === "Pieskow" ||
    stop.name.startsWith("Pillgram,") ||
    stop.name.startsWith("Pohlitz,") ||
    stop.name === "Premsdorf" ||
    stop.name.startsWith("Ragow (LOS)") ||
    stop.name.startsWith("Ranzig,") ||
    stop.name === "Raßmannsdorf" ||
    stop.name === "Ratzdorf" ||
    stop.name.startsWith("Rauen,") ||
    stop.name.startsWith("Reichenwalde,") ||
    stop.name === "Reudnitz" ||
    stop.name.startsWith("Rieplos,") ||
    stop.name === "Rießen I" ||
    stop.name.startsWith("Rießen,") ||
    stop.name === "Rietz-Neuendorf" ||
    stop.name === "Sabrodt (Trebatsch)" ||
    stop.name === "Sauen" ||
    stop.name.startsWith("Schernsdorf,") ||
    stop.name === "Schlaubehammer" ||
    stop.name === "Schönfelde" ||
    stop.name === "Schwenow" ||
    stop.name === "Schwerin (LOS)" ||
    stop.name === "Schwerzko" ||
    stop.name === "Selchow (LOS)" ||
    stop.name === "Sieversdorf (LOS)" ||
    stop.name.startsWith("Spreeau,") ||
    stop.name.startsWith("Spreenhagen,") ||
    stop.name.startsWith("Steinhöfel (LOS)") ||
    stop.name.startsWith("Steinsdorf,") ||
    stop.name.startsWith("Storkow,") ||
    stop.name === "Streichwitz" ||
    stop.name.startsWith("Stremmen,") ||
    stop.name.startsWith("Tauche (bei Beeskow)") ||
    stop.name.startsWith("Tempelberg,") ||
    stop.name === "Trebatsch" ||
    stop.name.startsWith("Trebatsch,") ||
    stop.name.startsWith("Treppeln,") ||
    stop.name.startsWith("Vogelsang (LOS)") ||
    stop.name.startsWith("Weichensdorf,") ||
    stop.name === "Weißenspring" ||
    stop.name.startsWith("Wellmitz,") ||
    stop.name.startsWith("Wendisch Rietz,") ||
    stop.name === "Werder (bei Kossenblatt)" ||
    stop.name.startsWith("Wiesenau,") ||
    stop.name.startsWith("Wilmersdorf (bei Briesen)") ||
    stop.name.startsWith("Wilmersdorf (bei Pfaffendorf)") ||
    stop.name === "Wulfersdorf (LOS)" ||
    stop.name.startsWith("Zeust,") ||
    stop.name.startsWith("Ziltendorf,")
);

const remainingStops = remainingAfterStations.filter(
  stop => stops.indexOf(stop) === -1
);
// console.log(`after LOS: ${remainingStops.length}`);

export { stations, stops, remainingStops };
