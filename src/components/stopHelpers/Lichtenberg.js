export function getLichtenberg(lineName, direction) {
  switch(lineName) {
    case "21":
    case "37":
      return ["S+U Lichtenberg/Siegfriedstr.", 2]
    case "240":
      if(direction.includes("Ostbahnhof")) return ["S+U Lichtenberg [Bus Weitlingstr.]", 8]
      return ["S+U Lichtenberg [Bus Weitlingstr.]", 11]
    case "256":
      if(direction.includes("Zentralfriedhof")) return ["S+U Lichtenberg/Siegfriedstr.", 1]
      return ["S+U Lichtenberg/Siegfriedstr.", 2]
    case "108":
    case "296":
      return ["S+U Lichtenberg [Bus Weitlingstr.]", 8]
    case "N50":
      return ["S+U Lichtenberg [Bus Einbecker Str.]", 12]
    default:
      return ["S+U Lichtenberg", null]
  }
}