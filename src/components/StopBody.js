import React from "react"
import { getDuration } from "./helpers"
import StopName from "./StopName"
import Error from "./Error"
import TableData from "./TableData"
// const StopName = lazy(() => import("./StopName"))
// const Error = lazy(() => import("./Error"))
// const TableData = lazy(() => import("./TableData"))

export default function StopBody({ stop, data, error, mode = "dep" }) {
  const sortData = () => {
    if (data !== null && data !== undefined && data.length > 0) {
      const tempArray = data.map((element, index) => {
        const stopName = element.stop.name.toLowerCase()
        const product = element.line.product
        return { index, stop: stopName, product }
      })
      const sortedTempArray = tempArray.sort((a,b) => {
        if(a.stopName < b.stopName) {
          return -1
        } else if (b.stopName < a.stopName) {
          return +1
        } else {
          const sortingArray = [
            'express',    // ICE, IC, EC
            'regional',   // IRE, RE, RB
            'suburban',   // S
            'subway',     // U
            'tram',       // Tram
            'bus',        // Bus
            'ferry'       // F
          ]
          if (sortingArray.indexOf(a.product) < sortingArray.indexOf(b.product)) {
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
  const splitArray = (myData) => {
    let resultArray = []
    let lowestValue = 0
    if (myData === undefined) {
      return null
    }
    while (lowestValue < myData.length) {
      let lowestResult = myData[lowestValue].stop.name
      let highestValue
      let filtered
      for (let i = lowestValue; i < myData.length; i++) {
        if (myData[i].stop.name !== lowestResult) {
          highestValue = i
          break
        }
      }
      filtered = myData.slice(lowestValue, highestValue)
      resultArray.push(filtered)
      lowestValue = highestValue
    }
    return resultArray
  }
  const sortedData = sortData()
  const newData = splitArray(sortedData)
  // const text = `In the next ${getDuration(
  //   stop.type || 'BLN'
  //   )} minutes, no departures are planned for the station or stop you have
  //   chosen.`;
  const keyword = mode === "dep" ? "departures" : "arrivals"
  const text = stop
    ? `In the next ${getDuration(
        stop.type
      )} minutes, no ${keyword} are planned for the station or stop you have chosen`
    : `In the next ${getDuration(
        "BLN"
      )} minutes, no ${keyword} are planned for the station or stop you have chosen`
  return (
    <React.Fragment>
      {stop && <StopName stop={stop} element="h2" />}
      {error ? (
        <Error />
      ) : newData !== undefined && newData !== null && newData.length > 0 ? (
        newData.map((depset, index) => {
          return <TableData stop={depset[0].stop} data={depset} key={index} mode={mode} />
        })
      ) : (
        <div>{text}</div>
      )}
    </React.Fragment>
  )
}
