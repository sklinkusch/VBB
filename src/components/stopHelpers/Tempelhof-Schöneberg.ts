type Dir = string | null

export function getAttilastr(lineName: string) {
  if (lineName === "282") return "S Attilastr. [Bus Steglitzer Damm]"
  return "S Attilastr. [Bus Attilastr.]"
}

export function getBuckowerChaussee() {
  return "S Buckower Chaussee [Bus Buckower Ch.]"
}

export function getJuliusLeberBrücke() {
  return "S Julius-Leber-Brücke [Bus Kolonnenstr.]"
}

export function getMarienfelde() {
  return "S Marienfelde [Bus Bahnstr.]"
}

export function getPriesterweg() {
  return "S Priesterweg [Bus Prellerweg]"
}

export function getSchöneberg() {
  return "S Schöneberg [Bus Dominicusstr.]"
}

export function getSüdkreuz(id: string, mode: string, lineName: string, direction: Dir, provenance: Dir) {
  if (mode === "arr" && provenance !== null) {
    switch(id) {
      case "900000058101":
        if (lineName === "M46") {
          if (["Hertzallee", "U Wittenbergplatz"].includes(provenance)) return ["S Südkreuz [Hildegard-Knef-Platz]", 3]
          return ["S Südkreuz [Hildegard-Knef-Platz]", 1]
        }
        if (lineName === "106") {
          if (["Lindenhof"].includes(provenance)) return ["S Südkreuz [Hildegard-Knef-Platz]", 1]
          return ["S Südkreuz [Hildegard-Knef-Platz]", 2]
        }
        if (lineName === "204") return ["S Südkreuz [Hildegard-Knef-Platz]", 1]
        if (lineName === "N42") return ["S Südkreuz [Hildegard-Knef-Platz]", 2]
        return ["S Südkreuz [Hildegard-Knef-Platz]", null]
      case "900000058100":
        if (lineName === "184") {
          if (provenance.includes("Reichartstr")) return ["S Südkreuz/Ostseite", 4]
          return ["S Südkreuz/Ostseite", 5]
        }
        if (lineName === "248") {
          if (provenance.includes("Breitenbachplatz")) return ["S Südkreuz/Ostseite", 5]
          return ["S Südkreuz/Ostseite", 4]
        }
        if (lineName === "N42") {
          if (provenance.includes("Südkreuz")) return ["S Südkreuz/Ostseite", 5]
          return ["S Südkreuz/Ostseite", 4]
        }
        return ["S Südkreuz/Ostseite", null]
      default: return ["S Südkreuz", null]
    }
  } else if (mode === 'dep' && direction !== null) {
    switch(id) {
      case "900000058101":
        if (lineName === "M46") {
          if (["S+U Zoologischer Garten", "U Wittenbergplatz"].includes(direction)) return ["S Südkreuz [Hildegard-Knef-Platz]", 1]
          return ["S Südkreuz [Hildegard-Knef-Platz]", 3]
        }
        if (lineName === "106") {
          if (["Lindenhof"].includes(direction)) return ["S Südkreuz [Hildegard-Knef-Platz]", 2]
          return ["S Südkreuz [Hildegard-Knef-Platz]", 1]
        }
        if (lineName === "204") return ["S Südkreuz [Hildegard-Knef-Platz]", 1]
        if (lineName === "N42") return ["S Südkreuz [Hildegard-Knef-Platz]", 2]
        return ["S Südkreuz [Hildegard-Knef-Platz]", null]
      case "900000058100":
        if (lineName === "184") {
          if (direction.includes("Reichartstr")) return ["S Südkreuz/Ostseite", 4]
          return ["S Südkreuz/Ostseite", 5]
        }
        if (lineName === "248") {
          if (direction.includes("Breitenbachplatz") || direction.includes("Fahrt")) return ["S Südkreuz/Ostseite", 4]
          return ["S Südkreuz/Ostseite", 5]
        }
        if (lineName === "N42") {
          if (direction.includes("Südkreuz")) return ["S Südkreuz/Ostseite", 4]
          return ["S Südkreuz/Ostseite", 5]
        }
        return ["S Südkreuz/Ostseite", null]
      default: return ["S Südkreuz", null]
    }
  }
}