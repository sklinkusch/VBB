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

export function getFriedrichshagen(lineName: string) {
  if (lineName === '88') return "S Friedrichshagen/Dahlwitzer Landstr."
  return "S Friedrichshagen [Bus Tram Bölschestr.]"
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

export function getKöpenick(id: string, mode: string, lineName: string, direction: Dir, provenance: Dir) {
  if (mode === 'arr' && provenance !== null) {
    switch (id) {
      case "900000180001":
        switch (lineName) {
          case "62":
            if (provenance.includes("Wendenschloß")) return ["S Köpenick [Bahnhofstr.]", 4]
            return ["S Köpenick [Mahlsdorfer Str.]", 2]
          case "63":
            if (provenance.includes("Johannisthal")) return ["S Köpenick [Bahnhofstr.]", 4]
            return ["S Köpenick [Mahlsdorfer Str.]", 2]
          case "68":
            if (provenance.includes("Schmöckwitz")) return ["S Köpenick [Bahnhofstr.]", 4]
            return ["S Köpenick [Mahlsdorfer Str.]", 2]
          case "X69":
          case "269":
            if (provenance.includes("Müggelschlößchenweg")) return ["S Köpenick [Bahnhofstr.]", 5]
            return ["S Köpenick [Mahlsdorfer Str.]", 1]
          case "164":
            if (provenance.includes("Kaulsdorfer Str.")) return ["S Köpenick [Mahlsdorfer Str.]", 1]
            return ["S Köpenick [Bahnhofstr.]", 5]
          case "169":
            if (provenance.includes("Elsterwerdaer Platz")) return ["S Köpenick [Mahlsdorfer Str.]", 1]
            if (provenance.includes("Kaulsdorfer Str.")) return ["S Köpenick [Mahlsdorfer Str.]", 1]
            return ["S Köpenick [Bahnhofstr.]", 5]
          case "N64":
          case "N90":
            if (provenance.includes("Adlershof")) return ["S Köpenick [Bahnhofstr.]", 5]
            return ["S Köpenick [Mahlsdorfer Str.]", 1]
          default: return ["S Köpenick [Tram Bus]", null]
        }
      case "900000180701":
        return ["S Köpenick [Tram Stellingdamm]", 3]
    }
  } else if (mode === 'dep' && direction !== null) {
    switch (id) {
      case "900000180001":
        switch (lineName) {
          case "62":
            if (direction.includes("Wendenschloß")) return ["S Köpenick [Mahlsdorfer Str.]", 2]
            return ["S Köpenick [Bahnhofstr.]", 4]
          case "63":
            if (direction.includes("Johannisthal")) return ["S Köpenick [Mahlsdorfer Str.]", 2]
            return ["S Köpenick [Bahnhofstr.]", 4]
          case "68":
            if (direction.includes("Schmöckwitz")) return ["S Köpenick [Mahlsdorfer Str.]", 2]
            return ["S Köpenick [Bahnhofstr.]", 4]
          case "X69":
          case "269":
            if (direction.includes("Müggelschlößchenweg")) return ["S Köpenick [Mahlsdorfer Str.]", 1]
            return ["S Köpenick [Bahnhofstr.]", 5]
          case "164":
            if (direction.includes("Kaulsdorfer Str.")) return ["S Köpenick [Bahnhofstr.]", 5]
            return ["S Köpenick [Mahlsdorfer Str.]", 1]
          case "169":
            if (direction.includes("Elsterwerdaer Platz")) return ["S Köpenick [Bahnhofstr.]", 5]
            if (direction.includes("Kaulsdorfer Str.")) return ["S Köpenick [Bahnhofstr.]", 5]
            return ["S Köpenick [Mahlsdorfer Str.]", 1]
          case "N64":
          case "N90":
            if (direction.includes("Adlershof")) return ["S Köpenick [Mahlsdorfer Str.]", 1]
            return ["S Köpenick [Bahnhofstr.]", 5]
          default: return ["S Köpenick [Tram Bus]", null]
        }
      case "900000180701":
        return ["S Köpenick [Tram Stellingdamm]", 3]
    }
  }
}

export function getRahnsdorf(product: string) {
  if (product === 'tram') return "S Rahnsdorf [Tram Str. nach Fichtenau]"
  return "S Rahnsdorf [Bus I.-Hunzinger-Str.]"
}

export function getTreptowerPark(id: string, mode: string, lineName: string, direction: Dir, provenance: Dir) {
  if (mode === 'arr' && provenance !== null) {
    switch (id) {
      case "900000190100":
        switch (lineName) {
          case "M43":
            return ["Elsenstr./S Treptower Park [Bus Puschkinallee]", 2]
          case "165":
            if (provenance.includes("Märkisches Museum")) return ["Elsenstr./S Treptower Park [Bus Elsenstr.]", 1]
            return ["Elsenstr./S Treptower Park [Bus Puschkinallee]", 2]
          case "166":
            if (provenance.includes("Weisestr")) return ["Elsenstr./S Treptower Park [Bus Puschkinallee]", 2]
            return ["Elsenstr./S Treptower Park [Bus Elsenstr.]", 1]
          case "194":
          case "N94":
            return ["Elsenstr./S Treptower Park [Bus Elsenstr.]", 1]
          case "265":
            if (provenance.includes("Schöneweide")) return ["Elsenstr./S Treptower Park [Bus Puschkinallee]", 2]
            return ["Elsenstr./S Treptower Park [Bus Elsenstr.]", 1]
          case "N60":
          case "N65":
            if (provenance.includes("Alexanderplatz")) return ["Elsenstr./S Treptower Park [Bus Elsenstr.]", 1]
            return ["Elsenstr./S Treptower Park [Bus Puschkinallee]", 2]
          default:
            return ["Elsenstr./S Treptower Park", null]
        }
      case "900000190701":
        return ["S Treptower Park [Bus Puschkinallee]", 5]
      case "900000190702":
        switch (lineName) {
          case "M43":
            if (provenance.includes("Tunnelstr")) return ["S Treptower Park [Bus Treptowers]", 3]
            return ["S Treptower Park [Bus Treptowers]", 4]
          case "194":
            if (provenance.includes("Friedrichsfelde Ost")) return ["S Treptower Park [Bus Treptowers]", 3]
            if (provenance.includes("Weigel")) return ["S Treptower Park [Bus Treptowers]", 3]
            return ["S Treptower Park [Bus Treptowers]", 4]
          case "N94":
            if (provenance.includes("Magdalenenstr")) return ["S Treptower Park [Bus Treptowers]", 3]
            return ["S Treptower Park [Bus Treptowers]", 4]
          default:
            return ["S Treptower Park [Bus Treptowers]", null]
        }
    }
  } else if (mode === 'dep' && direction !== null) {
    switch (id) {
      case "900000190100":
        switch (lineName) {
          case "M43":
            if (direction.includes("Fahrt endet hier")) return ["Elsenstr./S Treptower Park [Bus Puschkinallee]", 2]
            return ["Elsenstr./S Treptower Park [Bus Elsenstr.]", 1]
          case "165":
            if (direction.includes("Märkisches Museum")) return ["Elsenstr./S Treptower Park [Bus Puschkinallee]", 2]
            return ["Elsenstr./S Treptower Park [Bus Elsenstr.]", 1]
          case "166":
            if (direction.includes("Boddinstr")) return ["Elsenstr./S Treptower Park [Bus Elsenstr.]", 3]
            return ["Elsenstr./S Treptower Park [Bus Puschkinallee]", 2]
          case "194":
          case "N94":
            return ["Elsenstr./S Treptower Park [Bus Elsenstr.]", 1]
          case "265":
            if (direction.includes("Schöneweide")) return ["Elsenstr./S Treptower Park [Bus Elsenstr.]", 1]
            return ["Elsenstr./S Treptower Park [Bus Puschkinallee]", 2]
          case "N60":
          case "N65":
            if (direction.includes("Alexanderplatz")) return ["Elsenstr./S Treptower Park [Bus Puschkinallee]", 2]
            return ["Elsenstr./S Treptower Park [Bus Elsenstr.]", 1]
          default:
            return ["Elsenstr./S Treptower Park", null]
        }
      case "900000190701":
        return ["S Treptower Park [Bus Puschkinallee]", 5]
      case "900000190702":
        switch (lineName) {
          case "M43":
            if (direction.includes("Tunnelstr")) return ["S Treptower Park [Bus Treptowers]", 4]
            return ["S Treptower Park [Bus Treptowers]", 3]
          case "194":
            if (direction.includes("Friedrichsfelde Ost")) return ["S Treptower Park [Bus Treptowers]", 4]
            if (direction.includes("Weigel")) return ["S Treptower Park [Bus Treptowers]", 4]
            return ["S Treptower Park [Bus Treptowers]", 3]
          case "N94":
            if (direction.includes("Magdalenenstr")) return ["S Treptower Park [Bus Treptowers]", 4]
            return ["S Treptower Park [Bus Treptowers]", 3]
          default:
            return ["S Treptower Park [Bus Treptowers]", null]
        }
    }
  }
}

export function getWilhelmshagen() {
  return "S Wilhelmshagen [Bus Schönblicker Str.]"
}

export function getWuhlheide() {
  return "S Wuhlheide [Bus Köpenicker Str.]"
}