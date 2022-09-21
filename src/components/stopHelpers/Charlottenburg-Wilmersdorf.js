export function getBismarckstr() {
  return "U Bismarckstr. [Bus Bismarckstr.]"
}

export function getBundesplatz() {
  return "S+U Bundesplatz [Bus Bundesallee]"
}

export function getCharlottenburg(id, mode, lineName, direction, provenance) {
  if (mode === "arr") {
    switch (id) {
      case "900000024101":
        return ["S Charlottenburg [Bus Stuttgarter Platz]", 5]
      case "900000024103":
        if(provenance.includes("Hertzallee")) return ["S Charlottenburg/Gervinusstr.", 7]
        if(provenance.includes("Blissestr")) return ["S Charlottenburg/Gervinusstr.", 7]
        return ["S Charlottenburg/Gervinusstr.", 6]
      case "900000024202":
        if(provenance.includes("Hertzallee")) return ["U Wilmersdorfer Str. [Bus Kantstr.]", 2]
        if(provenance.includes("Savignyplatz")) return ["U Wilmersdorfer Str. [Bus Kantstr.]", 2]
        if(["X49", "309"].includes(lineName)) return ["U Wilmersdorfer Str. [Bus Kantstr.]", 2]
        return ["U Wilmersdorfer Str. [Bus Kantstr.]", 1]
      case "900000024205":
        if(["309", "310"].includes(lineName)) return ["U Wilmersdorfer Str./S Charlottenburg", 4]
        return ["U Wilmersdorfer Str./S Charlottenburg", 3]
      default: return ["S Charlottenburg [Bus]", null]
    }
  } else {
    switch (id) {
      case "900000024101":
        return ["S Charlottenburg [Bus Stuttgarter Platz]", 5]
      case "900000024103":
        if(direction.includes("Zoo")) return ["S Charlottenburg/Gervinusstr.", 6]
        return ["S Charlottenburg/Gervinusstr.", 7]
      case "900000024202":
        if(direction.includes("Zoo")) return ["U Wilmersdorfer Str. [Bus Kantstr.]", 1]
        if(direction.includes("Savignyplatz")) return ["U Wilmersdorfer Str. [Bus Kantstr.]", 1]
        return ["U Wilmersdorfer Str. [Bus Kantstr.]", 2]
      case "900000024205":
        if(lineName === "X49") return ["U Wilmersdorfer Str./S Charlottenburg", 3]
        return ["U Wilmersdorfer Str./S Charlottenburg", 4]
      default: return ["S Charlottenburg [Bus]", null]
    }
  }
}

export function getErnstReuterPlatz() {
  return "U Ernst-Reuter-Platz [Bus Hardenbergstr.]"
}

export function getFehrbellinerPlatz (lineName) {
  switch (lineName) {
    case "101": 
    case "143":
    case "N7":
    case "N43":
      return "U Fehrbelliner Platz [Bus Brandenburgische Str.]"
    case "115": 
    case "N3":
      return "U Fehrbelliner Platz [Bus Hohenzollerndamm]"
    default: 
    return "U Fehrbelliner Platz [Bus]"
  }
}

export function getGrunewald(lineName) {
  switch(lineName) {
    case "M19":
    case "186":
      return "S Grunewald [Karmielplatz]"
    case "349":
      return "S Grunewald [Schmetterlingsplatz]"
    default: 
      return "S Grunewald"
  }
}

export function getHalemweg() {
  return "U Halemweg [Bus Halemweg]"
}

export function getHalensee() {
  return "S Halensee [Bus Kurfürstendamm]"
}

export function getHeerstr() {
  return "S Heerstr. [Bus Heerstr.]"
}

export function getHeidelbergerPlatz(mode, lineName, direction, provenance) {
  if (mode === "arr") {
    switch (lineName) {
      case "249":
      case "310":
        return "S+U Heidelberger Platz [Bus Mecklenburgische Str.]"
      case "N3":
        if (provenance.includes("Mexikoplatz")) return "S+U Heidelberger Platz [Bus Detmolder Str.]"
        return "S+U Heidelberger Platz [Bus Rudolstädter Str.]"
      default: return "S+U Heidelberger Platz [Bus]"
    }
  } else {
    switch (lineName) {
      case "249":
      case "310":
        return "S+U Heidelberger Platz [Bus Mecklenburgische Str.]"
      case "N3":
        if (direction.includes("Mexikoplatz")) return "S+U Heidelberger Platz [Bus Rudolstädter Str.]"
        return "S+U Heidelberger Platz [Bus Detmolder Str.]"
      default: return "S+U Heidelberger Platz [Bus]"
    }
  }
}

export function getHohenzollerndamm(mode, lineName, direction, provenance) {
  if (mode === "arr") {
    switch(lineName) {
      case "115":
        if (provenance.includes("Barstr.")) return ["S Hohenzollerndamm [Bus Hohenzollerndamm]", 5]
        return ["S Hohenzollerndamm [Bus Hohenzollerndamm]", 2]
      case "N3":
        if (provenance.includes("Mexikoplatz")) return ["S Hohenzollerndamm [Bus Hohenzollerndamm]", 6]
        return ["S Hohenzollerndamm [Bus Hohenzollerndamm]", 5]
      case "N10":
        if (provenance.includes("Hertzallee")) return ["S Hohenzollerndamm [Bus Seesener Str.]", 3]
        return ["S Hohenzollerndamm [Bus Seesener Str.]", 4]
      default: return ["S Hohenzollerndamm [Bus]", null]
    }
  } else {
    switch(lineName) {
      case "115":
        if (direction.includes("Fehrbelliner Platz")) return ["S Hohenzollerndamm [Bus Hohenzollerndamm]", 2]
        return ["S Hohenzollerndamm [Bus Hohenzollerndamm]", 5]
      case "N3":
        if (direction.includes("Mexikoplatz")) return ["S Hohenzollerndamm [Bus Hohenzollerndamm]", 5]
        return ["S Hohenzollerndamm [Bus Hohenzollerndamm]", 6]
      case "N10":
        if (direction.includes("Zoo")) return ["S Hohenzollerndamm [Bus Seesener Str.]", 4]
        return ["S Hohenzollerndamm [Bus Seesener Str.]", 3]
      default: return ["S Hohenzollerndamm [Bus]", null]
    }
  }
}

export function getHohenzollernplatz(lineName) {
  switch(lineName) {
    case "249": return "U Hohenzollernplatz [Bus Uhlandstr.]"
    case "N3": return "U Hohenzollernplatz [Bus Hohenzollerndamm]"
    default: return "U Hohenzollernplatz [Bus]"
  }
}

export function getJakobKaiserPlatz(mode, lineName, direction, provenance) {
  if (mode === "arr") {
    switch (lineName) {
      case "M21":
      case "X21":
        if(provenance.includes("Goerdelersteg")) return "U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm Ost]"
        return "U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm West]"
      case "109":
        if(provenance.includes("Tegel")) return "U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm West]"
        return "U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm Ost]"
      case "123":
        if(provenance.includes("Hauptbahnhof")) return "U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm Ost]"
        if(provenance.includes("Turmstr")) return "U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm Ost]"
        return "U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm West]"
      case "N7":
        if(provenance.includes("Spandau")) return "U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm West]"
        if(provenance.includes("Galenstr")) return "U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm West]"
        return "U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm Ost]"
      default: return "U Jakob-Kaiser-Platz [Bus]"
    }
  } else {
    switch (lineName) {
      case "M21":
      case "X21":
        if(direction.includes("Jungfernheide")) return "U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm West]"
        return "U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm Ost]"
      case "109":
        if(direction.includes("Tegel")) return "U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm Ost]"
        return "U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm West]"
      case "123":
        if(direction.includes("Hauptbahnhof")) return "U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm West]"
        if(direction.includes("Turmstr")) return "U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm West]"
        return "U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm Ost]"
      case "N7":
        if(direction.includes("Spandau")) return "U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm Ost]"
        if(direction.includes("Galenstr")) return "U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm Ost]"
        return "U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm West]"
      default: return "U Jakob-Kaiser-Platz [Bus]"
    } 
  }
}

export function getJungfernheide(id, mode, lineName, direction, provenance) {
  if (mode === "arr") {
    switch(id) {
      case "900000020201":
        switch(lineName) {
          case "M21":
          case "X21":
            if(provenance.includes("Goerdelersteg")) return ["S+U Jungfernheide [Bus Max-Dohrn-Str.]", 3]
            return ["S+U Jungfernheide [Bus Max-Dohrn-Str.]", 5]
          case "M27":
          case "N7":
            if (provenance.includes("Galenstr")) return ["S+U Jungfernheide [Bus Max-Dohrn-Str.]", 5]
            return ["S+U Jungfernheide [Bus Olbersstr.]", 6]
          default:
            return ["S+U Jungfernheide", null]
        }
      case "900000020207":
        switch(lineName) {
          case "M27":
          case "N7":
            return ["Tegeler Weg/S Jungfernheide", 2]
          case "109":
            if (provenance.includes("Hertzallee")) return ["Tegeler Weg/S Jungfernheide", 2]
            return ["Tegeler Weg/S Jungfernheide", 1]
          default:
            return ["Tegeler Weg/S Jungfernheide", 2]
        }
      default: return ["S+U Jungfernheide", null]
    }
  } else {
    switch(id) {
      case "900000020201":
        switch(lineName) {
          case "M21":
          case "X21":
            if(direction.includes("Goerdelersteg")) return ["S+U Jungfernheide [Bus Max-Dohrn-Str.]", 5]
            return ["S+U Jungfernheide [Bus Max-Dohrn-Str.]", 3]
          case "M27":
          case "N7":
            if(direction.includes("Flughafen")) return ["S+U Jungfernheide [Bus Max-Dohrn-Str.]", 5]
            if(direction.includes("Rudow")) return ["S+U Jungfernheide [Bus Max-Dohrn-Str.]", 5]
            if(direction.includes("Pankow")) return ["S+U Jungfernheide [Bus Max-Dohrn-Str.]", 5]
            return ["S+U Jungfernheide [Bus Olbersstr.]", 6]
          default:
            return ["S+U Jungfernheide", null]
        }
      case "900000020207":
        switch(lineName) {
          case "M27":
          case "N7":
            return ["Tegeler Weg/S Jungfernheide", 2]
          case "109":
            if (direction.includes("Zoologischer Garten")) return ["Tegeler Weg/S Jungfernheide", 1]
            return ["Tegeler Weg/S Jungfernheide", 2]
          default:
            return ["Tegeler Weg/S Jungfernheide", 2]
        }
      default: return ["S+U Jungfernheide", null]
    }
  }
}

export function getKurfürstendamm(mode, lineName, direction, provenance) {
  if (mode === "arr") {
    switch (lineName) {
      case "M19":
      case "M29":
      case "N3":
        return "U Kurfürstendamm [Bus Kurfürstendamm]"
      case "M46":
      case "X10":
      case "109":
      case "110":
      case "N1":
      case "N10":
      case "N26":
        if (provenance.includes("Hertzallee")) return "U Kurfürstendamm [Bus Kurfürstendamm]"
        return "U Kurfürstendamm [Bus Joachimsthaler Str.]"
      case "204":
      case "249":
      case "N9":
        return "U Kurfürstendamm [Bus Joachimsthaler Str.]"
      case "N2":
        if (provenance.includes("Ruhleben")) return "U Kurfürstendamm [Bus Kurfürstendamm]"
        if (provenance.includes("Zoologischer Garten")) return "U Kurfürstendamm [Bus Kurfürstendamm]"
        return "U Kurfürstendamm [Bus Joachimsthaler Str.]"
      default: return "U Kurfürstendamm [Bus]"
    }
  } else {
    switch (lineName) {
      case "M19":
      case "M29":
      case "N3":
        return "U Kurfürstendamm [Bus Kurfürstendamm]"
      case "M46":
      case "X10":
      case "109":
      case "110":
      case "N1":
      case "N10":
      case "N26":
        if (direction.includes("Zoologischer Garten")) return "U Kurfürstendamm [Bus Joachimsthaler Str.]"
        if (direction.includes("Hertzallee")) return "U Kurfürstendamm [Bus Joachimsthaler Str.]"
        return "U Kurfürstendamm [Bus Kurfürstendamm]"
      case "204":
      case "249":
      case "N9":
        return "U Kurfürstendamm [Bus Joachimsthaler Str.]"
      case "N2":
        if (direction.includes("Ruhleben")) return "U Kurfürstendamm [Bus Joachimsthaler Str.]"
        if (direction.includes("Zoologischer Garten")) return "U Kurfürstendamm [Bus Joachimsthaler Str.]"
        return "U Kurfürstendamm [Bus Kurfürstendamm]"
      default: return "U Kurfürstendamm [Bus]"
    }
  }
}

export function getMesseNord(id, lineName) {
  switch(id) {
    case "900000026204": return "Messedamm/ZOB"
    case "900000024106": return "S Messe Nord/ICC [Bus Neue Kantstr.]"
    case "900000026202": 
      if (lineName === "N2") return "U Kaiserdamm [Bus Kaiserdamm]"
      return "U Kaiserdamm [Bus Königin-Elisabeth-Str.]"
    default: return "S Messe Nord/ICC [Bus]"
  }
}

export function getMesseSüd() {
  return "S Messe Süd [Bus Eichkampstr.]"
}

export function getNeuWestend() {
  return "U Neu-Westend [Bus Reichsstr.]"
}

export function getRüdesheimerPlatz() {
  return "U Rüdesheimer Platz [Bus Wiesbadener Str.]"
}

export function getRuhleben(mode, lineName, direction, provenance) {
  if (mode === 'arr') {
    switch (lineName) {
      case "M45":
        if (provenance.includes("Hertzallee")) return "U Ruhleben [Bus Hempelsteig]"
        if (provenance.includes("Westend")) return "U Ruhleben [Bus Hempelsteig]"
        return "U Ruhleben [Bus Charlottenburger Chaussee]"
      case "130":
      case "N2":
        return "U Ruhleben [Bus Hempelsteig]"
      case "131":
      case "X37":
        return "U Ruhleben [Bus]"
      default: return "U Ruhleben [Bus]"
    }
  } else {
    switch (lineName) {
      case "M45":
        if (direction.includes("Zoologischer Garten")) return "U Ruhleben [Bus Charlottenburger Chaussee]"
        if (direction.includes("Westend")) return "U Ruhleben [Bus Charlottenburger Chaussee]"
        return "U Ruhleben [Bus Hempelsteig]"
      case "131":
      case "X37":
        if (direction.includes("Ruhleben")) return "U Ruhleben [Bus Charlottenburger Chaussee]"
        return "U Ruhleben [Bus Hempelsteig]"
      case "130":
      case "N2":
        return "U Ruhleben [Bus]"
      default: return "U Ruhleben [Bus]"
    }
  }
}

export function getSophieCharlottePlatz (mode, lineName, direction, provenance) {
  if (mode === "arr") {
    switch (lineName) {
      case "309":
        if (provenance.includes("Wilmersdorfer")) return "U Sophie-Charlotte-Platz [Bus Suarezstr.]"
        return "U Sophie-Charlotte-Platz [Bus Schloßstr.]"
      case "N2":
        return "U Sophie-Charlotte-Platz [Bus Kaiserdamm]"
      default: return "U Sophie-Charlotte-Platz [Bus]"
    }
  } else {
    switch (lineName) {
      case "309":
        if (direction.includes("Wilmersdorfer")) return "U Sophie-Charlotte-Platz [Bus Schloßstr.]"
        return "U Sophie-Charlotte-Platz [Bus Suarezstr.]"
      case "N2":
        return "U Sophie-Charlotte-Platz [Bus Kaiserdamm]"
      default: return "U Sophie Charlotte-Platz [Bus]"
    }
  }
}

export function getSpichernstr() {
  return "U Spichernstr. [Bus Bundesallee]"
}

export function getTheo() {
  return "U Theodor-Heuss-Platz [Bus Th.-Heuss-Pl. Nord]"
}

export function getUhlandstr() {
  return "U Uhlandstr. [Bus Kurfürstendamm]"
}

export function getWestend(id) {
    switch(id) {
      case "900000026207": return "S Westend [Bus Spandauer Damm]"
      case "900000020204": return "Sophie-Charlotten-Str."
      default: return "S Westend [Bus]"
    }
}

export function getWestkreuz() {
  return "S Westkreuz [Bus]"
}

export function getZooBusStops(id, mode, lineName, direction, provenance) {
  if (mode === 'arr') {
    switch(id) {
      case "900000023201":
        if(!provenance.includes("Hertzallee")) {
          return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 10]
        }
        switch(lineName) {
          case "X10":
          case "109":
          case "110":
          case "N7X":
          case "N10":
            return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 4]
          case "M49":
          case "X34":
            return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 5]
          case "N9":
            if(provenance.includes("Osloer")) return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 5]
            return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 5]
          case "M45":
          case "245":
            return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 6]
          case "100":
          case "200":
            return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 7]
          case "N2":
            if(provenance.includes("Ruhleben")) return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 7]
            return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 7]
          case "M46":
          case "204":
          case "N1":
            return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 8]
          case "249":
          case "N26":
            return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 9]
          default:
            return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", null]
        }
      case "900000023172":
        switch (lineName) {
          case "M45":
          case "245":
            if (!provenance.includes("S+U Zoologischer Garten") && !provenance.includes("Hertzallee")) {
              return ["S+U Zoologischer Garten/Jebensstr.", 1]
            }
            return ["S+U Zoologischer Garten/Jebensstr.", 2]
          case "100":
          case "200":
          case "N2":
          case "N9":
            return ["S+U Zoologischer Garten/Jebensstr.", 3]
          default:
            return ["S+U Zoologischer Garten/Jebensstr.", null]
        }
      default: return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", null]
    }
  } else {
    switch(id) {
      case "900000023201":
        if(direction.includes("Hertzallee") || direction.includes("Fahrt endet hier")) {
          return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 10]
        }
        switch(lineName) {
          case "X10":
          case "109":
          case "110":
          case "N7X":
          case "N10":
            return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 4]
          case "M49":
          case "X34":
            return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 5]
          case "N9":
            if(direction.includes("Steglitz")) return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 5]
            return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 5]
          case "M45":
          case "245":
            return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 6]
          case "100":
          case "200":
            return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 7]
          case "N2":
            if(direction.includes("Pankow")) return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 7]
            if(direction.includes("Alexanderplatz")) return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 7]
            return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 7]
          case "M46":
          case "204":
          case "N1":
            return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 8]
          case "249":
          case "N26":
            return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 9]
          default:
            return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", null]
        }
      case "900000023172":
        switch(lineName) {
          case "M45":
          case "245":
            if (direction.includes("S+U Zoologischer Garten") || direction.includes("Hertzallee")) {
              return ["S+U Zoologischer Garten/Jebensstr.", 1]
            }
            return ["S+U Zoologischer Garten/Jebensstr.", 2]
          case "100":
          case "200":
          case "N2":
          case "N9":
            return ["S+U Zoologischer Garten/Jebensstr.", 3]
          default:
            return ["S+U Zoologischer Garten/Jebensstr.", null]
        }
      default: return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", null]
    }
  }
}