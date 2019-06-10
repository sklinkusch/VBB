import { remainingStops as stopsUnsorted } from "./HVL";

const stations = stopsUnsorted.filter(
  stop =>
    stop.name.includes("S Flughafen Berlin-Schönefeld") ||
    stop.name.includes("S Eichwalde") ||
    stop.name.includes("S Zeuthen") ||
    stop.name.includes("S Wildau") ||
    stop.name.includes("S Königs Wusterhausen") ||
    stop.name.startsWith("Flughafen Schönefeld")
);
const remainingAfterStations = stopsUnsorted.filter(
  stop => stations.indexOf(stop) === -1
);
const stops = remainingAfterStations.filter(
  stop =>
    // Berlin C
    stop.name.startsWith("Boddinsfelde") ||
    stop.name.startsWith("Brusendorf,") ||
    stop.name.startsWith("Deutsch Wusterhausen,") ||
    stop.name.startsWith("Diepensee,") ||
    stop.name.startsWith("Eichwalde,") ||
    stop.name.startsWith("Großziethen,") ||
    stop.name.startsWith("Kablow,") ||
    stop.name.startsWith("Kablow-Ziegelei,") ||
    stop.name === "Karlshof (bei Waltersdorf)" ||
    stop.name === "Kiekebusch (LDS)" ||
    stop.name === "Kleinziethen" ||
    stop.name.startsWith("Königs Wusterhausen,") ||
    stop.name.startsWith("Körbiskrug,") ||
    stop.name === "Krummensee (LDS)" ||
    stop.name.startsWith("Miersdorf,") ||
    stop.name.startsWith("Mittenwalde (LDS),") ||
    stop.name.startsWith("Mittenwalde,") ||
    stop.name.startsWith("Neue Mühle,") ||
    stop.name.startsWith("Niederlehme,") ||
    stop.name.startsWith("Ragow (LDS),") ||
    stop.name.startsWith("Rotberg,") ||
    stop.name.startsWith("Schenkendorf,") ||
    stop.name.startsWith("Schönefeld (bei Berlin),") ||
    stop.name.startsWith("Schulzendorf (LDS),") ||
    stop.name.startsWith("Selchow (LDS),") ||
    stop.name.startsWith("Senzig,") ||
    stop.name.startsWith("Telz,") ||
    stop.name.startsWith("Waltersdorf (bei Berlin),") ||
    stop.name.startsWith("Waßmannsdorf,") ||
    stop.name.startsWith("Wernsdorf,") ||
    stop.name.startsWith("Wildau,") ||
    stop.name.startsWith("Zeesen,") ||
    stop.name.startsWith("Zernsdorf,") ||
    stop.name.startsWith("Zeuthen,") ||
    stop.name.startsWith("Ziegenhals,") ||
    // Sonstige
    stop.name.startsWith("Alt Zauche,") ||
    stop.name === "Alteno" ||
    stop.name === "Altgolßen" ||
    stop.name === "Alt-Schadow" ||
    stop.name.startsWith("Beesdau,") ||
    stop.name === "Bergen" ||
    stop.name.startsWith("Bestensee,") ||
    stop.name.startsWith("Biebersdorf,") ||
    stop.name.startsWith("Bindow,") ||
    stop.name.startsWith("Birkenhainchen") ||
    stop.name.startsWith("Birkholz (LDS)") ||
    stop.name.startsWith("Blasdorf,") ||
    stop.name.startsWith("Blossin,") ||
    stop.name.startsWith("Börnichen,") ||
    stop.name.startsWith("Bornsdorf,") ||
    stop.name.startsWith("Brand,") ||
    stop.name === "Briesen (LDS)" ||
    stop.name.startsWith("Briesensee,") ||
    stop.name === "Bückchen" ||
    stop.name === "Burglehn" ||
    stop.name.startsWith("Butzen,") ||
    stop.name.startsWith("Byhleguhre,") ||
    stop.name === "Byhlen" ||
    stop.name.startsWith("Cahnsdorf,") ||
    stop.name === "Caminchen" ||
    stop.name === "Caule" ||
    stop.name === "Damsdorf (bei Dahme)" ||
    stop.name === "Dannenreich" ||
    stop.name === "Doberburg" ||
    stop.name.startsWith("Dolgenbrodt,") ||
    stop.name === "Dollgen" ||
    stop.name.startsWith("Drahnsdorf,") ||
    stop.name.startsWith("Duben,") ||
    stop.name.startsWith("Dürrenhofe,") ||
    stop.name.startsWith("Egsdorf (bei Görlsdorf)") ||
    stop.name.startsWith("Egsdorf (bei Teupitz)") ||
    stop.name === "Ellerborn" ||
    stop.name.startsWith("Falkenberg (bei Luckau)") ||
    stop.name.startsWith("Falkenhain,") ||
    stop.name.startsWith("Frankendorf (LDS)") ||
    stop.name.startsWith("Freesdorf,") ||
    stop.name.startsWith("Freidorf,") ||
    stop.name === "Freiimfelde" ||
    stop.name.startsWith("Freiwalde,") ||
    stop.name.startsWith("Friedersdorf (LDS)") ||
    stop.name.startsWith("Friedrichshof (bei Dannenreich)") ||
    stop.name.startsWith("Friedrichshof (bei Rietzneuendorf)") ||
    stop.name.startsWith("Fürstlich Drehna,") ||
    stop.name.startsWith("Gallun,") ||
    stop.name.startsWith("Garrenchen,") ||
    stop.name.startsWith("Gehren,") ||
    stop.name === "Gersdorf (LDS)" ||
    stop.name.startsWith("Gießmannsdorf,") ||
    stop.name === "Glienig" ||
    stop.name === "Glietz" ||
    stop.name.startsWith("Golßen,") ||
    stop.name.startsWith("Görlsdorf (LDS)") ||
    stop.name.startsWith("Goschen,") ||
    stop.name === "Goßmar (bei Luckau)" ||
    stop.name.startsWith("Goyatz,") ||
    stop.name.startsWith("Gräbendorf,") ||
    stop.name.startsWith("Gräbendorf (LDS)") ||
    stop.name.startsWith("Gröditsch,") ||
    stop.name.startsWith("Groß Köris,") ||
    stop.name.startsWith("Groß Leine,") ||
    stop.name.startsWith("Groß Leuthen,") ||
    stop.name === "Groß Wasserburg" ||
    stop.name === "Guhlen" ||
    stop.name === "Gussow" ||
    stop.name.startsWith("Halbe,") ||
    stop.name.startsWith("Hartmannsdorf (bei Lübben)") ||
    stop.name === "Hermsdorf (bei Münchehofe)" ||
    stop.name.startsWith("Hohenbrück,") ||
    stop.name === "Hohendorf (LDS)" ||
    stop.name.startsWith("Hollbrunn,") ||
    stop.name.startsWith("Jamlitz,") ||
    stop.name.startsWith("Jessern,") ||
    stop.name.startsWith("Jetsch,") ||
    stop.name === "Kaden" ||
    stop.name === "Karche" ||
    stop.name === "Zaacko" ||
    stop.name.startsWith("Kasel-Golzig,") ||
    stop.name.startsWith("Klein Köris,") ||
    stop.name === "Klein Leine" ||
    stop.name === "Klein Leuthen" ||
    stop.name === "Klein Wasserburg" ||
    stop.name.startsWith("Klein-Eichholz,") ||
    stop.name.startsWith("Kolberg,") ||
    stop.name === "Köthen" ||
    stop.name.startsWith("Krausnick,") ||
    stop.name.startsWith("Kreblitz,") ||
    stop.name.startsWith("Krossen,") ||
    stop.name.startsWith("Krugau,") ||
    stop.name.startsWith("Kümmritz,") ||
    stop.name.startsWith("Kuschkow,") ||
    stop.name === "Laasow (Spreewald)" ||
    stop.name.startsWith("Lamsfeld,") ||
    stop.name === "Landwehr" ||
    stop.name.startsWith("Langengrassau,") ||
    stop.name === "Leeskow (bei Lieberose)" ||
    stop.name.startsWith("Leibchel,") ||
    stop.name.startsWith("Leibsch,") ||
    stop.name.startsWith("Lieberose,") ||
    stop.name.startsWith("Löpten,") ||
    stop.name.startsWith("Lübben,") ||
    stop.name.startsWith("Lubolz,") ||
    stop.name.startsWith("Luckau,") ||
    stop.name.startsWith("Luckau-Uckro,") ||
    stop.name === "Mahlsdorf (LDS)" ||
    stop.name.startsWith("Märkisch Buchholz,") ||
    stop.name === "Massow (LDS)" ||
    stop.name.startsWith("Miersdorf,") ||
    stop.name.startsWith("Mittenwalde,") ||
    stop.name.startsWith("Mittenwalde (LDS)") ||
    stop.name.startsWith("Mochlitz,") ||
    stop.name.startsWith("Mochow,") ||
    stop.name.startsWith("Motzen,") ||
    stop.name === "Münchehofe (LDS)" ||
    stop.name === "Münchhofe (bei Lieberose)" ||
    stop.name.startsWith("Neu Byhleguhre,") ||
    stop.name.startsWith("Neu Lübbenau,") ||
    stop.name === "Neu Schadow" ||
    stop.name.startsWith("Neu Zauche,") ||
    stop.name === "Neubrück (bei Goyatz)" ||
    stop.name.startsWith("Neubrück (bei Groß Köris)") ||
    stop.name.startsWith("Neue Mühle,") ||
    stop.name === "Neuendorf am See" ||
    stop.name.startsWith("Neuendorf (bei Teupitz)") ||
    stop.name === "Niewitz" ||
    stop.name.startsWith("Oderin,") ||
    stop.name.startsWith("Paserin,") ||
    stop.name.startsWith("Pätz,") ||
    stop.name === "Pelkwitz" ||
    stop.name === "Pitschen-Pickel" ||
    stop.name === "Plattkow" ||
    stop.name.startsWith("Pretschen,") ||
    stop.name.startsWith("Prieros,") ||
    stop.name.startsWith("Prierow,") ||
    stop.name.startsWith("Radensdorf (Spreewald)") ||
    stop.name.startsWith("Reichwalde,") ||
    stop.name === "Ressen am Schwielochsee" ||
    stop.name.startsWith("Rickshausen,") ||
    stop.name.startsWith("Riedebeck,") ||
    stop.name.startsWith("Rietzneuendorf,") ||
    stop.name.startsWith("Rüdingsdorf,") ||
    stop.name === "Sacrow" ||
    stop.name === "Waldow-Sacrow" ||
    stop.name === "Sagritz" ||
    stop.name === "Schäcksdorf" ||
    stop.name.startsWith("Schenkendorf (b.Dahme)") ||
    stop.name === "Schiebsdorf" ||
    stop.name === "Schlabendorf" ||
    stop.name.startsWith("Schlepzig,") ||
    stop.name === "Schollen" ||
    stop.name === "Schöneiche (bei Dahme)" ||
    stop.name.startsWith("Schönerlinde (LDS)") ||
    stop.name.startsWith("Schönwalde (Spreewald)") ||
    stop.name === "Schuhlen" ||
    stop.name === "Schwarzenburg" ||
    stop.name.startsWith("Schwerin (LDS)") ||
    stop.name.startsWith("Sellendorf,") ||
    stop.name === "Siegadel" ||
    stop.name === "Wüstermarke-Sorge" ||
    stop.name === "Speichrow" ||
    stop.name === "Staakmühle (bei Golßen)" ||
    stop.name.startsWith("Staakow (bei Golßen)") ||
    stop.name.startsWith("Straupitz,") ||
    stop.name.startsWith("Streganz,") ||
    stop.name.startsWith("Terpt,") ||
    stop.name.startsWith("Teupitz,") ||
    stop.name.startsWith("Teurow,") ||
    stop.name.startsWith("Töpchin,") ||
    stop.name.startsWith("Tornow (LDS)") ||
    stop.name.startsWith("Trebitz,") ||
    stop.name.startsWith("Tugam,") ||
    stop.name.startsWith("Uckro,") ||
    stop.name === "Ullersdorf" ||
    stop.name.startsWith("Walddrehna,") ||
    stop.name.startsWith("Waldow (bei Brand)") ||
    stop.name === "Waltersdorf (bei Luckau)" ||
    stop.name === "Wehnsdorf" ||
    stop.name.startsWith("Weißack,") ||
    stop.name === "Wenzlow (LDS)" ||
    stop.name === "Wierigsdorf" ||
    stop.name === "Wiese" ||
    stop.name === "Stöbritz" ||
    stop.name === "Willmersdorf-Stöbritz" ||
    stop.name === "Wittmannsdorf (bei Luckau)" ||
    stop.name.startsWith("Wittmannsdorf (bei Lübben)") ||
    stop.name.startsWith("Wolzig,") ||
    stop.name.startsWith("Wußwerk,") ||
    stop.name === "Wüstermarke" ||
    stop.name.startsWith("Wüstermarke,") ||
    stop.name === "Zaacko" ||
    stop.name === "Zauche" ||
    stop.name.startsWith("Zaue,") ||
    stop.name.startsWith("Zieckau,") ||
    stop.name.startsWith("Zöllmersdorf,") ||
    stop.name.startsWith("Zützen (LDS)")
);

const remainingStops = remainingAfterStations.filter(
  stop => stops.indexOf(stop) === -1
);
console.log(`after LDS: ${remainingStops.length}`);
export { stations, stops, remainingStops };
