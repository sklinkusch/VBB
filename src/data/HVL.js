import stopsUnsorted from "./unsorted";

const stops = stopsUnsorted.filter(
  stop =>
    // Berlin C
    stop.name.startsWith("Bredow,") ||
    stop.name.startsWith("Brieselang,") ||
    stop.name === "Buchow-Karpzow" ||
    stop.name.startsWith("Dallgow-Döberitz,") ||
    stop.name === "Dyrotz" ||
    stop.name.startsWith("Elstal,") ||
    stop.name.startsWith("Falkenrehde,") ||
    stop.name.startsWith("Falkensee,") ||
    stop.name.startsWith("Grünefeld,") ||
    stop.name.startsWith("Hoppenrade (HVL),") ||
    stop.name === "Niederhof" ||
    stop.name.startsWith("Paaren im Glien,") ||
    stop.name.startsWith("Pausin,") ||
    stop.name.startsWith("Perwenitz,") ||
    stop.name.startsWith("Priort,") ||
    stop.name.startsWith("Schönwalde (HVL),") ||
    stop.name.startsWith("Seeburg,") ||
    stop.name.startsWith("Seegefeld,") ||
    stop.name.startsWith("Wansdorf,") ||
    stop.name === "Wernitz" ||
    stop.name.startsWith("Wustermark,") ||
    stop.name.startsWith("Zeestow,") ||
    // Sonstige
    stop.name === "Albertsheim" ||
    stop.name.startsWith("Altgarz,") ||
    stop.name === "Bahnitz" ||
    stop.name.startsWith("Bamme,") ||
    stop.name === "Barnewitz" ||
    stop.name.startsWith("Berge (HVL)") ||
    stop.name.startsWith("Bergerdamm,") ||
    stop.name.startsWith("Böhne,") ||
    stop.name.startsWith("Börnicke (HVL)") ||
    stop.name.startsWith("Brädikow,") ||
    stop.name.startsWith("Bredow,") ||
    stop.name === "Briesen (HVL)" ||
    stop.name === "Briesener Zootzen" ||
    stop.name === "Buchhorst" ||
    stop.name === "Buckow (bei Nennhausen)" ||
    stop.name.startsWith("Buckow (bei Großwudicke)") ||
    stop.name.startsWith("Buschow,") ||
    stop.name.startsWith("Bützer,") ||
    stop.name.startsWith("Damm,") ||
    stop.name.startsWith("Damme (HVL)") ||
    stop.name === "Dickte" ||
    stop.name.startsWith("Döberitz (bei Premnitz)") ||
    stop.name.startsWith("Elslaake,") ||
    stop.name.startsWith("Etzin,") ||
    stop.name === "Ferchesar" ||
    stop.name === "Fliederhorst" ||
    stop.name === "Friedrichsbruch" ||
    stop.name.startsWith("Friesack,") ||
    stop.name.startsWith("Friesack (Mark)") ||
    stop.name === "Friesacker Zootzen" ||
    stop.name === "Galm" ||
    stop.name === "Gapel" ||
    stop.name.startsWith("Garlitz,") ||
    stop.name.startsWith("Gohlitz,") ||
    stop.name === "Görne" ||
    stop.name.startsWith("Göttlin,") ||
    stop.name.startsWith("Gräningen,") ||
    stop.name.startsWith("Groß Behnitz,") ||
    stop.name.startsWith("Großderschau,") ||
    stop.name.startsWith("Großwudicke,") ||
    stop.name === "Grütz" ||
    stop.name === "Gülpe" ||
    stop.name === "Gutenpaaren" ||
    stop.name.startsWith("Gutenpaaren,") ||
    stop.name.startsWith("Haage,") ||
    stop.name === "Hertefeld" ||
    stop.name.startsWith("Hohennauen,") ||
    stop.name === "Jahnberge" ||
    stop.name === "Jerchel" ||
    stop.name === "Jülitz" ||
    stop.name.startsWith("Ketzin,") ||
    stop.name.startsWith("Ketzin (Havel)") ||
    stop.name === "Kieck" ||
    stop.name.startsWith("Kienberg (HVL)") ||
    stop.name === "Kietz (HVL)" ||
    stop.name.startsWith("Klein Behnitz,") ||
    stop.name.startsWith("Kleinbuckow,") ||
    stop.name === "Kleinwudicke" ||
    stop.name === "Kleßen" ||
    stop.name === "Klessener Zootzen" ||
    stop.name === "Knoblauch" ||
    stop.name.startsWith("Kotzen,") ||
    stop.name === "Kriele" ||
    stop.name === "Landin" ||
    stop.name === "Liepe (HVL)" ||
    stop.name === "Lietzow (bei Nauen)" ||
    stop.name.startsWith("Markee,") ||
    stop.name === "Marquede" ||
    stop.name.startsWith("Milow (HVL)") ||
    stop.name.startsWith("Mögelin,") ||
    stop.name === "Möthlitz" ||
    stop.name === "Möthlow" ||
    stop.name === "Mützlitz" ||
    stop.name.startsWith("Nauen,") ||
    stop.name.startsWith("Nennhausen,") ||
    stop.name.startsWith("Neugarten,") ||
    stop.name.startsWith("Neukammer,") ||
    stop.name === "Neuwerder" ||
    stop.name.startsWith("Niebede,") ||
    stop.name === "Nitzahn" ||
    stop.name === "Ohnewitz" ||
    stop.name.startsWith("Paretz,") ||
    stop.name.startsWith("Parey,") ||
    stop.name.startsWith("Paulinenaue,") ||
    stop.name.startsWith("Pessin,") ||
    stop.name.startsWith("Premnitz,") ||
    stop.name === "Prietzen" ||
    stop.name === "Quermathen" ||
    stop.name.startsWith("Rathenow,") ||
    stop.name.startsWith("Retzow (HVL)") ||
    stop.name.startsWith("Rhinow,") ||
    stop.name === "Rhinsmühlen" ||
    stop.name === "Ribbeck (HVL)" ||
    stop.name === "Rübehorst" ||
    stop.name.startsWith("Schmetzdorf (HVL)") ||
    stop.name === "Schönholz (HVL)" ||
    stop.name === "Schwanebeck (HVL)" ||
    stop.name === "Selbelang" ||
    stop.name.startsWith("Semlin,") ||
    stop.name.startsWith("Senzke,") ||
    stop.name.startsWith("Spaatz,") ||
    stop.name.startsWith("Stechow,") ||
    stop.name.startsWith("Steckelsdorf,") ||
    stop.name.startsWith("Stölln,") ||
    stop.name.startsWith("Strodehne,") ||
    stop.name.startsWith("Tietzow,") ||
    stop.name.startsWith("Tremmen,") ||
    stop.name.startsWith("Utershorst,") ||
    stop.name === "Vieritz" ||
    stop.name === "Vietznitz" ||
    stop.name.startsWith("Wachow,") ||
    stop.name.startsWith("Wagenitz,") ||
    stop.name === "Warsow" ||
    stop.name.startsWith("Wassersuppe,") ||
    stop.name === "Wilhelminenthal" ||
    stop.name === "Witzke" ||
    stop.name === "Wolsier" ||
    stop.name.startsWith("Wutzetz,") ||
    stop.name.startsWith("Zachow,") ||
    stop.name === "Zollchow (HVL)"
);

export { stops };
