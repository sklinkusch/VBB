type Dir = string | null

export function getFrohnau(id: string, mode: string, lineName: string, direction: Dir, provenance: Dir) {
  if (mode === 'arr' && provenance !== null) {
    switch (id) {
      case "900000092201":
        switch (lineName) {
          case "125":
            if (provenance.includes("Invalidensiedlung")) return ["S Frohnau [Bus Ludolfingerpl.]", 2]
            return ["S Frohnau [Bus Ludolfingerpl.]", 1]
          case "220":
          case "N20":
            if (provenance.includes("Hainbuchenstr")) return ["S Frohnau [Bus Ludolfingerpl.]", 1]
            return ["S Frohnau [Bus Ludolfingerpl.]", 2]
          default:
            return ["S Frohnau [Bus Ludolfingerpl.]", null]
        }
      case "900000092282":
        switch (lineName) {
          case "125":
            return ["Zeltinger Platz/S Frohnau", 3]
          case "220":
          case "N20":
            if (provenance.includes("Hainbuchenstr")) return ["Zeltinger Platz/S Frohnau", 4]
            return ["Zeltinger Platz/S Frohnau", 3]
          case "806":
            return ["Zeltinger Platz/S Frohnau", 4]
          default:
            return ["Zeltinger Platz/S Frohnau", null]
        }
      default: 
        return ["S Frohnau [Bus]", null]
    }
  } else if (mode === 'dep' && direction !== null) {
    switch (id) {
      case "900000092201":
        switch (lineName) {
          case "125":
            if (direction.includes("Invalidensiedlung")) return ["S Frohnau [Bus Ludolfingerpl.]", 1]
            return ["S Frohnau [Bus Ludolfingerpl.]", 2]
          case "220":
          case "N20":
            if (direction.includes("Hainbuchenstr")) return ["S Frohnau [Bus Ludolfingerpl.]", 2]
            return ["S Frohnau [Bus Ludolfingerpl.]", 1]
          default:
            return ["S Frohnau [Bus Ludolfingerpl.]", null]
        }
      case "900000092282":
        switch (lineName) {
          case "125":
            return ["Zeltinger Platz/S Frohnau", 3]
          case "220":
          case "N20":
            if (direction.includes("Hainbuchenstr")) return ["Zeltinger Platz/S Frohnau", 3]
            return ["Zeltinger Platz/S Frohnau", 4]
          case "806":
            return ["Zeltinger Platz/S Frohnau", 4]
          default:
            return ["Zeltinger Platz/S Frohnau", null]
        }
      default: 
        return ["S Frohnau [Bus]", null]
    }
  }
}

export function getHermsdorf() {
  return "S Hermsdorf [Bus Bahnhofplatz]"
}

export function getSchönholz() {
  return "S Schönholz [Bus Provinzstr.]"
}

export function getWaidmannslust(lineName: string) {
  switch (lineName) {
    case "222": return "S Waidmannslust [Bus Waidmannsluster Damm]"
    case "322": return "S Waidmannslust [Bus J.-Jaurès-Str.]"
    case "N22": return "S Waidmannslust [Bus Waidmannsluster Damm]"
    default: return "S Waidmannslust [Bus Waidmannsluster Damm]"
  }
}

export function getWilhelmsruh() {
  return "S Wilhelmsruh [Bus Kopenhagener Str.]"
}