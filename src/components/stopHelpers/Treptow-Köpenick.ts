type Dir = string | null

export function getAdlershof(mode: string, lineName: string, direction: Dir, provenance: Dir) {
  if (mode === "arr" && provenance !== null) {
    switch(lineName) {
      case "M17":
        return ["S Adlershof [Tram Wendeschleife]", 6]
      case "61":
        if(provenance.includes("Schöneweide")) return ["S Adlershof [Tram Rudower Chaussee]", 3]
        return ["S Adlershof [Tram Rudower Chaussee]", 2]
      case "63":
        if(provenance.includes("Johannisthal")) return ["S Adlershof [Tram Rudower Chaussee]", 3]
        return ["S Adlershof [Tram Rudower Chaussee]",2]
      case "162":
        if(provenance.includes("Rudow")) return ["S Adlershof [Bus Rudower Chaussee]", 7]
        return ["S Adlershof [Bus Rudower Chaussee]", 1]
      case "163":
        if(provenance.includes("Schöneweide")) return ["S Adlershof [Bus Rudower Chaussee]", 7]
        return ["S Adlershof [Bus Rudower Chaussee]", 1]
      case "164":
        if(provenance.includes("Köpenick")) return ["S Adlershof [Bus Rudower Chaussee]", 1]
        return ["S Adlershof [Bus Rudower Chaussee]", 7]
      case "260":
        return ["S Adlershof [Bus Rudower Chaussee]", 4]
      case "N60":
        if(provenance.includes("Flughafen")) return ["S Adlershof [Bus Rudower Chaussee]", 4]
        return ["S Adlershof [Bus Rudower Chaussee]", 1]
      case "N64":
      case "N68":
        return ["S Adlershof [Bus Rudower Chaussee]", 1]
      default:
        return ["S Adlershof", null]
    }
  } else if (mode === 'dep' && direction !== null) {
    switch(lineName) {
      case "M17":
        return ["S Adlershof [Tram Wendeschleife]", 5]
      case "61":
        if(direction.includes("Schöneweide")) return ["S Adlershof [Tram Rudower Chaussee]", 2]
        return ["S Adlershof [Tram Rudower Chaussee]", 3]
      case "63":
        if(direction.includes("Johannisthal")) return ["S Adlershof [Tram Rudower Chaussee]", 2]
        return ["S Adlershof [Tram Rudower Chaussee]",3]
      case "162":
        if(direction.includes("Rudow")) return ["S Adlershof [Bus Rudower Chaussee]", 1]
        return ["S Adlershof [Bus Rudower Chaussee]", 7]
      case "163":
        if(direction.includes("Schöneweide")) return ["S Adlershof [Bus Rudower Chaussee]", 1]
        return ["S Adlershof [Bus Rudower Chaussee]", 7]
      case "164":
        if(direction.includes("Köpenick")) return ["S Adlershof [Bus Rudower Chaussee]", 7]
        return ["S Adlershof [Bus Rudower Chaussee]", 1]
      case "260":
        return ["S Adlershof [Bus Rudower Chaussee]", 1]
      case "N60":
        if(direction.includes("Flughafen")) return ["S Adlershof [Bus Rudower Chaussee]", 1]
        return ["S Adlershof [Bus Rudower Chaussee]", 4]
      case "N64":
      case "N68":
        return ["S Adlershof [Bus Rudower Chaussee]", 4]
      default:
        return ["S Adlershof", null]
    }
  }
}

export function getGrünau(mode: string, lineName: string, direction: Dir, provenance: Dir) {
  if (mode === "arr" && provenance !== null) {
    switch(lineName) {
      case "68":
        if(provenance.includes("Schmöckwitz")) return ["S Grünau [Adlergestell]", 8]
        return ["S Grünau [Adlergestell]", 9]
      case "163":
      case "263":
      case "363":
        return ["S Grünau [Richterstr.]", 2]
      case "N62":
        if(provenance.includes("Wendenschloß")) return ["S Grünau [Richterstr.]", 5]
        return ["S Grünau [Richterstr.]", 1]
      case "N68":
        if(provenance.includes("Schmöckwitz")) return ["S Grünau [Adlergestell]", 10]
        return ["S Grünau [Adlergestell]", 11]
      default:
        return ["S Grünau", null]
    }
  } else if (mode === 'dep' && direction !== null) {
    switch(lineName) {
      case "68":
        if(direction.includes("Schmöckwitz")) return ["S Grünau [Adlergestell]", 9]
        return ["S Grünau [Adlergestell]", 8]
      case "163":
      case "263":
      case "363":
        return ["S Grünau [Richterstr.]", 1]
      case "N62":
        if(direction.includes("Wendenschloß")) return ["S Grünau [Richterstr.]", 1]
        return ["S Grünau [Richterstr.]", 5]
      case "N68":
        if(direction.includes("Schmöckwitz")) return ["S Grünau [Adlergestell]", 11]
        return ["S Grünau [Adlergestell]", 10]
      default:
        return ["S Grünau", null]
    }
  }
}