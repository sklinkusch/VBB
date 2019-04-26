import stopsUnsorted from "./unsorted";

const stations = stopsUnsorted.filter(
  stop =>
    stop.name.includes("S Flughafen Berlin-Schönefeld") ||
    stop.name.includes("S Eichwalde") ||
    stop.name.includes("S Zeuthen") ||
    stop.name.includes("S Wildau") ||
    stop.name.includes("S Königs Wusterhausen") ||
    stop.name.startsWith("Flughafen Schönefeld")
);
const stops = stopsUnsorted.filter(
  stop =>
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
    stop.name.startsWith("Ziegenhals,")
);
export { stations, stops };
