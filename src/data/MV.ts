import { remainingStops as stopsUnsorted } from "./UM";

type Stop = {
  id: string,
  name: string
}

const stops = stopsUnsorted.filter(
  (stop: Stop) =>
    stop.name.startsWith("Altentreptow,") ||
    stop.name.startsWith("Anklam,") ||
    stop.name.startsWith("Bad Kleinen,") ||
    stop.name.startsWith("Bannemin-Mölschow,") ||
    stop.name.startsWith("Bansin,") ||
    stop.name.startsWith("Bergholz (UER)") ||
    stop.name === "Blankenberg(Meckl)" ||
    stop.name.startsWith("Blankensee(Meckl)") ||
    stop.name.startsWith("Blücher,") ||
    stop.name.startsWith("Blumenhagen (bei Pasewalk)") ||
    stop.name === "Bobitz" ||
    stop.name === "Buddenhagen" ||
    stop.name.startsWith("Burg Stargard(Meckl)") ||
    stop.name === "Bützow" ||
    stop.name.startsWith("Cammin(Meckl)") ||
    stop.name === "Crivitz" ||
    stop.name.startsWith("Demmin,") ||
    stop.name.startsWith("Dorf Mecklenburg,") ||
    stop.name === "Domsühl" ||
    stop.name.startsWith("Ducherow,") ||
    stop.name.startsWith("Dütschow,") ||
    stop.name === "Eggesin" ||
    stop.name.startsWith("Elmenhorst,") ||
    stop.name.startsWith("Ferdinandshof,") ||
    stop.name === "Friedrichsruhe(Meck)" ||
    stop.name === "Gadebusch" ||
    stop.name.startsWith("Gnevkow,") ||
    stop.name.startsWith("Grabow (Mecklenburg)") ||
    stop.name === "Grambow" ||
    stop.name === "Grambow(Gr)" ||
    stop.name.startsWith("Greifswald,") ||
    stop.name === "Grevesmühlen" ||
    stop.name === "Grieben(Meckl)" ||
    stop.name.startsWith("Grimmen,") ||
    stop.name === "Groß Brütz" ||
    stop.name.startsWith("Groß Kiesow,") ||
    stop.name.startsWith("Groß Laasch,") ||
    stop.name.startsWith("Güstrow,") ||
    stop.name.startsWith("Hagenow,") ||
    stop.name.startsWith("Hagenow Land,") ||
    stop.name === "Herrnburg" ||
    stop.name === "Hohendorf" ||
    stop.name === "Holdorf(Meckl)" ||
    stop.name.startsWith("Holthusen,") ||
    stop.name.startsWith("Jasnitz,") ||
    stop.name.startsWith("Jatznick,") ||
    stop.name === "Jeeser" ||
    stop.name === "Karlsburg" ||
    stop.name === "Karlshagen" ||
    stop.name.startsWith("Klein Bünzow,") ||
    stop.name.startsWith("Kölpinsee,") ||
    stop.name.startsWith("Koserow,") ||
    stop.name.startsWith("Kratzeburg,") ||
    stop.name.startsWith("Lalendorf,") ||
    stop.name.startsWith("Langhagen,") ||
    stop.name === "Linchenshöh" ||
    stop.name.startsWith("Löcknitz,") ||
    stop.name.startsWith("Lüblow(Meckl)") ||
    stop.name.startsWith("Lübstorf,") ||
    stop.name === "Lüdersdorf(Meckl)" ||
    stop.name.startsWith("Ludwigslust,") ||
    stop.name === "Lützow" ||
    stop.name === "Malchin" ||
    stop.name.startsWith("Miltzow,") ||
    stop.name.startsWith("Mirow,") ||
    stop.name.startsWith("Moidentin,") ||
    stop.name === "Mölln(Meckl)" ||
    stop.name === "Neetzka" ||
    stop.name.startsWith("Neubrandenburg,") ||
    stop.name.startsWith("Neustadt-Glewe,") ||
    stop.name.startsWith("Neustrelitz,") ||
    stop.name === "Neu Pudagla" ||
    stop.name === "Neu Wokern" ||
    stop.name === "Oertzenhof" ||
    stop.name.startsWith("Parchim,") ||
    stop.name.startsWith("Pasewalk,") ||
    stop.name === "Pasewalk Ost" ||
    stop.name === "Peenemünde" ||
    stop.name === "Plaaz" ||
    stop.name === "Plate(Meckl)" ||
    stop.name === "Plüschow" ||
    stop.name === "Priemerburg" ||
    stop.name.startsWith("Rakow,") ||
    stop.name.startsWith("Rastow,") ||
    stop.name === "Rehna" ||
    stop.name === "Reuterstadt Stavenhagen" ||
    stop.name.startsWith("Rostock,") ||
    stop.name.startsWith("Rostock ") ||
    stop.name.startsWith("Rostock-") ||
    stop.name === "Ruthenbeck" ||
    stop.name === "Sandförde" ||
    stop.name.startsWith("Schmollensee,") ||
    stop.name === "Schönberg(Meckl)" ||
    stop.name.startsWith("Schwarz,") ||
    stop.name.startsWith("Schwerin,") ||
    stop.name.startsWith("Schwerin-") ||
    stop.name.startsWith("Seebad Heringsdorf,") ||
    stop.name === "Sponholz" ||
    stop.name.startsWith("Spornitz,") ||
    stop.name === "Starsow" ||
    stop.name.startsWith("Sternfeld,") ||
    stop.name.startsWith("Stralsund,") ||
    stop.name.startsWith("Strasburg,") ||
    stop.name.startsWith("Strohkirchen,") ||
    stop.name.startsWith("Stubbenfelde,") ||
    stop.name === "Sukow(b Schwerin)" ||
    stop.name.startsWith("Sülstorf,") ||
    stop.name === "Teterow" ||
    stop.name === "Torgelow" ||
    stop.name.startsWith("Trassenheide,") ||
    stop.name === "Trassenmoor" ||
    stop.name.startsWith("Triepkendorf,") ||
    stop.name === "Ueckermünde" ||
    stop.name === "Ueckermünde Stadthafen" ||
    stop.name.startsWith("Ückeritz,") ||
    stop.name.startsWith("Utzedel,") ||
    stop.name === "Ventschow" ||
    stop.name.startsWith("Waren (Müritz)") ||
    stop.name.startsWith("Warnemünde,") ||
    stop.name === "Warnemünde Werft" ||
    stop.name.startsWith("Wismar,") ||
    stop.name.startsWith("Wittenhagen,") ||
    stop.name.startsWith("Woldegk,") ||
    stop.name.startsWith("Wolgast,") ||
    stop.name.startsWith("Wolgaster Fähre,") ||
    stop.name.startsWith("Wüstenfelde,") ||
    stop.name.startsWith("Zarrendorf,") ||
    stop.name.startsWith("Zempin,") ||
    stop.name.startsWith("Zerrenthin,") ||
    stop.name.startsWith("Zinnowitz,") ||
    stop.name.startsWith("Züssow,")
);

const remainingStops = stopsUnsorted.filter((stop: Stop) => stops.indexOf(stop) === -1);
// console.log(`after MV: ${remainingStops.length}`);
// console.log(remainingStops);
export { stops, remainingStops };
