type Dir = string | null

export function getEichborndamm(mode: string, lineName: string, direction: Dir, provenance: Dir) {
  if (mode === 'arr' && provenance !== null) {
    switch (lineName) {
      case "221":
        if (provenance.includes("Leopoldplatz")) return "S Eichborndamm [Bus Eichborndamm]"
        if (provenance.includes("Schumacher")) return "S Eichborndamm [Bus Eichborndamm]"
        return "S Eichborndamm [Bus Antonienstr.]"
      case "322":
        if (provenance.includes("Paracelsus")) return "S Eichborndamm [Bus Eichborndamm]"
        return "S Eichborndamm [Bus Antonienstr.]"
      default: return "S Eichborndamm [Bus]"
    }
  } else if (mode === 'dep' && direction !== null) {
    switch (lineName) {
      case "221":
        if (direction.includes("Leopoldplatz")) return "S Eichborndamm [Bus Antonienstr.]"
        if (direction.includes("Schumacher")) return "S Eichborndamm [Bus Antonienstr.]"
        return "S Eichborndamm [Bus Eichborndamm]"
      case "322":
        if (direction.includes("Paracelsus")) return "S Eichborndamm [Bus Antonienstr.]"
        return "S Eichborndamm [Bus Eichborndamm]"
      default: return "S Eichborndamm [Bus]"
    }
  }
}

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

export function getKarlBonhoefferNervenklinik() {
  return "S+U Karl-Bonhoeffer-Nervenklinik [Bus Oranienburger Str.]"
}

export function getSchönholz() {
  return "S Schönholz [Bus Provinzstr.]"
}

export function getTegel(mode: string, lineName: string, direction: Dir, provenance: Dir) {
  if (mode === 'arr' && provenance !== null) {
    switch (lineName) {
      case "133":
        if (provenance.includes("Heiligensee")) return "S Tegel [Bus Buddestr.]"
        if (provenance.includes("Alt-Tegel")) return "S Tegel [Bus Buddestr.]"
        return "S Tegel [Bus Grußdorfstr.]"
      case "N25": return "S Tegel [Bus Grußdorfstr.]"
      default: return "S Tegel [Bus]"
    }
  } else if (mode === 'dep' && direction !== null) {
    switch (lineName) {
      case "133":
        if (direction.includes("Heiligensee")) return "S Tegel [Bus Grußdorfstr.]"
        if (direction.includes("Alt-Tegel")) return "S Tegel [Bus Grußdorfstr.]"
        return "S Tegel [Bus Buddestr.]"
      case "N25": return "S Tegel [Bus Grußdorfstr.]"
      default: return "S Tegel [Bus]"
    }
  }
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