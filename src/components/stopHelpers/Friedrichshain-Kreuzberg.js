export function getWarschauerStr(mode, lineName, direction, provenance) {
  if (mode === "arr") {
    switch (lineName) {
      case "M10": return ["S+U Warschauer Str. [Warschauer Str.]", 4]
      case "300": return ["S+U Warschauer Str. [Tamara-Danz-Str.]", 8]
      case "347": 
        if (provenance.includes("Tunnelstr")) return ["S+U Warschauer Str. [Warschauer Str.]", 6]
        return ["S+U Warschauer Str. [Warschauer Str.]", 3]
      default: return ["S+U Warschauer Str.", null]
    }
  } else {
    switch (lineName) {
      case "M10": return ["S+U Warschauer Str. [Warschauer Str.]", 5]
      case "300": return ["S+U Warschauer Str. [Tamara-Danz-Str.]", 7]
      case "347": 
        if (direction.includes("Tunnelstr")) return ["S+U Warschauer Str. [Warschauer Str.]", 3]
        return ["S+U Warschauer Str. [Warschauer Str.]", 6]
      default: return ["S+U Warschauer Str.", null]
    }
  }
}