import React, { Fragment, useState, useEffect } from 'react'
import { getDuration } from "./helpers"
import StopName from "./StopName"
import Error from "./Error"
import TableData from "./TableData"

function getZooBusStops(stopName, lineName, direction) {
  if(direction.includes("Hertzallee")) {
    return "S+U Zoologischer Garten [Hardenbergplatz Busstg. 10]"
  }
  if(["X10", "109", "110", "N7X", "N10"].includes(lineName)) {
    return "S+U Zoologischer Garten [Hardenbergplatz Busstg. 4]"
  }
  if(["M49", "X34"].includes(lineName) || (lineName === "N9" && direction.includes("Steglitz"))) {
    return "S+U Zoologischer Garten [Hardenbergplatz Busstg. 5]"
  }
  if(["M45", "245"].includes(lineName)) {
    return "S+U Zoologischer Garten [Hardenbergplatz Busstg. 6]"
  }
  if(["100", "200"].includes(lineName) || (lineName === "N2" && direction.includes("Pankow"))) {
    return "S+U Zoologischer Garten [Hardenbergplatz Busstg. 7]"
  }
  if(["M46", "204", "N1"].includes(lineName)) {
    return "S+U Zoologischer Garten [Hardenbergplatz Busstg. 8]"
  }
  if(["249", "N26"].includes(lineName)) {
    return "S+U Zoologischer Garten [Hardenbergplatz Busstg. 9]"
  }
  return stopName
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
        const { stop, line, direction, ...rest } = e
        const { name: stopName, id, ...restStop } = stop
        const { product, name: lineName, ...restLine } = line
        if (["900000023201"].includes(id) && product === "bus") {
          const newStopName = getZooBusStops(stopName, lineName, direction)
          const newStop = { name: newStopName, id, ...restStop}
          const newLine = { product, lineName, ...restLine}
          return { stop: newStop, line: newLine, direction, ...rest }
        } 
        if(["900000062282"].includes(id)) {
          const trackNo = getSteglitz(lineName, direction)
          return { ...e, platform: trackNo }
        }
        if(["900000058101"].includes(id) && product === "bus") {
          const newStopName = "S Südkreuz [Hildegard-Knef-Platz]"
          const trackNo = getSuedkreuz(lineName, direction)
          const newStop = { name: newStopName, id, ...restStop }
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