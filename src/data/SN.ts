import { remainingStops as stopsUnsorted } from "./SA";

type Stop = {
  id: string,
  name: string
}

const stops = stopsUnsorted.filter(
  (stop: Stop) =>
    stop.name === "Altenbach" ||
    stop.name.startsWith("Altmittweida,") ||
    stop.name.startsWith("Bad Muskau,") ||
    stop.name === "Bautzen" ||
    stop.name.startsWith("Beilrode,") ||
    stop.name === "Bennewitz" ||
    stop.name === "Bischofswerda" ||
    stop.name.startsWith("Bluno,") ||
    stop.name === "Borsdorf(Sachs)" ||
    stop.name === "Breitendorf" ||
    stop.name.startsWith("Chemnitz,") ||
    stop.name.startsWith("Cossebaude,") ||
    stop.name.startsWith("Coswig (bei Dresden)") ||
    stop.name === "Dahlen(Sachs)" ||
    stop.name.startsWith("Delitzsch ") ||
    stop.name === "Demitz-Thumitz" ||
    stop.name.startsWith("Döbeln,") ||
    stop.name.startsWith("Doberschütz,") ||
    stop.name === "Döbrichau" ||
    stop.name.startsWith("Dresden,") ||
    stop.name.startsWith("Dresden-") ||
    stop.name.startsWith("Eilenburg,") ||
    stop.name.startsWith("Erlau(Sachsen)") ||
    stop.name.startsWith("Frauenhain,") ||
    stop.name === "Gerichshain" ||
    stop.name === "Gersdorf(Görlitz)" ||
    stop.name.startsWith("Görlitz,") ||
    stop.name.startsWith("Görlitz-") ||
    stop.name.startsWith("Gröditz,") ||
    stop.name.startsWith("Großenhain,") ||
    stop.name.startsWith("Hagenwerder,") ||
    stop.name.startsWith("Hähnichen,") ||
    stop.name === "Hirschfelde, Bahnhof" ||
    stop.name === "Hirschfelde, Markt" ||
    stop.name.startsWith("Horka,") ||
    stop.name.startsWith("Hoyerswerda,") ||
    stop.name.startsWith("Jesewitz (bei Leipzig)") ||
    stop.name === "Klitten" ||
    stop.name.startsWith("Kodersdorf,") ||
    stop.name === "Kubschütz" ||
    stop.name === "Kühren" ||
    stop.name.startsWith("Lampertswalde,") ||
    stop.name.startsWith("Lauta,") ||
    stop.name.startsWith("Leipzig,") ||
    stop.name.startsWith("Leipzig-") ||
    stop.name.startsWith("Leipzig ") ||
    stop.name.startsWith("Limmritz (Sachsen)") ||
    stop.name === "Löbau(Sachs)" ||
    stop.name === "Lohsa" ||
    stop.name === "Machern(Sachs)" ||
    stop.name.startsWith("Mittweida,") ||
    stop.name === "Mücka" ||
    stop.name.startsWith("Mockrehna,") ||
    stop.name.startsWith("Nardt,") ||
    stop.name.startsWith("Nauwalde,") ||
    stop.name.startsWith("Niederau,") ||
    stop.name.startsWith("Niederwartha,") ||
    stop.name.startsWith("Nieska,") ||
    stop.name === "Niesky" ||
    stop.name.startsWith("Oberlichtenau,") ||
    stop.name === "Oschatz" ||
    stop.name.startsWith("Ostrau,") ||
    stop.name.startsWith("Ottendorf(Mittweida)") ||
    stop.name === "Petershain" ||
    stop.name === "Pommritz" ||
    stop.name.startsWith("Pönitz (bei Leipzig)") ||
    stop.name.startsWith("Priestewitz,") ||
    stop.name.startsWith("Rackwitz (bei Leipzig)") ||
    stop.name.startsWith("Radebeul-Naundorf,") ||
    stop.name === "Reichenbach(Oberlausitz)" ||
    stop.name.startsWith("Reppis,") ||
    stop.name.startsWith("Riesa,") ||
    stop.name.startsWith("Rietschen,") ||
    stop.name.startsWith("Sabrodt,") ||
    stop.name.startsWith("Schleife,") ||
    stop.name.startsWith("Schwarzkollm,") ||
    stop.name.startsWith("Schweikershain,") ||
    stop.name.startsWith("Schweinfurth,") ||
    stop.name.startsWith("Seerhausen,") ||
    stop.name === "Seitschen" ||
    stop.name === "Spansberg" ||
    stop.name.startsWith("Spreetal,") ||
    stop.name.startsWith("Spreewitz,") ||
    stop.name.startsWith("Stauchitz,") ||
    stop.name.startsWith("Steina,") ||
    stop.name.startsWith("Taucha (bei Leipzig)") ||
    stop.name.startsWith("Tiefenau,") ||
    stop.name.startsWith("Torgau,") ||
    stop.name.startsWith("Uhsmannsdorf,") ||
    stop.name === "Uhyst" ||
    stop.name.startsWith("Waldheim,") ||
    stop.name.startsWith("Weinböhla Hp,") ||
    stop.name.startsWith("Weißwasser (Oberlausitz)") ||
    stop.name.startsWith("Wülknitz,") ||
    stop.name === "Wurzen" ||
    stop.name.startsWith("Zabeltitz,") ||
    stop.name.startsWith("Zerre,") ||
    stop.name.startsWith("Zeithain,") ||
    stop.name.startsWith("Zittau,") ||
    stop.name === "Zoblitz" ||
    stop.name.startsWith("Zschaitz,") ||
    stop.name === "Zschortau" ||
    stop.name.startsWith("Zwethau,")
);

const remainingStops = stopsUnsorted.filter((stop: Stop) => stops.indexOf(stop) === -1);
// console.log(`after SN: ${remainingStops.length}`);
// console.log(remainingStops);
export { stops, remainingStops };
