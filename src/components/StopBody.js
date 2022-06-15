import React, { Fragment, useState, useEffect } from 'react'
import { getDuration } from "./helpers"
import StopName from "./StopName"
import Error from "./Error"
import TableData from "./TableData"

function getZooBusStops(id, lineName, direction) {
  switch(id) {
    case "900000023201":
      if(direction.includes("Hertzallee")) {
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
          return ["S+U Zoologischer Garten/Jebensstr.", 2]
        case "100":
        case "200":
        case "N2":
        case "N9":
          return ["S+U Zoologischer Garten/Jebensstr.", 3]
        default:
          return ["S+U Zoologischer Garten/Jebensstr.", null]
      }
    case "900000023173":
      return ["Jebensstr.", 1]
    default: return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", null]
  }
}

function getSteglitz(lineName, direction) {
  if(["285", "N88"].includes(lineName)) return 6
  if(["170", "283"].includes(lineName)) return 7
  if(["188"].includes(lineName)) return 8
  return null
}

function getSuedkreuz(lineName, direction) {
  if(lineName === "M46") {
    if(["S+U Zoologischer Garten", "U Wittenbergplatz"].includes(direction)) return 1
    if(["U Alt-Tempelhof", "U Britz-Süd"].includes(direction)) return 3
  }
  if(lineName === "106") {
    if(["U Seestr.", "U Bülowstr.", "U Kurfürstenstr."].includes(direction)) return 1
    if(["Lindenhof"].includes(direction)) return 2
  }
  if(lineName === "204") return 1
  if(lineName === "N42") {
    if(["S+U Alexanderplatz"]) return 2
  }
  return null
}

function getPankow(lineName, direction) {
  if(["M1", "50", "250", "255", "N50"].includes(lineName)) return "S+U Pankow [Berliner Str.]"
  if(["M27"].includes(lineName)) return "S+U Pankow [Florastr.]"
  if(["155"].includes(lineName) && direction === "Fontanestr.") return "S+U Pankow [Berliner Str.]"
  return "S+U Pankow"
}

function getWarschauer(lineName, direction) {
  if(["M10", "347", "N1"].includes(lineName)) return "S+U Warschauer Str. [Warschauer Str.]"
  if(["300"].includes(lineName)) return "S+U Warschauer Str. [Tamara-Danz-Str.]"
  return "S+U Warschauer Str."
}

function getAlex(id, lineName, direction) {
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

function getHbf(lineName, direction) {
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

function getSpandau(id, lineName, direction) {
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

function getJungfernheide(id,lineName, direction) {
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
    default: return [null, null]
  }
}

function getAdlershof(lineName, direction) {
  switch(lineName) {
    case "M17":
      return ["S Adlershof [Tram Wendeschleife]", 5]
    case "61":
      if(direction.includes("Schöneweide")) return ["S Adlershof [Tram]", 2]
      return ["S Adlershof [Tram]", 3]
    case "63":
      if(direction.includes("Johannisthal")) return ["S Adlershof [Tram]", 2]
      return ["S Adlershof [Tram]",3]
    case "162":
      if(direction.includes("Rudow")) return ["S Adlershof [Bus]", 1]
      return ["S Adlershof [Bus Rudower Chaussee]", 7]
    case "163":
      if(direction.includes("Schöneweide")) return ["S Adlershof [Bus]", 1]
      return ["S Adlershof [Bus Rudower Chaussee]", 7]
    case "164":
      if(direction.includes("Köpenick")) return ["S Adlershof [Bus Rudower Chaussee]", 7]
      return ["S Adlershof [Bus]", 1]
    case "260":
      return ["S Adlershof [Bus]", 1]
    case "N60":
      if(direction.includes("Flughafen")) return ["S Adlershof [Bus]", 1]
      return ["S Adlershof [Bus]", 4]
    case "N64":
    case "N68":
      return ["S Adlershof [Bus]", 4]
    default:
      return ["S Adlershof", null]
  }
}

function getGruenau(lineName, direction) {
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

export default function StopBody({ data, error, stop }) {
  const [newData, setNewData] = useState(null)
  const sortData = (data) => {
    if (data !== null && data !== undefined && data.length > 0) {
      const tempArray = data.map((element, index) => {
        const stopName = element.stop.name.toLowerCase()
        const product = element.line.product
        return { index, stop: stopName, product}
      })
      const sortedTempArray = tempArray.sort((a,b) => {
        if (a.stop < b.stop) {
          return -1
        } else if (b.stop < a.stop) {
          return +1
        } else {
          const sortingArray = [
            'express', 'regional', 'suburban', 'subway', 'tram', 'bus', 'ferry'
          ]
          if(sortingArray.indexOf(a.product) < sortingArray.indexOf(b.product)) {
            return -1
          } else if (sortingArray.indexOf(b.product) < sortingArray.indexOf(a.product)) {
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
        const { stop, line, direction } = e
        const { id } = stop
        const { product, name: lineName } = line
        if (["900000023201", "900000023172", "900000023173"].includes(id) && product === "bus") {
          const [newStopName, trackNo] = getZooBusStops(id, lineName, direction)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
        } 
        if(["900000062282"].includes(id)) {
          const trackNo = getSteglitz(lineName, direction)
          return { ...e, platform: trackNo }
        }
        if(["900000058101"].includes(id) && product === "bus") {
          const newStopName = "S Südkreuz [Hildegard-Knef-Platz]"
          const trackNo = getSuedkreuz(lineName, direction)
          const newStop = { ...e, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
        }
        if(["900000130002"].includes(id) && ["tram", "bus"].includes(product)) {
          const newStopName = getPankow(lineName, direction)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop }
        }
        if(["900000120004"].includes(id) && ["tram", "bus"].includes(product)) {
          const newStopName = getWarschauer(lineName, direction)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop }
        }
        if(["900000100712", "900000100711", "900000100024", "900000100026", "900000100031"].includes(id)) {
          const [newStopName, trackNo] = getAlex(id, lineName, direction)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
        }
        if(["900000003201"].includes(id) && ["tram", "bus"].includes(product)) {
          const [newStopName, trackNo] = getHbf(lineName, direction)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
        }
        if(["900000029302", "900000029371"].includes(id) && product === "bus") {
          const [newStopName, trackNo] = getSpandau(id, lineName, direction)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
        }
        if(["900000020201", "900000020207"].includes(id) && product === "bus") {
          const [newStopName, trackNo] = getJungfernheide(id,lineName, direction)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
        }
        if(["900000193002"].includes(id) && ["tram", "bus"].includes(product)) {
          const [newStopName, trackNo] = getAdlershof(lineName, direction)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
        }
        if(["900000186001", "900000186701", "900000186704"].includes(id) && ["tram", "bus"].includes(product)) {
          const [newStopName, trackNo] = getGruenau(lineName, direction)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop, platform: trackNo }
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
  const mode = "dep"
  const text = `In the next ${getDuration(stop.type || 'BLN')} minutes, no departures are planned for the station or stop you have chosen`
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