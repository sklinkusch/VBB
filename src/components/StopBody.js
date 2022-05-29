import React, { Fragment, useState, useEffect } from 'react'
import { getDuration } from "./helpers"
import StopName from "./StopName"
import Error from "./Error"
import TableData from "./TableData"

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
      const stopsRaw = await data.map(e => e.stop.name)
      const stopsContracted = await stopsRaw.filter((val, ind, arr) => arr.indexOf(val) === ind)
      const resultArray = await data.reduce((acc, curr) => {
        const arr = [ ...acc ]
        const index = stopsContracted.indexOf(curr.stop.name)
        if(Array.isArray(arr[index])) {
          arr[index].push(curr)
        } else {
          arr[index] = [ curr ]
        }
        return arr
      },[])
      if(resultArray.length > 0) {
        setNewData(await resultArray)
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