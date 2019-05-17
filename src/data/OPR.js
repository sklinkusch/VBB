import stopsUnsorted from "./unsorted";

const stops = stopsUnsorted.filter(
  stop =>
    stop.name === "Ackerfelde" ||
    stop.name === "Albertinenhof" ||
    stop.name.startsWith("Alt Daber,") ||
    stop.name === "Alt Lutterow" ||
    stop.name.startsWith("Alt Ruppin,") ||
    stop.name === "Altfriesack" ||
    stop.name === "Babe" ||
    stop.name === "Babitz" ||
    stop.name.startsWith("Bantikow,") ||
    stop.name.startsWith("Banzendorf,") ||
    stop.name === "Barsikow" ||
    stop.name === "Bartschendorf" ||
    stop.name.startsWith("Basdorf (OPR)") ||
    stop.name.startsWith("Bechlin,") ||
    stop.name.startsWith("Berlinchen,") ||
    stop.name.startsWith("Berlitt,") ||
    stop.name === "Betzin" ||
    stop.name.startsWith("Biesen,") ||
    stop.name === "Neu Biesen" ||
    stop.name === "Binenwalde" ||
    stop.name.startsWith("Blandikow,") ||
    stop.name === "Blankenberg" ||
    stop.name === "Blechern Hahn" ||
    stop.name.startsWith("Blesendorf,") ||
    stop.name.startsWith("Blumenthal,") ||
    stop.name.startsWith("Bork,") ||
    stop.name === "Braunsberg" ||
    stop.name.startsWith("Breddin,") ||
    stop.name === "Brunn" ||
    stop.name.startsWith("Brunne,") ||
    stop.name.startsWith("Bückwitz,") ||
    stop.name === "Buschhof" ||
    stop.name === "Buskow" ||
    stop.name === "Bütow" ||
    stop.name === "Charlottenau" ||
    stop.name === "Christdorf" ||
    stop.name === "Dabergotz" ||
    stop.name.startsWith("Dabergotz,") ||
    stop.name === "Dahlhausen" ||
    stop.name === "Damelack" ||
    stop.name.startsWith("Dammkrug,") ||
    stop.name === "Dannenfeld" ||
    stop.name.startsWith("Darritz,") ||
    stop.name === "Dechtow" ||
    stop.name.startsWith("Dechtow,") ||
    stop.name.startsWith("Dessow,") ||
    stop.name === "Deutschhof" ||
    stop.name === "Dierberg" ||
    stop.name === "Dorf Zechlin" ||
    stop.name.startsWith("Dossow,") ||
    stop.name.startsWith("Dranse,") ||
    stop.name.startsWith("Dreetz,") ||
    stop.name === "Dreibrück" ||
    stop.name === "Drewen" ||
    stop.name === "Eichenfelde" ||
    stop.name === "Emilienhof" ||
    stop.name.startsWith("Emilienhof,") ||
    stop.name.startsWith("Ernstenswille") ||
    stop.name.startsWith("Fehrbellin,") ||
    stop.name === "Flecken Zechlin" ||
    stop.name.startsWith("Frankendorf (OPR)") ||
    stop.name === "Fredenhorst" ||
    stop.name.startsWith("Fretzdorf,") ||
    stop.name.startsWith("Freyenstein,") ||
    stop.name.startsWith("Gadow (OPR)") ||
    stop.name.startsWith("Gantikow,") ||
    stop.name === "Ganz" ||
    stop.name.startsWith("Ganzer,") ||
    stop.name.startsWith("Gartow,") ||
    stop.name.startsWith("Garz (OPR)") ||
    stop.name.startsWith("Giesenhorst,") ||
    stop.name.startsWith("Glienicke (OPR)") ||
    stop.name.startsWith("Gnewikow,") ||
    stop.name === "Goldbeck (bei Wittstock)" ||
    stop.name === "Goldbeck (bei Kyritz)" ||
    stop.name.startsWith("Gottberg,") ||
    stop.name.startsWith("Grabow (OPR)") ||
    stop.name.startsWith("Granzow,") ||
    stop.name === "Griebsee" ||
    stop.name === "Groß Haßlow" ||
    stop.name.startsWith("Großzerlang,") ||
    stop.name === "Grünfelde" ||
    stop.name.startsWith("Grünplan,") ||
    stop.name === "Gühlen" ||
    stop.name === "Gühlen Glienicke" ||
    stop.name === "Gustavsruh (OPR)" ||
    stop.name === "Hakenberg" ||
    stop.name === "Heilbrunn" ||
    stop.name.startsWith("Heiligengrabe,") ||
    stop.name === "Heimland" ||
    stop.name === "Heinrichsdorf (bei Neuruppin)" ||
    stop.name === "Heinrichsdorf (bei Wittstock)" ||
    stop.name === "Heinrichsfelde (bei Kyritz)" ||
    stop.name === "Helenenhof" ||
    stop.name.startsWith("Herzberg (Mark)") ||
    stop.name === "Herzsprung (OPR)" ||
    stop.name === "Hindenberg (OPR)" ||
    stop.name === "Hohenofen" ||
    stop.name.startsWith("Holzhausen,") ||
    stop.name === "Horst (bei Blumenthal)" ||
    stop.name.startsWith("Jabel,") ||
    stop.name === "Joachimshof" ||
    stop.name.startsWith("Kagar,") ||
    stop.name.startsWith("Kampehl,") ||
    stop.name.startsWith("Kantow,") ||
    stop.name === "Karl-Marx-Hof" ||
    stop.name === "Karnzow" ||
    stop.name.startsWith("Karstedtshof,") ||
    stop.name.startsWith("Karwe (OPR)") ||
    stop.name.startsWith("Karwesee,") ||
    stop.name.startsWith("Katerbow,") ||
    stop.name.startsWith("Keller,") ||
    stop.name === "Kerzlin" ||
    stop.name === "Klein Haßlow" ||
    stop.name.startsWith("Kleinzerlang,") ||
    stop.name === "Klosterheide" ||
    stop.name === "Klosterhof" ||
    stop.name === "Köhnsbau" ||
    stop.name.startsWith("Königsberg,") ||
    stop.name.startsWith("Königshorst,") ||
    stop.name === "Köpernitz (OPR)" ||
    stop.name === "Koppenbrück" ||
    stop.name.startsWith("Koppenbrück,") ||
    stop.name === "Kötzlin" ||
    stop.name === "Krangen" ||
    stop.name.startsWith("Kränzlin,") ||
    stop.name === "Krüllenkempe" ||
    stop.name === "Küdow" ||
    stop.name.startsWith("Küdow,") ||
    stop.name === "Kuhburgsberg" ||
    stop.name === "Kuhhorst" ||
    stop.name === "Kuhlmühle" ||
    stop.name.startsWith("Kümmernitz,") ||
    stop.name === "Kunsterspring" ||
    stop.name.startsWith("Kyritz,") ||
    stop.name.startsWith("Langen,") ||
    stop.name === "Leddin" ||
    stop.name === "Lellichow" ||
    stop.name.startsWith("Lentzke,") ||
    stop.name === "Lichtenberg (OPR)" ||
    stop.name.startsWith("Liebenthal (OPR)") ||
    stop.name.startsWith("Lindow (Mark") ||
    stop.name === "Linow" ||
    stop.name === "Linowsee" ||
    stop.name.startsWith("Linum,") ||
    stop.name.startsWith("Lobeofsund,") ||
    stop.name.startsWith("Lögow,") ||
    stop.name.startsWith("Lohm,") ||
    stop.name === "Lüchfeld" ||
    stop.name === "Luhme" ||
    stop.name.startsWith("Manker,") ||
    stop.name === "Maulbeerwalde" ||
    stop.name.startsWith("Mechow (OPR)") ||
    stop.name.startsWith("Metzelthin (OPR)") ||
    stop.name === "Michaelisbruch" ||
    stop.name === "Möckern" ||
    stop.name === "Molchow"
);

export { stops };
