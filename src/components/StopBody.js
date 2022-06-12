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

function getHbf(lineName, direction) {
  if(["M5", "M8", "M10", "120", "142", "147", "245", "N5", "N20", "N40"].includes(lineName)) return "S+U Berlin Hauptbahnhof [Invalidenstr.]"
  if(["M41", "M85", "123"].includes(lineName)) return "S+U Berlin Hauptbahnhof [Minna-Cauer-Str.]"
  return "S+U Berlin Hauptbahnhof" 
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
        if(["900000003201"].includes(id) && ["tram", "bus"].includes(product)) {
          const newStopName = getHbf(lineName, direction)
          const newStop = { ...stop, name: newStopName }
          return { ...e, stop: newStop }
        }
        if(["900000029302", "900000029371"].includes(id) && product === "bus") {
          const [newStopName, trackNo] = getSpandau(id, lineName, direction)
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