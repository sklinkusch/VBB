import React, { Fragment, useEffect } from 'react'
import { useDebugState } from 'use-named-state'
import { getDuration } from "./helpers"
import StopName from "./StopName"
import Error from "./Error"
import TableData from "./TableData"
/* eslint-disable react-hooks/exhaustive-deps */

function getZooBusStops(id, mode, lineName, direction, provenance) {
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

function getSteglitz(id, mode, lineName, direction, provenance) {
  if (mode === 'arr') {
    switch (id) {
      case "900000062282":
        if(["285", "N88"].includes(lineName)) return ["S+U Rathaus Steglitz [Busbahnhof]",6]
        if(["170", "283"].includes(lineName)) return ["S+U Rathaus Steglitz [Busbahnhof]", 7]
        if(["188"].includes(lineName)) return ["S+U Rathaus Steglitz [Busbahnhof]",8]
        return ["S+U Rathaus Steglitz [Busbahnhof]",null]
      case "900000062784":
        if (lineName === "X83" && provenance.includes("Clayallee")) return ["S+U Rathaus Steglitz [Albrechtstr.]",5]
      if (lineName === "282" && provenance.includes("Breitenbachplatz")) return ["S+U Rathaus Steglitz [Albrechtstr.]",5]
      if (["M82", "X83", "282", "284", "380"].includes(lineName)) return ["S+U Rathaus Steglitz [Albrechtstr.]",4]
      if (["170"].includes(lineName)) return ["S+U Rathaus Steglitz [Kuhligkshofstr.]", 11]
      return ["S+U Rathaus Steglitz [Albrechtstr.]",null]
    case "900000062782":
      if (lineName === "M48" && provenance.includes("Mohrenstr")) return ["S+U Rathaus Steglitz [Schloßstr.]", 2]
      if (lineName === "M48") return ["S+U Rathaus Steglitz [Schloßstr.]", 3]
      if (["M85", "N88"].includes(lineName) && provenance.includes("Lichterfelde")) return ["S+U Rathaus Steglitz [Schloßstr.]", 3]
      if (lineName === "M85") return ["S+U Rathaus Steglitz [Schloßstr.]", 1]
      if (lineName === "186" && provenance.includes("Lichterfelde")) return ["S+U Rathaus Steglitz [Schloßstr.]", 3]
      if (lineName === "186") return ["S+U Rathaus Steglitz [Schloßstr.]", 2]
      if (lineName === "283" && !provenance.includes("Fahrt")) return ["S+U Rathaus Steglitz [Schloßstr.]", 10]
      if (lineName === "285" && provenance.includes("Dahlem")) return ["S+U Rathaus Steglitz [Schloßstr.]", 10]
      if (["188", "283", "285"].includes(lineName)) return ["S+U Rathaus Steglitz [Schloßstr.]", 1]
      if (lineName === "N9") return ["S+U Rathaus Steglitz [Schloßstr.]", null]
      return ["S+U Rathaus Steglitz [Schloßstr.]", null]
    default:
      return ["S+U Rathaus Steglitz",null]
  }

  } else {
    switch (id) {
      case "900000062282":
        if(["285", "N88"].includes(lineName)) return ["S+U Rathaus Steglitz [Busbahnhof]",6]
        if(["170", "283"].includes(lineName)) return ["S+U Rathaus Steglitz [Busbahnhof]", 7]
        if(["188"].includes(lineName)) return ["S+U Rathaus Steglitz [Busbahnhof]",8]
        return ["S+U Rathaus Steglitz [Busbahnhof]",null]
      case "900000062784":
        if (lineName === "X83" && direction.includes("Clayallee")) return ["S+U Rathaus Steglitz [Albrechtstr.]",4]
        if (lineName === "282" && direction.includes("Breitenbachplatz")) return ["S+U Rathaus Steglitz [Albrechtstr.]",4]
        if (["M82", "X83", "282", "284", "380"].includes(lineName)) return ["S+U Rathaus Steglitz [Albrechtstr.]",5]
        if (["170"].includes(lineName)) return ["S+U Rathaus Steglitz [Kuhligkshofstr.]", 9]
        return ["S+U Rathaus Steglitz [Albrechtstr.]",null]
      case "900000062782":
        if (lineName === "M48" && direction.includes("Mohrenstr")) return ["S+U Rathaus Steglitz [Schloßstr.]", 3]
        if (lineName === "M48") return ["S+U Rathaus Steglitz [Schloßstr.]", 2]
        if (["M85", "N88"].includes(lineName) && direction.includes("Lichterfelde")) return ["S+U Rathaus Steglitz [Schloßstr.]", 1]
        if (lineName === "M85") return ["S+U Rathaus Steglitz [Schloßstr.]", 3]
        if (lineName === "186" && direction.includes("Lichterfelde")) return ["S+U Rathaus Steglitz [Schloßstr.]", 2]
        if (lineName === "186") return ["S+U Rathaus Steglitz [Schloßstr.]", 3]
        if (lineName === "283" && !direction.includes("Fahrt")) return ["S+U Rathaus Steglitz [Schloßstr.]", 1]
        if (lineName === "285" && direction.includes("Dahlem")) return ["S+U Rathaus Steglitz [Schloßstr.]", 1]
        if (["188", "283", "285"].includes(lineName)) return ["S+U Rathaus Steglitz [Schloßstr.]", 10]
        if (lineName === "N9") return ["S+U Rathaus Steglitz [Schloßstr.]", 3]
        return ["S+U Rathaus Steglitz [Schloßstr.]", null]
      default:
        return ["S+U Rathaus Steglitz",null]
    }
  }
}

function getSuedkreuz(id, mode, lineName, direction, provenance) {
  if (mode === "arr") {
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
          if (direction.includes("Südkreuz")) return ["S Südkreuz/Ostseite", 5]
          return ["S Südkreuz/Ostseite", 4]
        }
        return ["S Südkreuz/Ostseite", null]
      default: return ["S Südkreuz", null]
    }
  } else  {
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

function getPankow(id, mode, lineName, direction, provenance) {
  if (mode === "arr") {
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
  } else {
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

function getWarschauer(mode, lineName, direction, provenance) {
  if (mode === "arr") {
    switch (lineName) {
      case "M10": return ["S+U Warschauer Str. [Warschauer Str.]", 4]
      case "300": return ["S+U Warschauer Str. [Tamara-Danz-Str.]", 8]
      case "347": 
        if (provenance.includes("Tunnelstr")) return ["S+U Warschauer Str. [Warschauer Str.]", 6]
        return ["S+U Warschauer Str. [Warschauer Str.]", 3]
      default: return ["S+U Warschauer Str.", null]
    }
  } else {
    switch (lineName) {
      case "M10": return ["S+U Warschauer Str. [Warschauer Str.]", 5]
      case "300": return ["S+U Warschauer Str. [Tamara-Danz-Str.]", 7]
      case "347": 
        if (direction.includes("Tunnelstr")) return ["S+U Warschauer Str. [Warschauer Str.]", 3]
        return ["S+U Warschauer Str. [Warschauer Str.]", 6]
      default: return ["S+U Warschauer Str.", null]
    }
  }
}

function getAlex(id, mode, lineName, direction, provenance) {
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

function getHbf(mode, lineName, direction, provenance) {
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

function getSpandau(id, mode, lineName, direction, provenance) {
  if (mode === "arr") {
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
            if (provenance.includes("Ruhleben")) return ("S+U Rathaus Spandau [Bus Altstädter Ring]", 6)
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
  } else {
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
            if (direction.includes("Ruhleben")) return ("S+U Rathaus Spandau [Bus Altstädter Ring]", 5)
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

function getJungfernheide(id, mode, lineName, direction, provenance) {
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

function getAdlershof(mode, lineName, direction, provenance) {
  if (mode === "arr") {
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
  } else {
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

function getGruenau(mode, lineName, direction, provenance) {
  if (mode === "arr") {
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
  } else {
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

function getMahlsdorf(id, mode, lineName, direction, provenance) {
  if (mode === "arr") {
    switch(lineName) {
      case "62":
        return ["S Mahlsdorf [Tram Bus Treskowstr.]", 5]
      case "195":
      case "395":
      case "398":
        if(id === "900000176007") return ["Wodanstr./S Mahlsdorf", 2]
        if(provenance.includes("S Marzahn")) return ["S Mahlsdorf [Bus Hönower Str.]", 3]
        if(provenance.includes("S Mahlsdorf")) return ["S Mahlsdorf [Bus Hönower Str.]", 3]
        return ["S Mahlsdorf [Bus Hönower Str.]", 4]
      case "197":
        if(id === "900000176702") return ["S Mahlsdorf [Tram Bus Treskowstr.]", 6]
        return ["S Mahlsdorf [Bus Hönower Str.]", 4]
      case "N90":
        if(provenance.includes("S+U Wuhletal")) return ["S Mahlsdorf [Bus Hönower Str.]", 3]
        return ["S Mahlsdorf [Bus Hönower Str.]", 4]
      case "N95":
        return ["S Mahlsdorf [Bus Hönower Str.]", 4]
      default:
        return ["S Mahlsdorf", null]
    }
  } else {
    switch(lineName) {
      case "62":
        return ["S Mahlsdorf [Tram Bus Treskowstr.]", 6]
      case "195":
      case "395":
      case "398":
        if(direction.includes("S Marzahn")) return ["S Mahlsdorf [Bus Hönower Str.]", 4]
        if(direction.includes("S Mahlsdorf")) return ["S Mahlsdorf [Bus Hönower Str.]", 4]
        return ["S Mahlsdorf [Bus Hönower Str.]", 3]
      case "197":
        if(id === "900000176702") return ["S Mahlsdorf [Tram Bus Treskowstr.]", 6]
        return ["S Mahlsdorf [Bus Hönower Str.]", 4]
      case "N90":
        if(direction.includes("S+U Wuhletal")) return ["S Mahlsdorf [Bus Hönower Str.]", 4]
        return ["S Mahlsdorf [Bus Hönower Str.]", 3]
      case "N95":
        return ["S Mahlsdorf [Bus Hönower Str.]", 4]
      default:
        return ["S Mahlsdorf", null]
    }
  }
}

function getCharlottenburg(id, mode, lineName, direction, provenance) {
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

function getRuhleben(mode, lineName, direction, provenance) {
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

function getFriedrichsfeldeOst(lineName, direction) {
  switch(lineName) {
    case "M17":
    case "27":
    case "37":
      if(direction.includes("Falkenberg")) return ["S Friedrichsfelde Ost [Tram Rhinstr.]", 2]
      if(direction.includes("Gehrenseestr")) return ["S Friedrichsfelde Ost [Tram Rhinstr.]", 2]
      if(direction.includes("Pasedagplatz")) return ["S Friedrichsfelde Ost [Tram Rhinstr.]", 2]
      if(direction.includes("Lichtenberg")) return ["S Friedrichsfelde Ost [Tram Rhinstr.]", 2]
      return ["S Friedrichsfelde Ost [Tram Rhinstr.]", 1]
    case "192":
      return ["S Friedrichsfelde Ost [Bus Seddiner Str.]", 3]
    case "194":
      if(direction.includes("Helene-Weigel-Platz")) return ["S Friedrichsfelde Ost [Bus Seddiner Str.]", 5]
      return ["S Friedrichsfelde Ost [Bus Seddiner Str.]", 4]
    default:
      return ["S Friedrichsfelde Ost", null]
  }
}

function getLichtenberg(lineName, direction) {
  switch(lineName) {
    case "21":
    case "37":
      return ["S+U Lichtenberg/Siegfriedstr.", 2]
    case "240":
      if(direction.includes("Ostbahnhof")) return ["S+U Lichtenberg [Bus Weitlingstr.]", 8]
      return ["S+U Lichtenberg [Bus Weitlingstr.]", 11]
    case "256":
      if(direction.includes("Zentralfriedhof")) return ["S+U Lichtenberg/Siegfriedstr.", 1]
      return ["S+U Lichtenberg/Siegfriedstr.", 2]
    case "108":
    case "296":
      return ["S+U Lichtenberg [Bus Weitlingstr.]", 8]
    case "N50":
      return ["S+U Lichtenberg [Bus Einbecker Str.]", 12]
    default:
      return ["S+U Lichtenberg", null]
  }
}

function getMarzahn(product, lineName, direction) {
  console.log(product, lineName, direction)
  switch(lineName) {
    case "M6":
    case "16":
      if(direction.includes("Riesaer Str")) return ["S Marzahn [Tram Bus Marzahner Promenade]", 7]
      if(direction.includes("Betriebshof Marzahn")) return ["S Marzahn [Tram Bus Marzahner Promenade]", 7]
      if(direction.includes("Ahrensfelde")) return ["S Marzahn [Tram Bus Marzahner Promenade]", 7]
      return ["S Marzahn [Tram Bus Marzahner Promenade]", 6]
    case "X54":
      if(direction.includes("Hellersdorf")) return ["S Marzahn [Tram Bus Marzahner Promenade]", 5]
      return ["S Marzahn [Tram Bus Marzahner Promenade]", 4]
    case "191":
    case "192":
    case "195":
      return ["S Marzahn [Bushafen]", 2]
    case "291":
      return ["S Marzahn [Bushafen]", 3]
    default:
      if(product === "tram") {
        if (direction.includes("Riesaer Str")) return ["S Marzahn [Tram Bus Marzahner Promenade]", 7]
        if(direction.includes("Betriebshof Marzahn")) return ["S Marzahn [Tram Bus Marzahner Promenade]", 7]
        if(direction.includes("Ahrensfelde")) return ["S Marzahn [Tram Bus Marzahner Promenade]", 7]
        return ["S Marzahn [Tram Bus Marzahner Promenade]", 6]
      }
      return ["S Marzahn", null]
  }
}

function getGrunewald(lineName, direction) {
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

export default function StopBody({ data, error, stop, mode = 'dep' }) {
  const [newData, setNewData] = useDebugState("newData", null)
  const sortData = (data) => {
    if (data !== null && data !== undefined && data.length > 0) {
      const tempArray = data.map((element, index) => {
        const stopName = element.stop.name.toLowerCase()
        const product = element.line.product
        const time = element.when || element.scheduledWhen || element.formerScheduledWhen || element.plannedWhen
        return { index, stop: stopName, product, time }
      })
      const sortedTempArray = tempArray.sort((a,b) => {
        const { stop: aStop, product: aProduct, time: aTime } = a
        const { stop: bStop, product: bProduct, time: bTime } = b
        if (aStop < bStop) {
          return -1
        } else if (bStop < aStop) {
          return +1
        } else {
          const sortingArray = [
            'express', 'regional', 'suburban', 'subway', 'tram', 'bus', 'ferry'
          ]
          if(sortingArray.indexOf(aProduct) < sortingArray.indexOf(bProduct)) {
            return -1
          } else if (sortingArray.indexOf(bProduct) < sortingArray.indexOf(aProduct)) {
            return +1
          } else if (aTime < bTime) {
            return -1
          } else if (bTime < aTime) {
            return +1
          } else {
            return 0
          }
        }
      })
      const sortedDataArray = sortedTempArray.map(e => data[e.index])
      return sortedDataArray
    }
    return undefined
  }
  const splitArray = async (data) => {
    if (data !== null && data !== undefined && data.length > 0) {
      const dataModified = await data.map(e => {
        const { stop, line, direction, provenance } = e
        const { id } = stop
        const { product, name: lineName } = line
        if (["900000023201", "900000023172", "900000023173"].includes(id) && product === "bus") {
          const [newStopName, trackNo] = getZooBusStops(id, mode, lineName, direction, provenance)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
        } 
        if(["900000062784", "900000062282", "900000062782"].includes(id) && product === 'bus') {
          const [newStopName, trackNo] = getSteglitz(id, mode, lineName, direction, provenance)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
        }
        if(["900000058101", "900000058100"].includes(id) && product === "bus") {
          const [newStopName, trackNo] = getSuedkreuz(id, mode, lineName, direction, provenance)
          const newStop = { ...e, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
        }
        if(["900000130002", "900000130500"].includes(id) && ["tram", "bus"].includes(product)) {
          const [newStopName, trackNo] = getPankow(id, mode, lineName, direction, provenance)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
        }
        if(["900000120004"].includes(id) && ["tram", "bus"].includes(product)) {
          const [newStopName, trackNo] = getWarschauer(mode, lineName, direction, provenance)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
        }
        if(["900000100712", "900000100711", "900000100024", "900000100026", "900000100031"].includes(id)) {
          const [newStopName, trackNo] = getAlex(id, mode, lineName, direction, provenance)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
        }
        if(["900000003201"].includes(id) && ["tram", "bus"].includes(product)) {
          const [newStopName, trackNo] = getHbf(mode, lineName, direction, provenance)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
        }
        if(["900000029302", "900000029371"].includes(id) && product === "bus") {
          const [newStopName, trackNo] = getSpandau(id, mode, lineName, direction, provenance)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
        }
        if(["900000020201", "900000020207"].includes(id) && product === "bus") {
          const [newStopName, trackNo] = getJungfernheide(id, mode, lineName, direction, provenance)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
        }
        if(["900000193002"].includes(id) && ["tram", "bus"].includes(product)) {
          const [newStopName, trackNo] = getAdlershof(mode, lineName, direction, provenance)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
        }
        if(["900000186001", "900000186701", "900000186704"].includes(id) && ["tram", "bus"].includes(product)) {
          const [newStopName, trackNo] = getGruenau(mode, lineName, direction, provenance)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
        }
        if(["900000176001","900000176007","900000176701", "900000176702"].includes(id) && ["tram", "bus"].includes(product)) {
          const [newStopName, trackNo] = getMahlsdorf(id, mode, lineName, direction, provenance)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo}
        }
        if(["900000024101","900000024103","900000024202","900000024205"].includes(id) && ["bus"].includes(product)) {
          const [newStopName, trackNo] = getCharlottenburg(id, mode, lineName, direction, provenance)
          const newStop = { ...stop, name: newStopName}
          return { ...e, stop: newStop, platform: trackNo }
        }
        if(["900000025202"].includes(id) && ["bus"].includes(product)) {
          const newStopName = getRuhleben(mode, lineName, direction, provenance)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop }
        }
        if(["900000171002"].includes(id) && ["tram", "bus"].includes(product)) {
          const [newStopName, trackNo] = getFriedrichsfeldeOst(lineName, direction)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
        }
        if(["900000160004", "900000160702", "900000160701", "900000160020", "900000160704"].includes(id) && ["tram", "bus"].includes(product)) {
          const [newStopName, trackNo] = getLichtenberg(lineName, direction)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
        }
        if(["900000170001", "900000170702", "900000170701"].includes(id) && ["tram", "bus"].includes(product)) {
          const [newStopName, trackNo] = getMarzahn(product, lineName, direction)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
        }
        if(["900000048101"].includes(id) && ["bus"].includes(product)) {
          const newStopName = getGrunewald(lineName, direction)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop }
        }
        return e
      })
      const stopsRaw = await dataModified.map(e => e.stop.name)
      const stopsContracted = await stopsRaw.filter((val, ind, arr) => arr.indexOf(val) === ind).sort()
      const resultArray = await dataModified.reduce((acc, curr) => {
        const arr = [ ...acc ]
        const index = stopsContracted.indexOf(curr.stop.name)
        if(Array.isArray(arr[index])) {
          arr[index].push(curr)
        } else {
          arr[index] = [ curr ]
        }
        return arr
      },[])
      if(await resultArray.length > 0) {
        await setNewData(await resultArray)
      }
    }
  }
  useEffect(() => {
    async function fetchData() {
      const sortedData = await sortData(data)
      await splitArray(await sortedData)
    }
    fetchData()
  },[data])
  const text = `In the next ${getDuration(stop.type || 'BLN')} minutes, no ${mode === 'dep' ? 'departures' : 'arrivals'} are planned for the station or stop you have chosen`
  return (
    <Fragment>
      {stop && <StopName stop={stop} element="h2" />}
      {error ? (<Error />) : (
        newData !== undefined && newData !== null && newData.length > 0 ? (newData.map((depset = [], index) => {
          if (depset.length > 0) {
            return <TableData stop={depset[0].stop} data={depset} key={index} mode={mode} />
          }
          return null
        })) : (<div>{text}</div>)
      )}
    </Fragment>
  )
}
