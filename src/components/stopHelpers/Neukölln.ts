type Dir = string | null

export function getHermannstr(id: string, mode: string, lineName: string, direction: Dir, provenance: Dir) {
  if (mode === 'arr' && provenance !== null) {
    switch (id) {
      case "900000079221":
        switch (lineName) {
          case "M44":
            if (provenance.includes("Buckow")) return ["S+U Hermannstr. [Bus Hermannstr.]", 3]
            return ["S+U Hermannstr. [Bus Hermannstr.]", 1]
          case "246":
          case "277":
            return ["S+U Hermannstr. [Bus Hermannstr.]", 3]
          case "377":
            if (provenance.includes("Kranoldstr")) return ["S+U Hermannstr. [Bus Hermannstr.]", 3]
            return ["S+U Hermannstr. [Bus Hermannstr.]", 1]
          case "U8":
          case "N8":
            return ["S+U Hermannstr. [Bus Hermannstr.]", 1]
          case "N77":
            if (provenance.includes("Mariendorf")) return ["S+U Hermannstr. [Bus Hermannstr.]", 3]
            return ["S+U Hermannstr. [Bus Hermannstr.]", 2]
          default:
            return ["S+U Hermannstr. [Bus]", null]
        }
      case "900000079220":
        switch (lineName) {
          case "246":
            if (/(Forsthaus|Grenz)/.test(provenance)) return ["S+U Hermannstr./Silbersteinstr. [Bus Silbersteinstr.]", 5]
            return ["S+U Hermannstr./Silbersteinstr. [Bus Silbersteinstr.]", 4]
        }
    }
  } else if (mode === 'dep' && direction !== null) {
    switch (id) {
      case "900000079221":
        switch (lineName) {
          case "M44":
            if (direction.includes("Buckow")) return ["S+U Hermannstr. [Bus Hermannstr.]", 1]
            return ["S+U Hermannstr. [Bus Hermannstr.]", 3]
          case "246":
          case "277":
            return ["S+U Hermannstr. [Bus Hermannstr.]", 2]
          case "377":
            if (direction.includes("Kranoldstr")) return ["S+U Hermannstr. [Bus Hermannstr.]", 1]
            return ["S+U Hermannstr. [Bus Hermannstr.]", 3]
          case "U8":
          case "N8":
            return ["S+U Hermannstr. [Bus Hermannstr.]", 3]
          case "N77":
            if (direction.includes("Mariendorf")) return ["S+U Hermannstr. [Bus Hermannstr.]", 2]
            return ["S+U Hermannstr. [Bus Hermannstr.]", 3]
          default:
            return ["S+U Hermannstr. [Bus]", null]
        }
      case "900000079220":
        switch (lineName) {
          case "246":
            if (/(Forsthaus|Grenz)/.test(direction)) return ["S+U Hermannstr./Silbersteinstr. [Bus Silbersteinstr.]", 4]
            return ["S+U Hermannstr./Silbersteinstr. [Bus Silbersteinstr.]", 5]
        }
    }
  }
}

export function getNeukölln(id: string, mode: string, lineName: string, direction: Dir, provenance: Dir) {
  if (mode === 'arr' && provenance !== null) {
    switch (id) {
      case "900000078201":
        switch (lineName) {
          case "171":
            if (provenance.includes("Rudow")) return ["S+U Neukölln [Bus K.-Marx-Str.]", 3]
            if (provenance.includes("Flughafen")) return ["S+U Neukölln [Bus K.-Marx-Str.]", 3]
            return ["S+U Neukölln [Bus Saalestr.]", 1]
          case "U7":
          case "N7":
            if (provenance.includes("Rudow")) return ["S+U Neukölln [Bus K.-Marx-Str.]", 3]
            if (provenance.includes("Flughafen")) return ["S+U Neukölln [Bus K.-Marx-Str.]", 3]
            return ["S+U Neukölln [Bus K.-Marx-Str.]", 2]
          case "N77":
            if (provenance.includes("Mariendorf")) return ["S+U Neukölln [Bus K.-Marx-Str.]", 2]
            return ["S+U Neukölln [Bus K.-Marx-Str.]", 3]
          default:
            return ["S+U Neukölln [Bus]", null]
        }
      case "900000078271":
        switch(lineName) {
          case "171":
          case "U7":
          case "N7":
            if (/(Rudow|Flughafen)/.test(provenance)) return ["Lahnstr./U Neukölln [Bus K.-Marx-Str.]", 6]
            return ["Lahnstr./U Neukölln [Bus K.-Marx-Str.]", 7]
          case "246":
            if (provenance.includes("Forsthausallee")) return ["Lahnstr./U Neukölln [Bus Lahnstr.]", 4]
            return ["Lahnstr./U Neukölln [Bus Lahnstr.]", 5]
          case "377":
            if (provenance.includes("Plänterwald")) return ["Lahnstr./U Neukölln [Bus Lahnstr.]", 4]
            return ["Lahnstr./U Neukölln [Bus Lahnstr.]", 5]
          default:
            return ["Lahnstr./U Neukölln [Bus]", null]
        }
    }
  } else if (mode === 'dep' && direction !== null) {
    switch (id) {
      case "900000078201":
        switch (lineName) {
          case "171":
            if (direction.includes("Rudow")) return ["S+U Neukölln [Bus Saalestr.]", 1]
            if (direction.includes("Flughafen")) return ["S+U Neukölln [Bus Saalestr.]", 1]
            return ["S+U Neukölln [Bus K.-Marx-Str.]", 3]
          case "U7":
          case "N7":
            if (direction.includes("Rudow")) return ["S+U Neukölln [Bus K.-Marx-Str.]", 2]
            if (direction.includes("Flughafen")) return ["S+U Neukölln [Bus K.-Marx-Str.]", 2]
            return ["S+U Neukölln [Bus K.-Marx-Str.]", 3]
          case "N77":
            if (direction.includes("Mariendorf")) return ["S+U Neukölln [Bus K.-Marx-Str.]", 3]
            return ["S+U Neukölln [Bus K.-Marx-Str.]", 2]
          default:
            return ["S+U Neukölln [Bus]", null]
        }
      case "900000078271":
        switch(lineName) {
          case "171":
          case "U7":
          case "N7":
            if (/(Rudow|Flughafen)/.test(direction)) return ["Lahnstr./U Neukölln [Bus K.-Marx-Str.]", 7]
            return ["Lahnstr./U Neukölln [Bus K.-Marx-Str.]", 6]
          case "246":
            if (direction.includes("Forsthausallee")) return ["Lahnstr./U Neukölln [Bus Lahnstr.]", 5]
            return ["Lahnstr./U Neukölln [Bus Lahnstr.]", 4]
          case "377":
            if (direction.includes("Plänterwald")) return ["Lahnstr./U Neukölln [Bus Lahnstr.]", 5]
            return ["Lahnstr./U Neukölln [Bus Lahnstr.]", 4]
          default:
            return ["Lahnstr./U Neukölln [Bus]", null]
        }
    }
  }
}

export function getSonnenallee(id: string, lineName: string) {
  switch(id) {
    case "900000077106":
      switch(lineName) {
        case "M41":
        case "171":
          return "S Sonnenallee [Bus Sonnenallee]"
        case "N77":
          return "S Sonnenallee [Bus Saalestr.]"
        default:
          return "S Sonnenallee [Bus]"
      }
    case "900000077110":
      return "S Sonnenallee/Saalestr. [Bus Saalestr.]"
  }
}