type Dir = string | null

export function getBlankenburg() {
  return "S Blankenburg [Bus Bahnhofstr.]"
}

export function getBornholmerStr() {
  return "S Bornholmer Str. [Tram Bornholmer Str.]"
}

export function getKarow() {
  return "S Karow [Bus Hubertusdamm]"
}

export function getPankow(id: string, mode: string, lineName: string, direction: Dir, provenance: Dir) {
  if (mode === "arr" && provenance !== null) {
    switch (id) {
      case "900000130002":
        switch (lineName) {
          case "M1":
            if (provenance.includes("Schillerstr") || provenance.includes("Rosenthal")) return ["S+U Pankow [Berliner Str.]", 3]
            return ["S+U Pankow [Berliner Str.]", 4]
          case "50":
            if (provenance.includes("Guyotstr")) return ["S+U Pankow [Berliner Str.]", 3]
            return ["S+U Pankow [Berliner Str.]", 4]
          case "M27":
            if (provenance.includes("Hadlichstr")) return ["S+U Pankow [Florastr.]", 2]
            return ["S+U Pankow [Florastr.]", 1]
          case "X54":
            if (provenance.includes("Masurenstr")) return ["S+U Pankow/Granitzstr.", 5]
            return ["S+U Pankow/Granitzstr.", 6]
          case "155":
            if (provenance.includes("Masurenstr")) return ["S+U Pankow [Florastr.]", 4]
            return ["S+U Pankow [Berliner Str.]", 1]
          case "250":
          case "255":
          case "N50":
            if (provenance.includes("Buchholz")) return ["S+U Pankow [Berliner Str.]", 4]
            if (provenance.includes("Schwarzelfenweg")) return ["S+U Pankow [Berliner Str.]", 4]
            if (provenance.includes("Tierpark")) return ["S+U Pankow [Berliner Str.]", 4]
            return ["S+U Pankow [Berliner Str.]", 3]
          case "N2":
            if (provenance.includes("Hadlichstr.")) return ["S+U Pankow [Berliner Str.]", 3]
            return ["S+U Pankow [Berliner Str.]", 4]
          default: return ["S+U Pankow", null]
        }
        case "900000130500":
          switch(lineName){
            case "X54":
            if (provenance.includes("Masurenstr")) return ["S+U Pankow/Granitzstr.", 5]
            return ["S+U Pankow/Granitzstr.", 6]
          case "155":
            return ["S+U Pankow/Granitzstr.", 6]
          case "250":
          case "255":
          case "N50":
            return ["S+U Pankow/Granitzstr.", 5]
          default: return ["S+U Pankow", null]
          }
        default: return ["S+U Pankow", null]
    }
  } else if (mode === 'dep' && direction !== null) {
    switch (id) {
      case "900000130002":
        switch (lineName) {
          case "M1":
            if (direction.includes("Schillerstr") || direction.includes("Rosenthal")) return ["S+U Pankow [Berliner Str.]", 4]
            return ["S+U Pankow [Berliner Str.]", 3]
          case "50":
            if (direction.includes("Guyotstr")) return ["S+U Pankow [Berliner Str.]", 4]
            return ["S+U Pankow [Berliner Str.]", 3]
          case "M27":
            if (direction.includes("Hadlichstr")) return ["S+U Pankow [Florastr.]", 1]
            return ["S+U Pankow [Florastr.]", 2]
          case "X54":
            if (direction.includes("Masurenstr")) return ["S+U Pankow/Granitzstr.", 6]
            return ["S+U Pankow/Granitzstr.", 5]
          case "155":
            if (direction.includes("Masurenstr")) return ["S+U Pankow [Florastr.]", 1]
            return ["S+U Pankow [Berliner Str.]", 4]
          case "250":
          case "255":
          case "N50":
            if (direction.includes("Buchholz")) return ["S+U Pankow [Berliner Str.]", 3]
            if (direction.includes("Schwarzelfenweg")) return ["S+U Pankow [Berliner Str.]", 3]
            if (direction.includes("Tierpark")) return ["S+U Pankow [Berliner Str.]", 3]
            return ["S+U Pankow [Berliner Str.]", 4]
          case "N2":
            if (direction.includes("Hadlichstr.")) return ["S+U Pankow [Berliner Str.]", 4]
            return ["S+U Pankow [Berliner Str.]", 3]
          default: return ["S+U Pankow", null]
        }
        case "900000130500":
          switch(lineName){
            case "X54":
            if (direction.includes("Masurenstr")) return ["S+U Pankow/Granitzstr.", 6]
            return ["S+U Pankow/Granitzstr.", 5]
          case "155":
            return ["S+U Pankow/Granitzstr.", 6]
          case "250":
          case "255":
          case "N50":
            return ["S+U Pankow/Granitzstr.", 5]
          default: return ["S+U Pankow", null]
          }
        default: return ["S+U Pankow", null]
    }
  }
}

export function getPankowHeinersdorf(product: string) {
  switch(product) {
    case "tram":
      return "S Pankow-Heinersdorf [Tram Pasewalker Str.]"
    case "bus":
      return "S Pankow-Heinersdorf [Bus Pasewalker Str.]"
  }
}

export function getWollankstr(id: string) {
  switch(id) {
    case "900000130523":
      return "Pradelstr."
    case "900000130003":
      return "S Wollankstr. [Bus Wollankstr.]"
    default:
      return "S Wollankstr. [Bus Wollankstr.]"
  }
}