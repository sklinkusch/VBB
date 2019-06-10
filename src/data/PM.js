import { remainingStops as stopsUnsorted } from "./P";

const stations = stopsUnsorted.filter(stop =>
  stop.name.includes("S Teltow Stadt")
);
const remainingAfterStations = stopsUnsorted.filter(
  stop => stations.indexOf(stop) === -1
);
const stops = remainingAfterStations.filter(
  stop =>
    // Berlin C
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
    stop.name.startsWith("Wilhelmshorst,") ||
    // Sonstige
    stop.name === "Alt Bork" ||
    stop.name === "Altbensdorf" ||
    stop.name.startsWith("Bad Belzig,") ||
    stop.name === "Bagow" ||
    stop.name.startsWith("Baitz,") ||
    stop.name === "Bardenitz" ||
    stop.name.startsWith("Bardenitz,") ||
    stop.name.startsWith("Beelitz,") ||
    stop.name.startsWith("Beelitz-Heilstätten,") ||
    stop.name.startsWith("Benken,") ||
    stop.name === "Bergholz (bei Bad Belzig)" ||
    stop.name === "Birkhorst (PM)" ||
    stop.name.startsWith("Bliesendorf,") ||
    stop.name.startsWith("Bochow,") ||
    stop.name.startsWith("Neu Bochow,") ||
    stop.name === "Bochow-Bruch" ||
    stop.name.startsWith("Boecke,") ||
    stop.name === "Bollmannsruh" ||
    stop.name.startsWith("Borkheide,") ||
    stop.name.startsWith("Borkwalde,") ||
    stop.name === "Borne" ||
    stop.name === "Börnecke" ||
    stop.name === "Brachwitz" ||
    stop.name.startsWith("Brielow,") ||
    stop.name.startsWith("Briest (PM)") ||
    stop.name.startsWith("Brück,") ||
    stop.name.startsWith("Buchholz (bei Treuenbrietzen)") ||
    stop.name === "Buchholz (bei Niemegk)" ||
    stop.name.startsWith("Buckau (PM)") ||
    stop.name.startsWith("Bücknitz,") ||
    stop.name === "Busendorf" ||
    stop.name === "Butzow" ||
    stop.name.startsWith("Cammer,") ||
    stop.name.startsWith("Dahlen,") ||
    stop.name === "Dahnsdorf" ||
    stop.name === "Damelang" ||
    stop.name === "Freienthal" ||
    stop.name.startsWith("Damsdorf (PM)") ||
    stop.name === "Dangelsdorf" ||
    stop.name.startsWith("Deetz (PM)") ||
    stop.name.startsWith("Derwitz,") ||
    stop.name === "Deutsch Bork" ||
    stop.name === "Dietersdorf" ||
    stop.name.startsWith("Dippmannsdorf,") ||
    stop.name.startsWith("Dretzen,") ||
    stop.name === "Egelinde" ||
    stop.name.startsWith("Elsholz") ||
    stop.name === "Emstal" ||
    stop.name === "Feldheim (PM)" ||
    stop.name.startsWith("Fichtenwalde,") ||
    stop.name.startsWith("Fohrde,") ||
    stop.name.startsWith("Fredersdorf (PM)") ||
    stop.name === "Freienthal" ||
    stop.name.startsWith("Fresdorf,") ||
    stop.name.startsWith("Frohnsdorf") ||
    stop.name === "Garrey" ||
    stop.name === "Glienecke" ||
    stop.name.startsWith("Glindow,") ||
    stop.name.startsWith("Göhlsdorf,") ||
    stop.name === "Gollwitz (bei Wusterwitz)" ||
    stop.name.startsWith("Golzow (PM)") ||
    stop.name.startsWith("Gömnigk,") ||
    stop.name.startsWith("Gortz,") ||
    stop.name.startsWith("Görzke,") ||
    stop.name.startsWith("Götz,") ||
    stop.name === "Götzer Berge" ||
    stop.name === "Gräben" ||
    stop.name.startsWith("Gräben,") ||
    stop.name === "Grabow (bei Niemegk)" ||
    stop.name === "Grabow (bei Brandenburg a.d.H.)" ||
    stop.name === "Grebs (bei Ziesar)" ||
    stop.name === "Grebs (bei Lehnin)" ||
    stop.name === "Groß Briesen (PM)" ||
    stop.name.startsWith("Groß Kreutz,") ||
    stop.name === "Groß Marzehns" ||
    stop.name === "Grubo" ||
    stop.name === "Grubo," ||
    stop.name === "Grüningen" ||
    stop.name.startsWith("Hagelberg,") ||
    stop.name === "Haseloff" ||
    stop.name === "Herrenhölzer" ||
    stop.name === "Herrenmühle" ||
    stop.name.startsWith("Hohenferchesar,") ||
    stop.name === "Hohenlobbese" ||
    stop.name === "Hohenspringe" ||
    stop.name === "Hohenwerbig" ||
    stop.name.startsWith("Hohenwerbig,") ||
    stop.name.startsWith("Jeserig (bei Götz)") ||
    stop.name === "Jeserig (bei Brück)" ||
    stop.name.startsWith("Jeserig (bei Wiesenburg)") ||
    stop.name.startsWith("Kähnsdorf,") ||
    stop.name === "Kanin" ||
    stop.name.startsWith("Kemnitz (PM)") ||
    stop.name.startsWith("Ketzür,") ||
    stop.name.startsWith("Klaistow,") ||
    stop.name === "Klausdorf (bei Jüterbog)" ||
    stop.name === "Klein Glien" ||
    stop.name === "Klein Marzehns" ||
    stop.name === "Klepzig" ||
    stop.name.startsWith("Köpernitz (PM)") ||
    stop.name === "Körzin" ||
    stop.name.startsWith("Krahne,") ||
    stop.name === "Krahnepuhl (bei Brandenburg)" ||
    stop.name === "Kranepuhl (bei Bad Belzig)" ||
    stop.name.startsWith("Krielow,") ||
    stop.name.startsWith("Kuhlowitz,") ||
    stop.name.startsWith("Lehnin,") ||
    stop.name === "Lehnsdorf" ||
    stop.id === "900000220298" || // Lindenhof (am Beetzsee)
    stop.name.startsWith("Linthe,") ||
    stop.name === "Lobbese" ||
    stop.name.startsWith("Löcknitz,") ||
    stop.name === "Locktow" ||
    stop.name.startsWith("Lübnitz,") ||
    stop.name === "Lüdendorf" ||
    stop.name === "Lühnsdorf" ||
    stop.name.startsWith("Lühsdorf,") ||
    stop.name.startsWith("Lünow,") ||
    stop.name === "Lüsse" ||
    stop.name.startsWith("Lütte,") ||
    stop.name === "Mahlenzien" ||
    stop.name.startsWith("Marzahna,") ||
    stop.name === "Marzahne" ||
    stop.name.startsWith("Medewitz,") ||
    stop.name === "Medewitzerhütten" ||
    stop.name.startsWith("Michelsdorf,") ||
    stop.name === "Mörz" ||
    stop.name.startsWith("Mötzow,") ||
    stop.name === "Mützdorf" ||
    stop.name.startsWith("Nahmitz,") ||
    stop.name.startsWith("Neschholz,") ||
    stop.name.startsWith("Netzen,") ||
    stop.name.startsWith("Neu Bochow,") ||
    stop.name.startsWith("Neu Plötzin,") ||
    stop.name === "Neubensdorf" ||
    stop.name.startsWith("Neubensdorf,") ||
    stop.name === "Neuehütten" ||
    stop.name === "Neuendorf (bei Brück)" ||
    stop.name === "Neuendorf (bei Niemegk)" ||
    stop.name === "Nichel" ||
    stop.name.startsWith("Niebel,") ||
    stop.name === "Niebelhorst" ||
    stop.name === "Niederwerbig" ||
    stop.name.startsWith("Niemegk,") ||
    stop.name.startsWith("Oberjünne,") ||
    stop.name === "Päwesin" ||
    stop.name === "Pechüle" ||
    stop.name === "Pflügkuff" ||
    stop.name.startsWith("Phöben,") ||
    stop.name.startsWith("Plessow,") ||
    stop.name.startsWith("Plötzin,") ||
    stop.name.startsWith("Preußnitz,") ||
    stop.name.startsWith("Pritzerbe,") ||
    stop.name === "Prützke" ||
    stop.name === "Raben" ||
    stop.name.startsWith("Radewege,") ||
    stop.name === "Rädigke" ||
    stop.name.startsWith("Ragösen,") ||
    stop.name.startsWith("Reckahn,") ||
    stop.name === "Reesdorf" ||
    stop.name.startsWith("Reesdorf,") ||
    stop.name.startsWith("Reetz (PM)") ||
    stop.name === "Reetzerhütten" ||
    stop.name === "Reppinichen" ||
    stop.name.startsWith("Rieben,") ||
    stop.name.startsWith("Rietz (bei Brandenburg)") ||
    stop.name.startsWith("Rietz (bei Treuenbrietzen)") ||
    stop.name.startsWith("Riewend,") ||
    stop.name.startsWith("Rogäsen,") ||
    stop.name.startsWith("Roskow,") ||
    stop.name === "Rotscherlinde" ||
    stop.name === "Rottstock" ||
    stop.name === "Salzbrunn" ||
    stop.name === "Schäpe" ||
    stop.name.startsWith("Schenkenberg (bei Götz)") ||
    stop.name.startsWith("Schlalach,") ||
    stop.name === "Schlamau" ||
    stop.name === "Schlunkendorf" ||
    stop.name.startsWith("Schmergow,") ||
    stop.name.startsWith("Schmerwitz,") ||
    stop.name === "Schmögelsdorf" ||
    stop.name === "Schönefeld (bei Beelitz)" ||
    stop.name.startsWith("Schwabeck,") ||
    stop.name === "Schwanebeck (PM)" ||
    stop.name.startsWith("Seddin,") ||
    stop.name.startsWith("Seddin (PM),") ||
    stop.name.startsWith("Steinberg (PM)") ||
    stop.name === "Steindorf" ||
    stop.name.startsWith("Stücken,") ||
    stop.name.startsWith("Tieckow,") ||
    stop.name.startsWith("Tiefenbrunnen,") ||
    stop.name.startsWith("Trebitz (PM)") ||
    stop.name === "Trechwitz" ||
    stop.name.startsWith("Trechwitz,") ||
    stop.name.startsWith("Tremsdorf,") ||
    stop.name.startsWith("Treuenbrietzen,") ||
    stop.name === "Vehlen" ||
    stop.name.startsWith("Verlorenwasser,") ||
    stop.name === "Viesen" ||
    stop.name === "Warchau" ||
    stop.name === "Welsigke" ||
    stop.name === "Wenzlow (PM)" ||
    stop.name.startsWith("Werbig (PM)") ||
    stop.name.startsWith("Weseram,") ||
    stop.name.startsWith("Wiesenburg,") ||
    stop.name.startsWith("Wildenbruch,") ||
    stop.name.startsWith("Wittbrietzen,") ||
    stop.name.startsWith("Wittstock (PM)") ||
    stop.name.startsWith("Wollin (PM)") ||
    stop.name.startsWith("Woltersdorf,") ||
    stop.name.startsWith("Wusterwitz,") ||
    stop.name === "Wutzow" ||
    stop.name.startsWith("Zauchwitz,") ||
    stop.name === "Zeuden" ||
    stop.name.startsWith("Ziesar,") ||
    stop.name === "Ziezow" ||
    stop.name.startsWith("Zitz,") ||
    stop.name === "Zixdorf"
);
const remainingStops = remainingAfterStations.filter(
  stop => stops.indexOf(stop) === -1
);
console.log(`after PM: ${remainingStops.length}`);
export { stations, stops, remainingStops };
