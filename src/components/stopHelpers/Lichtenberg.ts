type Dir = string | null

export function getKarlshorst(id: string, product: string, lineName: string) {
  switch (id) {
    case "900000162001":
      if (product === 'tram') return "S Karlshorst [Tram Treskowallee]"
      if (product === 'bus' && /[23]96/.test(lineName)) return "S Karlshorst [Bus Stolzenfelsstr.]"
      return "S Karlshorst [Bus]"
    case "900000162702":
      return "S Karlshorst [Bus Dönhoffstr.]"
  }
}

export function getLichtenberg(lineName: string, direction: Dir) {
  if (direction !== null) {
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
}

export function getRummelsburg(product: string, lineName: string) {
  if (product === 'tram') {
    return "S Rummelsburg [Tram Hauptstr.]"
  } else {
    switch(lineName) {
      case "194":
      case "240":
      case "N94":
        return "S Rummelsburg [Bus Nöldnerstr.]"
      case "N40":
        return "S Rummelsburg [Bus Hauptstr.]"
      default: return "S Rummelsburg [Bus]"
    }
  }
}