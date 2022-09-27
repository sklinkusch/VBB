type Dir = string | null

export function getSpandau(id: string, mode: string, lineName: string, direction: Dir, provenance: Dir) {
  if (mode === "arr" && provenance !== null) {
    switch(id) {
      case "900000029302": 
        switch(lineName) {
          case "M32":
            if (provenance.includes("Heidebergplan")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 10]
            if (provenance.includes("Döberitzer Weg")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 10]
            if (provenance.includes("Havelpark")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 10]
            if (provenance.includes("Brunsbütteler Damm")) return ["S+U Rathaus Spandau [Bus Altstädter Ring", 10]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
          case "M36":
            if (provenance.includes("Haselhorst")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4]
            if (provenance.includes("Am Omnibushof")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 7]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
          case "M37":
            if (provenance.includes("Hahneberg")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6]
            if (provenance.includes("Spektefeld")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5]
            if (provenance.includes("Waldkrankenhaus")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
          case "M45": 
            if (provenance.includes("Westend")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8]
            if (provenance.includes("Hertzallee")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8]
            if (provenance.includes("Johannesstift")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5]
            if (provenance.includes("Klinkeplatz")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
          case "X33":
            if (provenance.includes("Galenstr")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 9]
            if (provenance.includes("Wilhelmsruher Damm")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 3]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
          case "X37":
            if (provenance.includes("Falkensee")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5]
            if (provenance.includes("Ruhleben")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6]
            if (provenance.includes("Galenstr")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
          case "134":
          case "N34":
            if (provenance.includes("Hottengrund")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8]
            if (provenance.includes("Alt-Kladow")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8]
            if (provenance.includes("Alt-Gatow")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8]
            if (provenance.includes("Gutsstr")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8]
            if (provenance.includes("Gatower Str")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8]
            if (provenance.includes("Galenstr")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8]
            if (provenance.includes("Kisseln")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4]
            if (provenance.includes("Wolburgsweg")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4]
            if (provenance.includes("Wasserwerk")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
          case "135":
          case "638":
            if (provenance.includes("Alt-Kladow")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 10]
            if (provenance.includes("Hottengrund")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 10]
            if (provenance.includes("Potsdam")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 10]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
          case "136":
            if (provenance.includes("Hennigsdorf")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 3]
            if (provenance.includes("Tongaweg")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 3]
            if (provenance.includes("Aalemannufer")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 3]
            if (provenance.includes("Werderstr")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 3]
            if (provenance.includes("Galenstr")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 7]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
          case "137":
            if (provenance.includes("Reimerweg")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6]
            if (provenance.includes("Freudstr")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5]
            if (provenance.includes("Westerwaldstr")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5]
            if (provenance.includes("Goldkäferweg")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
          case "237":
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6]
          case "337":
            if (provenance.includes("Galenstr")) return ["S+u Rathaus Spandau [Bus Altstädter Ring]", 6]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 3]
          case "671":
          case "N7":
            if (provenance.includes("Galenstr")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 9]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 3]
          case "N30":
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 10]
          default:
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
        }
      case "900000029371":
        switch(lineName){
          case "X33":
          case "136":
          case "337":
          case "671":
          case "N7":
            return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1]
          case "N30":
            return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 2]
          case "130":
            if(provenance.includes("Ruhleben")) return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 2]
            if(provenance.includes("Stresow")) return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 2]
            if(provenance.includes("Zeppelinstr")) return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1]
            if(provenance.includes("Westerwaldstr")) return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1]
            if(provenance.includes("Waldkrankenhaus")) return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1]
            return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 2]
          case "237":
            if(provenance.includes("Isenburger")) return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1]
            return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 2]
          default:
            return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1]
          }
      default: return ["S+U Rathaus Spandau", null]
    }
  } else if (mode === 'dep' && direction !== null) {
    switch(id) {
      case "900000029302": 
        switch(lineName) {
          case "M32":
            if (direction.includes("Heidebergplan")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5]
            if (direction.includes("Döberitzer Weg")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5]
            if (direction.includes("Havelpark")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5]
            if (direction.includes("Brunsbütteler Damm")) return ["S+U Rathaus Spandau [Bus Altstädter Ring", 5]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
          case "M36":
            if (direction.includes("Haselhorst")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 7]
            if (direction.includes("Am Omnibushof")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
          case "M37":
            if (direction.includes("Hahneberg")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5]
            if (direction.includes("Spektefeld")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6]
            if (direction.includes("Waldkrankenhaus")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
          case "M45": 
            if (direction.includes("Westend")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5]
            if (direction.includes("Zoologischer Garten")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5]
            if (direction.includes("Johannesstift")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8]
            if (direction.includes("Klinkeplatz")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
          case "X33":
            if (direction.includes("Galenstr")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 3]
            if (direction.includes("Wilhelmsruher Damm")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 9]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
          case "X37":
            if (direction.includes("Falkensee")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6]
            if (direction.includes("Ruhleben")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5]
            if (direction.includes("Galenstr")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
          case "134":
          case "N34":
            if (direction.includes("Hottengrund")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4]
            if (direction.includes("Alt-Kladow")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4]
            if (direction.includes("Alt-Gatow")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4]
            if (direction.includes("Gutsstr")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4]
            if (direction.includes("Gatower Str")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4]
            if (direction.includes("Galenstr")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4]
            if (direction.includes("Kisseln")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8]
            if (direction.includes("Wasserwerk")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
          case "135":
          case "638":
            if (direction.includes("Alt-Kladow")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4]
            if (direction.includes("Hottengrund")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4]
            if (direction.includes("Potsdam")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
          case "136":
            if (direction.includes("Hennigsdorf")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 7]
            if (direction.includes("Tongaweg")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 7]
            if (direction.includes("Aalemannufer")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 7]
            if (direction.includes("Werderstr")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 7]
            if (direction.includes("Galenstr")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 3]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
          case "137":
            if (direction.includes("Reimerweg")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5]
            if (direction.includes("Freudstr")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6]
            if (direction.includes("Westerwaldstr")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
          case "337":
            if (direction.includes("Galenstr")) return ["S+u Rathaus Spandau [Bus Altstädter Ring]", 3]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6]
          case "671":
          case "N7":
            if (direction.includes("Galenstr")) return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 3]
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 9]
          case "N30":
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4]
          default:
            return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null]
        }
      case "900000029371":
        switch(lineName){
          case "X33":
          case "136":
          case "337":
          case "671":
          case "N7":
            return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1]
          case "N30":
            return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 2]
          case "130":
            if(direction.includes("Ruhleben")) return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1]
            if(direction.includes("Stresow")) return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1]
            if(direction.includes("Zeppelinstr")) return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 2]
            if(direction.includes("Westerwaldstr")) return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 2]
            if(direction.includes("Waldkrankenhaus")) return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 2]
            return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1]
          case "237":
            if(direction.includes("Isenburger")) return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 2]
            return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1]
          default:
            return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1]
        }
      default:
        return ["S+U Rathaus Spandau", null]
    }
  }
}