import stopsUnsorted from "./unsorted";

const stations = stopsUnsorted.filter(
  stop => stop.name.includes("S Mahlow") || stop.name.includes("S Blankenfelde")
);
const stops = stopsUnsorted.filter(
  stop =>
    // Berlin C
    stop.name.startsWith("Ahrensdorf (bei Ludwigsfelde),") ||
    stop.name.endsWith("(Heinersdorf)") ||
    stop.name.startsWith("Blankenfelde,") ||
    stop.name.startsWith("Blankenfelde (TF),") ||
    stop.name.startsWith("Dahlewitz,") ||
    stop.name.startsWith("Diedersdorf (TF),") ||
    stop.name.startsWith("Genshagen,") ||
    stop.name.startsWith("Glasow,") ||
    stop.name.startsWith("Glienick,") ||
    stop.name.startsWith("Gröben,") ||
    stop.name.startsWith("Groß Kienitz,") ||
    stop.name.startsWith("Groß Machnow,") ||
    stop.name.startsWith("Groß Schulzendorf,") ||
    stop.name.startsWith("Großbeeren,") ||
    stop.name.startsWith("Großbeuthen,") ||
    stop.name.startsWith("Heinersdorf (TF)") ||
    stop.name.startsWith("Jühnsdorf,") ||
    stop.name.startsWith("Jütchendorf,") ||
    stop.name.startsWith("Kerzendorf,") ||
    stop.name.startsWith("Klein Kienitz,") ||
    stop.name.startsWith("Kleinbeeren,") ||
    stop.name.startsWith("Kleinbeuthen,") ||
    stop.name.startsWith("Löwenbruch,") ||
    stop.name.startsWith("Ludwigsfelde,") ||
    stop.name.startsWith("Mahlow,") ||
    stop.name.startsWith("Mietgendorf,") ||
    stop.name.startsWith("Neubeeren,") ||
    stop.name.startsWith("Rangsdorf,") ||
    stop.name.startsWith("Schiaß,") ||
    stop.name.startsWith("Siethen,") ||
    stop.name.startsWith("Werben (TF),") ||
    stop.name.startsWith("Wietstock,") ||
    // Sonstige
    stop.name.startsWith("Ahrensdorf (bei Trebbin)") ||
    stop.name === "Alexanderdorf" ||
    stop.name.startsWith("Alexanderdorf,") ||
    stop.name.startsWith("Altes Lager,") ||
    stop.name.startsWith("Baruth,") ||
    stop.name === "Bärwalde" ||
    stop.name.startsWith("Berkenbrück (TF)") ||
    stop.name.startsWith("Blankensee (TF)") ||
    stop.name.startsWith("Blönsdorf,") ||
    stop.name.startsWith("Bochow (TF)") ||
    stop.name.startsWith("Bollensdorf (bei Dahme)") ||
    stop.name.startsWith("Borgisdorf,") ||
    stop.name.startsWith("Buckow (TF)") ||
    stop.name.startsWith("Charlottenfelde,") ||
    stop.name.startsWith("Christinendorf,") ||
    stop.name.startsWith("Dabendorf,") ||
    stop.name.startsWith("Dahme,") ||
    stop.name.startsWith("Dalichow,") ||
    stop.name.startsWith("Danna,") ||
    stop.name.startsWith("Dennewitz,") ||
    stop.name.startsWith("Dobbrikow,") ||
    stop.name.startsWith("Dümde,") ||
    stop.name.startsWith("Eckmannsdorf,") ||
    stop.name.startsWith("Felgentreu,") ||
    stop.name.startsWith("Fernneuendorf,") ||
    stop.name.startsWith("Frankenfelde (TF)") ||
    stop.name.startsWith("Frankenförde,") ||
    stop.name.startsWith("Fröhden,") ||
    stop.name.startsWith("Funkenmühle,") ||
    stop.name.startsWith("Gadsdorf,") ||
    stop.name.startsWith("Gebersdorf,") ||
    stop.name.startsWith("Glashütte (TF)") ||
    stop.name.startsWith("Glau,") ||
    stop.name.startsWith("Gölsdorf (TF)") ||
    stop.name.startsWith("Görsdorf (TF)") ||
    stop.name.startsWith("Gottow,") ||
    stop.name === "Gottsdorf" ||
    stop.name.startsWith("Gräfendorf (TF)") ||
    stop.name.startsWith("Groß Ziescht,") ||
    stop.name.startsWith("Grüna,") ||
    stop.name.startsWith("Heinsdorf,") ||
    stop.name.startsWith("Hennickendorf (TF)") ||
    stop.name.startsWith("Herbersdorf (TF)") ||
    stop.name.startsWith("Höfgen,") ||
    stop.name.startsWith("Hohenahlsdorf,") ||
    stop.name.startsWith("Hohengörsdorf,") ||
    stop.name.startsWith("Hohenseefeld,") ||
    stop.name.startsWith("Holbeck,") ||
    stop.name.startsWith("Horstfelde,") ||
    stop.name.startsWith("Horstwalde,") ||
    stop.name.startsWith("Ihlow (TF)") ||
    stop.name.startsWith("Illmersdorf,") ||
    stop.name.startsWith("Jänickendorf (TF)") ||
    stop.name.startsWith("Jüterbog,") ||
    stop.name.startsWith("Kallinchen,") ||
    stop.name.startsWith("Kaltenborn,") ||
    stop.name.startsWith("Karlsdorf (Dahme)") ||
    stop.name.startsWith("Kemlitz (bei Baruth)") ||
    stop.name.startsWith("Kemlitz (bei Luckau)") ||
    stop.name.startsWith("Kemnitz (TF)") ||
    stop.name.startsWith("Klasdorf,") ||
    stop.name.startsWith("Klasdorf-Glashütte,") ||
    stop.name.startsWith("Klausdorf (TF)") ||
    stop.name.startsWith("Klein Schulzendorf,") ||
    stop.name.startsWith("Klein Ziescht (Baruth/Mark)") ||
    stop.name.startsWith("Kliestow,") ||
    stop.name.startsWith("Kloster Zinna,") ||
    stop.name.startsWith("Kolpien,") ||
    stop.name.startsWith("Kolzenburg,") ||
    stop.name.startsWith("Körbitz (bei Jüterbog)") ||
    stop.name.startsWith("Kossin,") ||
    stop.name.startsWith("Kummersdorf (TF)") ||
    stop.name.startsWith("Kummersdorf Gut,") ||
    stop.name.startsWith("Kurzlipsdorf,") ||
    stop.name.startsWith("Langenlipsdorf,") ||
    stop.name.startsWith("Lichterfelde (bei Jüterbog)") ||
    stop.name.startsWith("Liebätz,") ||
    stop.name.startsWith("Liebsdorf,") ||
    stop.name === "Liedekahle" ||
    stop.name.startsWith("Liepe (Dahme)") ||
    stop.name.startsWith("Ließen,") ||
    stop.name.startsWith("Lindenbrück,") ||
    stop.name.startsWith("Lindow (TF)") ||
    stop.name.startsWith("Löwendorf,") ||
    stop.name.startsWith("Luckenwalde,") ||
    stop.name.startsWith("Lüdersdorf (TF)") ||
    stop.name.startsWith("Lynow,") ||
    stop.name.startsWith("Malterhausen,") ||
    stop.name.startsWith("Markendorf (Jüterbog)") ||
    stop.name.startsWith("Märkisch Wilmersdorf,") ||
    stop.name.startsWith("Märtensmühle,") ||
    stop.name.startsWith("Mehlsdorf (Dahme)") ||
    stop.name.startsWith("Meinsdorf (TF)") ||
    stop.name.startsWith("Mellensee,") ||
    stop.name.startsWith("Mellnsdorf,") ||
    stop.name.startsWith("Merzdorf (TF)") ||
    stop.name.startsWith("Mückendorf,") ||
    stop.name.startsWith("Nächst Neuendorf,") ||
    stop.name === "Nettgendorf" ||
    stop.name === "Neues Lager" ||
    stop.name.startsWith("Neuheim,") ||
    stop.name.startsWith("Neuhof (bei Zossen)") ||
    stop.name.startsWith("Neuhof (bei Jüterbog)") ||
    stop.name.startsWith("Niebendorf,") ||
    stop.name.startsWith("Niedergörsdorf,") ||
    stop.name.startsWith("Niendorf,") ||
    stop.name.startsWith("Nonnendorf,") ||
    stop.name.startsWith("Nunsdorf,") ||
    stop.name.startsWith("Oehna (bei Niedergörsdorf)") ||
    stop.name.startsWith("Paplitz,") ||
    stop.name.startsWith("Petkus,") ||
    stop.name.startsWith("Prensdorf,") ||
    stop.name === "Priedel" ||
    stop.name.startsWith("Priedel,") ||
    stop.name.startsWith("Rehagen,") ||
    stop.name.startsWith("Reinsdorf,") ||
    stop.name.startsWith("Riesdorf,") ||
    stop.name.startsWith("Rietdorf,") ||
    stop.name.startsWith("Rinow,") ||
    stop.name === "Rohrbeck, Jüterboger Str." ||
    stop.name === "Rohrbeck, Hauptstr." ||
    stop.name.startsWith("Rosenthal (Dahme)") ||
    stop.name.startsWith("Rosenthal,") ||
    stop.name.startsWith("Ruhlsdorf (TF)") ||
    stop.name.startsWith("Saalow,") ||
    stop.name.startsWith("Scharfenbrück,") ||
    stop.name.startsWith("Schlenzer,") ||
    stop.name.startsWith("Schöbendorf,") ||
    stop.name.startsWith("Schöna (Dahme)") ||
    stop.name.startsWith("Schönefeld (bei Jüterbog)") ||
    stop.name.startsWith("Schönefeld (bei Luckenwalde)") ||
    stop.name.startsWith("Schöneiche (bei Zossen)") ||
    stop.name.startsWith("Schöneweide (TF)") ||
    stop.name.startsWith("Schönhagen (TF)") ||
    stop.name === "Schünow" ||
    stop.name.startsWith("Schünow,") ||
    stop.name.startsWith("Schwebendorf,") ||
    stop.name.startsWith("Seehausen (TF)") ||
    stop.name === "Sernow" ||
    stop.name.startsWith("Sieb,") ||
    stop.name.startsWith("Sperenberg,") ||
    stop.name.startsWith("Stangenhagen,") ||
    stop.name.startsWith("Stülpe,") ||
    stop.name.startsWith("Trebbin,") ||
    stop.name.startsWith("Wahlsdorf,") ||
    stop.name.startsWith("Waldstadt,") ||
    stop.name.startsWith("Waltersdorf (TF)") ||
    stop.name.startsWith("Weißen,") ||
    stop.name.startsWith("Weißen (Lichterfelde)") ||
    stop.name.startsWith("Welsickendorf,") ||
    stop.name.startsWith("Werbig (TF)") ||
    stop.name.startsWith("Werder (bei Jüterbog)") ||
    stop.name.startsWith("Wergzahna,") ||
    stop.name.startsWith("Wiepersdorf (TF)") ||
    stop.name.startsWith("Wiesenhagen,") ||
    stop.name.startsWith("Wildau-Wentdorf,") ||
    stop.name.startsWith("Wölmsdorf,") ||
    stop.name.startsWith("Woltersdorf (TF)") ||
    stop.name.startsWith("Woltersdorf (Nuthe-Urstromtal)") ||
    stop.name.startsWith("Wünsdorf,") ||
    stop.name.startsWith("Neu Wünsdorf,") ||
    stop.name.startsWith("Wünsdorf-Waldstadt,") ||
    stop.name === "Zagelsdorf" ||
    stop.name.startsWith("Zellendorf,") ||
    stop.name.startsWith("Zesch,") ||
    stop.name.startsWith("Zossen,") ||
    stop.name.startsWith("Zülichendorf,")
);

export { stations, stops };
