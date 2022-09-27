type Dir = string | null

export function getAnhalterBahnhof(lineName: string) {
  switch (lineName) {
    case "M29": return "S Anhalter Bahnhof [Bus Schöneberger Str.]"
    case "M41": return "S Anhalter Bahnhof [Bus Stresemannstr.]"
    default: return "S Anhalter Bahnhof [Bus]"
  }
}

export function getWarschauerStr(mode: string, lineName: string, direction: Dir, provenance: Dir) {
  if (mode === "arr" && provenance !== null) {
    switch (lineName) {
      case "M10": return ["S+U Warschauer Str. [Warschauer Str.]", 4]
      case "300": return ["S+U Warschauer Str. [Tamara-Danz-Str.]", 8]
      case "347": 
        if (provenance.includes("Tunnelstr")) return ["S+U Warschauer Str. [Warschauer Str.]", 6]
        return ["S+U Warschauer Str. [Warschauer Str.]", 3]
      default: return ["S+U Warschauer Str.", null]
    }
  } else if (mode === 'dep' && direction !== null) {
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