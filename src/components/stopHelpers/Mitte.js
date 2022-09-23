export function getAlex(id, mode, lineName, direction, provenance) {
  if (mode === "arr") {
    switch(id) {
      case "900000100712":
        return ["S+U Alexanderplatz/Grunerstr. [Alexanderstr.]", 18]
      case "900000100711":
        return ["S+U Alexanderplatz/Grunerstr. [Grunerstr.]", 17]
      case "900000100024":
        return ["S+U Alexanderplatz/Dircksenstr.", "13/14"]
      case "900000100026":
        switch(provenance) {
          case "Clara-Jaschke-Str.":
          case "S Hackescher Markt":
            return ["S+U Alexanderplatz/Gontardstr.", 16]
          default:
            return ["S+U Alexanderplatz/Gontardstr.", 15]
        }
      case "900000100031":
        switch(lineName) {
          case "100":
          case "200":
            if(provenance.includes("Hertzallee")) return ["S+U Alexanderplatz/Memhardstr.", 24]
            return ["S+U Alexanderplatz/Memhardstr.", 1]
          case "N2":
            if(provenance.includes("Ruhleben")) return ["S+U Alexanderplatz/Memhardstr.", 25]
            if(provenance.includes("Zoologischer Garten")) return ["S+U Alexanderplatz/Memhardstr.", 25]
            return ["S+U Alexanderplatz/Memhardstr.", 21]
          case "N5":
            if(provenance.includes("Riesaer Str")) return ["S+U Alexanderplatz/Memhardstr.", 21]
            if(provenance.includes("Wuhletal")) return ["S+U Alexanderplatz/Memhardstr.", 21]
            return ["S+U Alexanderplatz/Memhardstr.", 24]
          case "N8":
            if(provenance.includes("Hermannstr")) return ["S+U Alexanderplatz/Memhardstr.", 26]
            if(provenance.includes("Hermannplatz")) return ["S+U Alexanderplatz/Memhardstr.", 26]
            return ["S+U Alexanderplatz/Memhardstr.", 22]
          case "N40":
            if(provenance.includes("Turmstr")) return ["S+U Alexanderplatz/Memhardstr.", 22]
            return ["S+U Alexanderplatz/Memhardstr.", 25]
          case "N42":
            return ["S+U Alexanderplatz/Memhardstr.", 23]
          case "N60":
          case "N65":
            return ["S+U Alexanderplatz/Memhardstr.", 20]
          default: return ["S+U Alexanderplatz/Memhardstr.", null]
        }
      default: return ["S+U Alexanderplatz", null]
    }
  } else {
    switch(id) {
      case "900000100712":
        return ["S+U Alexanderplatz/Grunerstr. [Alexanderstr.]", 18]
      case "900000100711":
        return ["S+U Alexanderplatz/Grunerstr. [Grunerstr.]", 17]
      case "900000100024":
        return ["S+U Alexanderplatz/Dircksenstr.", "13/14"]
      case "900000100026":
        switch(direction) {
          case "S+U Hauptbahnhof":
          case "S Hackescher Markt":
            return ["S+U Alexanderplatz/Gontardstr.", 15]
          default:
            return ["S+U Alexanderplatz/Gontardstr.", 16]
        }
      case "900000100031":
        switch(lineName) {
          case "100":
          case "200":
            if(direction.includes("Michelangelostr")) return ["S+U Alexanderplatz/Memhardstr.", 24]
            if(direction.includes("Memhardstr")) return ["S+U Alexanderplatz/Memhardstr.", 24]
            return ["S+U Alexanderplatz/Memhardstr.", 1]
          case "N2":
            if(direction.includes("Ruhleben")) return ["S+U Alexanderplatz/Memhardstr.", 21]
            if(direction.includes("Zoologischer Garten")) return ["S+U Alexanderplatz/Memhardstr.", 21]
            return ["S+U Alexanderplatz/Memhardstr.", 25]
          case "N5":
            if(direction.includes("Riesaer Str")) return ["S+U Alexanderplatz/Memhardstr.", 24]
            if(direction.includes("Wuhletal")) return ["S+U Alexanderplatz/Memhardstr.", 24]
            return ["S+U Alexanderplatz/Memhardstr.", 21]
          case "N8":
            if(direction.includes("Hermannstr")) return ["S+U Alexanderplatz/Memhardstr.", 22]
            if(direction.includes("Hermannplatz")) return ["S+U Alexanderplatz/Memhardstr.", 22]
            return ["S+U Alexanderplatz/Memhardstr.", 26]
          case "N40":
            if(direction.includes("Turmstr")) return ["S+U Alexanderplatz/Memhardstr.", 25]
            return ["S+U Alexanderplatz/Memhardstr.", 22]
          case "N42":
            return ["S+U Alexanderplatz/Memhardstr.", 23]
          case "N60":
          case "N65":
            return ["S+U Alexanderplatz/Memhardstr.", 20]
          default:
            return ["S+U Alexanderplatz/Memhardstr.]", null]
        }
      default:
        return ["S+U Alexanderplatz", null]
    }
  }
}

export function getHbf(mode, lineName, direction, provenance) {
  if (mode === "arr") {
    switch(lineName) {
      case "M5":
      case "M8":
      case "M10":
        if (provenance.includes("Clara-Jaschke-Str")) return ["S+U Berlin Hauptbahnhof [Tram Invalidenstr.]", 5]
        return ["S+U Berlin Hauptbahnhof [Tram Invalidenstr.]", 4]
      case "120":
        if(provenance.includes("Seydlitzstr")) return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
        return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
      case "142":
      case "147":
        if(provenance.includes("Ostbahnhof")) return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
        if(provenance.includes("Märkisches Museum")) return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
        return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
      case "245":
        if(provenance.includes("Hertzallee")) return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
        return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
      case "N5":
      case "N20":
        if(provenance.includes("Riesaer Str")) return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
        if(provenance.includes("Wuhletal")) return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
        if(provenance.includes("Hainbuchenstr")) return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
        return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
      case "N40":
        if(provenance.includes("Tiergarten")) return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
        return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
      case "M41":
      case "M85":
      case "123":
        return ["S+U Berlin Hauptbahnhof [Bus Minna-Cauer-Str.]", 1]
      default: return ["S+U Berlin Hauptbahnhof", null]
    }
  } else {
    switch(lineName) {
      case "M5":
      case "M8":
      case "M10":
        if(direction.includes("Lüneburger Str")) return ["S+U Berlin Hauptbahnhof [Tram Invalidenstr.]", 4]
        return ["S+U Berlin Hauptbahnhof [Tram Invalidenstr.]", 5]
      case "120":
        if(direction.includes("Seydlitzstr")) return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
        return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
      case "142":
      case "147":
        if(direction.includes("Ostbahnhof")) return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
        if(direction.includes("Märkisches Museum")) return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
        return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
      case "245":
        if(direction.includes("Zoo")) return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
        return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
      case "N5":
      case "N20":
        if(direction.includes("Riesaer Str")) return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
        if(direction.includes("Wuhletal")) return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
        if(direction.includes("Hainbuchenstr")) return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
        return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
      case "N40":
        if(direction.includes("Turmstr")) return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
        return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
      case "M41":
      case "M85":
      case "123":
        return ["S+U Berlin Hauptbahnhof [Bus Minna-Cauer-Str.]", 2]
      default:
        return ["S+U Berlin Hauptbahnhof", null]
    }
  }
}

export function getPotsdamerPlatz(id, mode, lineName, direction, provenance) {
  if (mode === 'arr') {
    switch (id) {
      case "900000005208":
        switch (lineName) {
          case "M41": return 2
          case "M48":
            if (provenance.includes("Mohrenstr")) return 2
            return 1
          case "M85":
            if (provenance.includes("Hauptbahnhof")) return 2
            return 1
          case "200":
            if (provenance.includes("Philharmonie")) return 1
            if (provenance.includes("Hertzallee")) return 1
            return 2
          case "300":
            if (provenance.includes("Philharmonie")) return 1
            return 2
          case "N2":
            if (provenance.includes("Hertzallee")) return 1
            if (provenance.includes("Ruhleben")) return 1
            return 2
          default: return null
        }
      case "900000100022":
        switch (lineName) {
          case "M41":
          case "M85":
            if (provenance.includes("Hauptbahnhof")) return 3
            return 4
          case "M48": return 4
          default: return null
        }
      case "900000100721":
        switch (lineName) {
          case "M48": return 5
          case "200":
            if (provenance.includes("Hertzallee")) return 6
            if (provenance.includes("Philharmonie")) return 6
            return 5
          case "300":
            if (provenance.includes("Philharmonie")) return 6
            return 5
          case "N2":
            if (provenance.includes("Hertzallee")) return 6
            if (provenance.includes("Ruhleben")) return 6
            return 5
          default: return null
        }
      case "900000100722":
        switch (lineName) {
          case "M41":
            if (provenance.includes("Philharmonie")) return 8
            if (provenance.includes("Hauptbahnhof")) return 8
            return 7
          default: return null
        }
      default: return null
    }
  } else {
    switch (id) {
      case "900000005208":
        switch (lineName) {
          case "M41": return 2
          case "M48":
            if (direction.includes("Mohrenstr")) return 1
            return 2
          case "M85":
            if (direction.includes("Hauptbahnhof")) return 1
            return 2
          case "200":
            if (direction.includes("Philharmonie")) return 2
            if (direction.includes("Zoo")) return 2
            return 1
          case "300":
            if (direction.includes("Philharmonie")) return 2
            return 1
          case "N2":
            if (direction.includes("Zoo")) return 2
            if (direction.includes("Ruhleben")) return 2
            return 1
          default: return null
        }
      case "900000100022":
        switch (lineName) {
          case "M41":
          case "M85":
            if (direction.includes("Hauptbahnhof")) return 4
            if (direction.includes("Fahrt")) return 4
            return 3
          case "M48": return 4
          default: return null
        }
      case "900000100721":
        switch (lineName) {
          case "M48": return 5
          case "200":
            if (direction.includes("Zoo")) return 5
            if (direction.includes("Philharmonie")) return 5
            return 6
          case "300":
            if (direction.includes("Philharmonie")) return 5
            return 6
          case "N2":
            if (direction.includes("Zoo")) return 5
            if (direction.includes("Ruhleben")) return 5
            return 6
          default: return null
        }
      case "900000100722":
        switch (lineName) {
          case "M41":
            if (direction.includes("Philharmonie")) return 7
            if (direction.includes("Hauptbahnhof")) return 7
            return 8
          default: return null
        }
      default: return null
    }
  }
}