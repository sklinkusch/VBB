import { remainingStops as stopsUnsorted } from "./LOS";

const stations = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("S Birkenstein") ||
    stop.name.startsWith("S Hoppegarten") ||
    stop.name.startsWith("S Neuenhagen") ||
    stop.name.startsWith("S Fredersdorf") ||
    stop.name.startsWith("S Petershagen Nord") ||
    stop.name.startsWith("S Strausberg") ||
    stop.name.startsWith("S Hegermühle")
);
const remainingAfterStations = stopsUnsorted.filter(
  stop => stations.indexOf(stop) === -1
);
const stops = remainingAfterStations.filter(
  stop =>
    // Berlin C
    stop.name.startsWith("Altlandsberg,") ||
    stop.name.startsWith("Bruchmühle,") ||
    stop.name.startsWith("Buchholz (MOL),") ||
    stop.name.startsWith("Eggersdorf (Strausberg),") ||
    stop.name.startsWith("Fredersdorf (MOL),") ||
    stop.name.startsWith("Gielsdorf,") ||
    stop.name.startsWith("Hennickendorf (MOL),") ||
    stop.name.startsWith("Herzfelde (MOL),") ||
    stop.name.startsWith("Hönow,") ||
    stop.name.startsWith("Hoppegarten,") ||
    stop.name.startsWith("Münchehofe (bei Dahlwitz-Hoppegarten)") ||
    stop.name.startsWith("Neuenhagen,") ||
    stop.name.startsWith("Petershagen (b. Berlin)") ||
    stop.name.startsWith("Rüdersdorf,") ||
    stop.name.startsWith("Alt Rüdersdorf,") ||
    stop.name.startsWith("Seeberg (MOL)") ||
    stop.name.startsWith("Strausberg,") ||
    stop.name.startsWith("Vogelsdorf,") ||
    stop.name.startsWith("Waldesruh") ||
    stop.name.startsWith("Wegendorf,") ||
    stop.name.startsWith("Wesendahl") ||
    stop.name.startsWith("Wilkendorf") ||
    // Sonstige
    stop.name === "Ackermannshof" ||
    stop.name === "Alt Mahlisch" ||
    stop.name === "Alt Rosenthal" ||
    stop.name.startsWith("Alt Rosenthal,") ||
    stop.name === "Alt Tucheband" ||
    stop.name.startsWith("Alt Zeschdorf,") ||
    stop.name.startsWith("Altbarnim,") ||
    stop.name.startsWith("Altfriedland,") ||
    stop.name.startsWith("Altgaul,") ||
    stop.name.startsWith("Altglietzen,") ||
    stop.name === "Altlewin" ||
    stop.name.startsWith("Altmädewitz,") ||
    stop.name.startsWith("Altranft,") ||
    stop.name.startsWith("Altreetz,") ||
    stop.name === "Alttrebbin" ||
    stop.name.startsWith("Beauregard,") ||
    stop.name === "Altwustrow" ||
    stop.name.startsWith("Bad Freienwalde,") ||
    stop.name === "Bärwinkel" ||
    stop.name === "Batzlow" ||
    stop.name === "Beerbaum" ||
    stop.name.startsWith("Beiersdorf (MOL)") ||
    stop.name.startsWith("Bergschäferei,") ||
    stop.name.startsWith("Biesdorf (MOL)") ||
    stop.name.startsWith("Bleyen,") ||
    stop.name === "Bliesdorf" ||
    stop.name.startsWith("Bollerdorf,") ||
    stop.name.startsWith("Bralitz,") ||
    stop.name === "Brunow" ||
    stop.name.startsWith("Buckow (Märkische Schweiz)") ||
    stop.name.startsWith("Buschdorf,") ||
    stop.name.startsWith("Carzig,") ||
    stop.name === "Cöthen" ||
    stop.name === "Croustillier" ||
    stop.name === "Dahmsdorf (MOL)" ||
    stop.name === "Dannenberg" ||
    stop.name.startsWith("Diedersdorf (MOL)") ||
    stop.name.startsWith("Döbberin,") ||
    stop.name.startsWith("Dolgelin,") ||
    stop.name.startsWith("Eggersdorf (Müncheberg)") ||
    stop.name.startsWith("Eichwerder,") ||
    stop.name.startsWith("Ernsthof,") ||
    stop.name.startsWith("Falkenberg (MOL)") ||
    stop.name.startsWith("Falkenhagen (MOL)") ||
    stop.name === "Ferdinandshof (MOL)" ||
    stop.name.startsWith("Frankenfelde (MOL)") ||
    stop.name.startsWith("Freudenberg,") ||
    stop.name.startsWith("Friedersdorf (MOL)") ||
    stop.name === "Friedrichsaue (MOL)" ||
    stop.name.startsWith("Gabow,") ||
    stop.name.startsWith("Garzau,") ||
    stop.name.startsWith("Garzin,") ||
    stop.name.startsWith("Genschmar,") ||
    stop.name === "Georgenthal" ||
    stop.name.startsWith("Georgenthal,") ||
    stop.name === "Gersdorf (MOL)" ||
    stop.name.startsWith("Gieshof,") ||
    stop.name === "Gladowshöhe" ||
    stop.name.startsWith("Golzow (MOL)") ||
    stop.name.startsWith("Gorgast,") ||
    stop.name === "Görlsdorf (MOL)" ||
    stop.name === "Gottesgabe" ||
    stop.name.startsWith("Groß Neuendorf,") ||
    stop.name.startsWith("Grunow (MOL)") ||
    stop.name.startsWith("Gusow,") ||
    stop.name.startsWith("Güstebieser Loose,") ||
    stop.name === "Hackenow" ||
    stop.name.startsWith("Hackenow,") ||
    stop.name.startsWith("Harnekop,") ||
    stop.name.startsWith("Haselberg,") ||
    stop.name.startsWith("Hasenholz,") ||
    stop.name === "Hathenow" ||
    stop.name.startsWith("Heckelberg,") ||
    stop.name.startsWith("Heinrichsdorf (MOL)") ||
    stop.name === "Hermersdorf" ||
    stop.name.startsWith("Herrensee,") ||
    stop.name === "Herzershof" ||
    stop.name.startsWith("Herzhorn,") ||
    stop.name.startsWith("Hohensaaten,") ||
    stop.name === "Hohenstein" ||
    stop.name.startsWith("Hohenwutzen,") ||
    stop.name.startsWith("Hoppegarten (bei Müncheberg)") ||
    stop.name === "Ihlow (MOL)" ||
    stop.name.startsWith("Jahnsfelde,") ||
    stop.name === "Karlsbiese" ||
    stop.name.startsWith("Karlsdorf (MOL)") ||
    stop.name === "Karlshof (bei Neulewin)" ||
    stop.name === "Katharinenhof" ||
    stop.name === "Kerstenbruch" ||
    stop.name.startsWith("Kerstenbruch,") ||
    stop.name.startsWith("Kiehnwerder,") ||
    stop.name.startsWith("Kienitz,") ||
    stop.name.startsWith("Klein Neuendorf,") ||
    stop.name === "Klosterdorf" ||
    stop.name === "Kruge" ||
    stop.name === "Krummenpfahl" ||
    stop.name.startsWith("Kunersdorf (MOL)") ||
    stop.name.startsWith("Küstrin-Kietz,") ||
    stop.name.startsWith("Lebus,") ||
    stop.name.startsWith("Letschin,") ||
    stop.name.startsWith("Leuenberg,") ||
    stop.name.startsWith("Libbenichen,") ||
    stop.name.startsWith("Lichtenow,") ||
    stop.name.startsWith("Lietzen,") ||
    stop.name.startsWith("Lüdersdorf,") ||
    stop.name === "Lüdersdorf (bei Wriezen)" ||
    stop.name === "Mallnow" ||
    stop.name.startsWith("Manschnow,") ||
    stop.name === "Marxdorf" ||
    stop.name === "Metzdorf" ||
    stop.name.startsWith("Müncheberg,") ||
    stop.name === "Münchehofe (bei Müncheberg)" ||
    stop.name === "Neu Mahlisch" ||
    stop.name.startsWith("Neu Rosenthal,") ||
    stop.name.startsWith("Neu Tucheband,") ||
    stop.name.startsWith("Neubarnim,") ||
    stop.name.startsWith("Neuenhagen (bei Oderberg)") ||
    stop.name === "Neuentempel" ||
    stop.name === "Neufeld" ||
    stop.name === "Neufriedland" ||
    stop.name === "Neugaul" ||
    stop.name === "Neugersdorf" ||
    stop.name.startsWith("Neuhardenberg,") ||
    stop.name === "Neukietz" ||
    stop.name === "Neuküstrinchen" ||
    stop.name === "Neulangsow" ||
    stop.name.startsWith("Neulewin,") ||
    stop.name === "Neulietzegöricke" ||
    stop.name.startsWith("Neulietzegöricke,") ||
    stop.name === "Neumädewitz" ||
    stop.name === "Neuranft" ||
    stop.name.startsWith("Neureetz,") ||
    stop.name.startsWith("Neurüdnitz,") ||
    stop.name === "Neutornow (MOL)" ||
    stop.name.startsWith("Neutrebbin,") ||
    stop.name === "Neuwustrow" ||
    stop.name.startsWith("Niederjesar,") ||
    stop.name.startsWith("Obersdorf,") ||
    stop.name.startsWith("Ortwig,") ||
    stop.name.startsWith("Petershagen (bei FF)") ||
    stop.name.startsWith("Platkow,") ||
    stop.name === "Platzfelde" ||
    stop.name.startsWith("Podelzig,") ||
    stop.name.startsWith("Posedin,") ||
    stop.name.startsWith("Pritzhagen,") ||
    stop.name.startsWith("Prötzel,") ||
    stop.name === "Quappendorf" ||
    stop.name === "Rathsdorf" ||
    stop.name.startsWith("Rathstock,") ||
    stop.name === "Regenmantel" ||
    stop.name.startsWith("Rehfeld (MOL)") ||
    stop.name.startsWith("Rehfelde,") ||
    stop.name.startsWith("Reichenberg,") ||
    stop.name.startsWith("Reichenow,") ||
    stop.name.startsWith("Ringenwalde (MOL)") ||
    stop.name === "Ruhlsdorf (MOL)" ||
    stop.name.startsWith("Sachsendorf,") ||
    stop.name.startsWith("Schiffmühle,") ||
    stop.name.startsWith("Schönfließ (MOL)") ||
    stop.name.startsWith("Schulzendorf (MOL)") ||
    stop.name.startsWith("Seelow,") ||
    stop.name.startsWith("Seelow-Gusow,") ||
    stop.name === "Sietzing" ||
    stop.name.startsWith("Solikante,") ||
    stop.name === "Sophienhof" ||
    stop.name.startsWith("Sophienthal,") ||
    stop.name === "Steinbeck" ||
    stop.name === "Sternebeck" ||
    stop.name.startsWith("Sternebeck,") ||
    stop.name === "Sydowswiese" ||
    stop.name === "Thöringswerder" ||
    stop.name === "Torgelow (MOL)" ||
    stop.name.startsWith("Trebnitz,") ||
    stop.name.startsWith("Treplin,") ||
    stop.name === "Vevais" ||
    stop.name.startsWith("Voßberg (MOL)") ||
    stop.name.startsWith("Waldsieversdorf,") ||
    stop.name.startsWith("Werbig (MOL)") ||
    stop.name.startsWith("Werder (bei Rehfelde)") ||
    stop.name.startsWith("Wilhelmsaue,") ||
    stop.name.startsWith("Wollenberg,") ||
    stop.name === "Wollup" ||
    stop.name === "Wölsickendorf" ||
    stop.name.startsWith("Worin,") ||
    stop.name.startsWith("Wriezen,") ||
    stop.name.startsWith("Wulkow (bei Booßen)") ||
    stop.name.startsWith("Wulkow (bei Trebnitz)") ||
    stop.name.startsWith("Wuschewier,") ||
    stop.name.startsWith("Zäckericker Loose,") ||
    stop.name.startsWith("Zechin,") ||
    stop.name === "Zinndorf"
);
const remainingStops = remainingAfterStations.filter(
  stop => stops.indexOf(stop) === -1
);
console.log(`after MOL: ${remainingStops.length}`);

export { stations, stops, remainingStops };
