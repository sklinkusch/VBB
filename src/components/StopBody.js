import React from "react"
import StopName from "./StopName"
import Error from "./Error"
import TableData from "./TableData"
import { getDuration } from "./helpers"

export default function StopBody({ stop, data, error, mode = "dep" }) {
  const sortData = () => {
    if (data !== null && data !== undefined && data.length > 0)
      return data.sort((a, b) => {
        if (a.stop.name.toLowerCase() < b.stop.name.toLowerCase()) {
          return -1
        } else if (b.stop.name.toLowerCase() < a.stop.name.toLowerCase()) {
          return +1
        } else {
          const sortingArray = [
            "express",
            "regional",
            "suburban",
            "subway",
            "tram",
            "bus",
            "ferry",
          ]
          if (
            sortingArray.indexOf(a.line.product) <
            sortingArray.indexOf(b.line.product)
          ) {
            return -1
          } else if (
            sortingArray.indexOf(b.line.product) <
            sortingArray.indexOf(a.line.product)
          ) {
            return +1
          } else {
            return 0
          }
        }
      })
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
