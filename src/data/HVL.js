import stopsUnsorted from "./unsorted";

const stops = stopsUnsorted.filter(
  stop =>
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
    stop.name.startsWith("Zeestow,")
);

export { stops };
