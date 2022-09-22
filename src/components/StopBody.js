import React, { Fragment, useEffect } from 'react'
import { useDebugState } from 'use-named-state'
import { getDuration } from "./helpers"
import StopName from "./StopName"
import Error from "./Error"
import TableData from "./TableData"
import { changeStopObject } from './stopHelpers'
/* eslint-disable react-hooks/exhaustive-deps */

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
        const newStopObject = changeStopObject(mode, e)
        return newStopObject
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
