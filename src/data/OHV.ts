import { remainingStops as stopsUnsorted } from "./MOL"

type Stop = {
	id: string
	name: string
}

const stations = stopsUnsorted.filter(
	(stop: Stop) =>
		stop.name.startsWith("S Mühlenbeck-Mönchmühle") ||
		stop.name.startsWith("S Schönfließ") ||
		stop.name.startsWith("S Bergfelde") ||
		stop.name.startsWith("S Hohen Neuendorf") ||
		stop.name.startsWith("S Birkenwerder") ||
		stop.name.startsWith("S Borgsdorf") ||
		stop.name.startsWith("S Lehnitz") ||
		stop.name === "S Oranienburg Bhf" ||
		stop.name.startsWith("S Hennigsdorf")
)
const remainingAfterStations = stopsUnsorted.filter(
	(stop: Stop) => stations.indexOf(stop) === -1
)
const stops = remainingAfterStations.filter(
	(stop: Stop) =>
		// Berlin C
		stop.name.startsWith("Bärenklau (OHV),") ||
		stop.name.startsWith("Bergfelde,") ||
		stop.name.startsWith("Bernöwe") ||
		stop.name.startsWith("Birkenwerder,") ||
		stop.name.startsWith("Borgsdorf,") ||
		stop.name.startsWith("Bötzow,") ||
		stop.name.startsWith("Eichstädt,") ||
		stop.name.startsWith("Germendorf,") ||
		stop.name.startsWith("Glienicke/Nordbahn,") ||
		stop.name.startsWith("Hennigsdorf,") ||
		stop.name.startsWith("Hohen Neuendorf,") ||
		stop.name.startsWith("Leegebruch,") ||
		stop.name.startsWith("Marwitz,") ||
		stop.name.startsWith("Mönchmühle,") ||
		stop.name.startsWith("Mühlenbeck,") ||
		stop.name.startsWith("Neu-Vehlefanz") ||
		stop.name.startsWith("Nieder Neuendorf,") ||
		stop.name.startsWith("Oranienburg,") ||
		stop.name.startsWith("Pinnow (bei Velten)") ||
		stop.name.startsWith("Sachsenhausen,") ||
		stop.name.startsWith("Schildow,") ||
		stop.name.startsWith("Schmachtenhagen (OHV),") ||
		stop.name.startsWith("Schönfließ (OHV),") ||
		stop.name.startsWith("Stolpe (OHV),") ||
		stop.name.startsWith("Summt,") ||
		stop.name.startsWith("Vehlefanz,") ||
		stop.name.startsWith("Velten,") ||
		stop.name.startsWith("Wensickendorf,") ||
		stop.name.startsWith("Wolfslake") ||
		stop.name.startsWith("Zühlsdorf") ||
		stop.name.startsWith("Zühlslake") ||
		// Sonstige
		stop.name.startsWith("Altglobsow,") ||
		stop.name.startsWith("Altlüdersdorf,") ||
		stop.name === "Altthymen" ||
		stop.name === "Amalienfelde" ||
		stop.name.startsWith("Badingen,") ||
		stop.name === "Barsdorf" ||
		stop.name === "Bartelshof" ||
		stop.name === "Baumgarten (OHV)" ||
		stop.name.startsWith("Beetz,") ||
		stop.name.startsWith("Beetz-Sommerfeld,") ||
		stop.name.startsWith("Bergsdorf,") ||
		stop.name.startsWith("Blumenow,") ||
		stop.name === "Boltenhof" ||
		stop.name.startsWith("Bredereiche,") ||
		stop.name.startsWith("Buberow,") ||
		stop.name === "Buchholz (bei Altglobsow)" ||
		stop.name.startsWith("Burgwall,") ||
		stop.name === "Burow (bei Altglobsow)" ||
		stop.name.startsWith("Dagow,") ||
		stop.name.startsWith("Dameswalde,") ||
		stop.name.startsWith("Dannenwalde (bei Gransee)") ||
		stop.name === "Dollgow" ||
		stop.name === "Drögen" ||
		stop.name.startsWith("Falkenthal,") ||
		stop.name === "Fichtengrund" ||
		stop.name === "Flatow" ||
		stop.name.startsWith("Flatow,") ||
		stop.name.startsWith("Freienhagen,") ||
		stop.name.startsWith("Friedrichsthal (OHV)") ||
		stop.name.startsWith("Fürstenberg (Havel)") ||
		stop.name === "Glambeck (OHV)" ||
		stop.name.startsWith("Gramzow (OHV)") ||
		stop.name.startsWith("Gransee,") ||
		stop.name.startsWith("Grieben,") ||
		stop.name.startsWith("Großmutz,") ||
		stop.name.startsWith("Großwoltersdorf (OHV)") ||
		stop.name === "Groß Ziethen (OHV)" ||
		stop.name.startsWith("Grüneberg,") ||
		stop.name === "Güldenhof" ||
		stop.name.startsWith("Gutengermendorf,") ||
		stop.name.startsWith("Hammer,") ||
		stop.name.startsWith("Häsen,") ||
		stop.name.startsWith("Himmelpfort,") ||
		stop.name.startsWith("Hohenbruch,") ||
		stop.name === "Höpen" ||
		stop.name === "Hoppenrade (OHV)" ||
		stop.name.startsWith("Kappe,") ||
		stop.name === "Karlsruh" ||
		stop.name.startsWith("Klein-Mutz,") ||
		stop.name === "Klein Ziethen (OHV)" ||
		stop.name.startsWith("Kraatz (bei Gransee)") ||
		stop.name.startsWith("Kremmen,") ||
		stop.name.startsWith("Kreuzbruch,") ||
		stop.name.startsWith("Krewelin,") ||
		stop.name.startsWith("Kurtschlag,") ||
		stop.name.startsWith("Liebenberg,") ||
		stop.name.startsWith("Liebenthal (OHV)") ||
		stop.name.startsWith("Liebenwalde,") ||
		stop.name.startsWith("Linde,") ||
		stop.name.startsWith("Löwenberg,") ||
		stop.name.startsWith("Löwenberg (Mark)") ||
		stop.name.startsWith("Ludwigsaue,") ||
		stop.name === "Neu Ludwigsaue" ||
		stop.name.startsWith("Malz,") ||
		stop.name.startsWith("Marienthal,") ||
		stop.name === "Mehlhase" ||
		stop.name.startsWith("Menz,") ||
		stop.name.startsWith("Meseberg,") ||
		stop.name.startsWith("Mildenberg,") ||
		stop.name.startsWith("Nassenheide,") ||
		stop.name === "Neuendorf" ||
		stop.name.startsWith("Neuendorf,") ||
		stop.name === "Neuglobsow" ||
		stop.name === "Neuhäsen" ||
		stop.name.startsWith("Neuholland,") ||
		stop.name.startsWith("Neulögow,") ||
		stop.name.startsWith("Neulöwenberg,") ||
		stop.name.startsWith("Neulüdersdorf,") ||
		stop.name.startsWith("Neuroofen,") ||
		stop.name === "Neuthymen" ||
		stop.name.startsWith("Neutornow (OHV)") ||
		stop.name.startsWith("Neu Vehlefanz,") ||
		stop.name.startsWith("Osterne,") ||
		stop.name.startsWith("Papenberge,") ||
		stop.name === "Qualzow" ||
		stop.name.startsWith("Rauschendorf,") ||
		stop.name.startsWith("Ravensbrück,") ||
		stop.name === "Ribbeck (OHV)" ||
		stop.name === "Ringsleben" ||
		stop.name.startsWith("Rönnebeck,") ||
		stop.name.startsWith("Schönermark (bei Gransee)") ||
		stop.name.startsWith("Schulzendorf (OHV)") ||
		stop.name.startsWith("Schwante,") ||
		stop.name.startsWith("Seilershof,") ||
		stop.name.startsWith("Sommerfeld,") ||
		stop.name === "Sommerswalde" ||
		stop.name.startsWith("Sonnenberg,") ||
		stop.name.startsWith("Staffelde (OHV)") ||
		stop.name.startsWith("Steinförde,") ||
		stop.name.startsWith("Teschendorf,") ||
		stop.name.startsWith("Tornow (OHV)") ||
		stop.name.startsWith("Vogelsang (OHV)") ||
		stop.name === "Wackerberge" ||
		stop.name === "Wendefeld" ||
		stop.name.startsWith("Wentow,") ||
		stop.name.startsWith("Wesendorf,") ||
		stop.name.startsWith("Wolfsruh,") ||
		stop.name.startsWith("Zabelsdorf,") ||
		stop.name.startsWith("Zehdenick,") ||
		stop.name.startsWith("Zehlendorf (OHV)") ||
		stop.name.startsWith("Zernikow (OHV)") ||
		stop.name.startsWith("Zootzen (OHV)")
)
const remainingStops = remainingAfterStations.filter(
	(stop: Stop) => stops.indexOf(stop) === -1
)
// console.log(`after OHV: ${remainingStops.length}`);
export { stations, stops, remainingStops }
