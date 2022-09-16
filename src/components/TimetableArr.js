import React, { useRef, useEffect, lazy } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useDebugState } from "use-named-state"
import axios from "axios"
import { getDuration } from "../components/helpers"
import stops from "../data/stops"
const Input = lazy(() => import("./Input"))
const Select = lazy(() => import("./Select"))
const Button = lazy(() => import("./Button"))
const Filter = lazy(() => import("./Filter"))
const StopBody = lazy(() => import("./StopBody"))
/* eslint-disable react-hooks/exhaustive-deps */

export default function TimetableArr(props) {
  const [selection, setSelection] = useDebugState("selection",stops)
  const [stop, setStop] = useDebugState("stop",{})
  const [data, setData] = useDebugState("data",[])
  const [viewData, setViewData] = useDebugState("viewData",[])
  const [error, setError] = useDebugState("error",null)
  const params = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    if (params.hasOwnProperty("id") && typeof params.id === "string" && params.id.length > 0) {
      const selectedStop = stops.find(stop => stop.id === params.id)
      navigate(`/arrivals/${params.id}`)
      setStop(selectedStop)
      getData(params.id)
      const remainingStops = stops.filter(stop => stop.name !== selectedStop.name)
      const stopSelection = [selectedStop, ...remainingStops]
      setSelection(stopSelection)
    } else {
      const initialStopArray = stops.filter(
        (stop) => stop.name === "U Stadtmitte"
      )
      const [initialStop] = initialStopArray
      const { id: initialId } = initialStop
      navigate(`/arrivals/${initialId}`)
      setStop(initialStop)
      getData(initialId)
      const remainingStops = stops.filter(
        (stop) => stop.name !== initialStop.name
      )
      const stopSelection = [initialStop, ...remainingStops]
      setSelection(stopSelection)
    }
  }, []) 
  const inputField = useRef(null)
  const filterField = useRef(null)
  const filterSelector = useRef(null)
  const filterData = (event) => {
    const { current: fieldCurrent } = filterField
    const { value: fieldValue } = fieldCurrent
    const filterValues = fieldValue.split(" ")
    const { current: selectorCurrent } = filterSelector
    const { value: filterMode } = selectorCurrent
    if (filterValues.length > 0) {
      if (filterMode === "OR") {
        filterOr(filterValues)
      } else {
        filterAnd(filterValues)
      }
    } else {
      noFilters()
    }
  }
  const filterOr = (filterValues) => {
    const filteredData = data.filter((arrival) => {
      let decider = false
      for (let i = 0; i < filterValues.length; i++) {
        if (
          arrival.line.name
            .toLowerCase()
            .includes(filterValues[i].toLowerCase()) ||
          arrival.direction
            .toLowerCase()
            .includes(filterValues[i].toLowerCase())
        ) {
          decider = true
          break
        }
      }
      return decider
    })
    setViewData(filteredData)
  }
  const filterAnd = (filterValues) => {
    const filteredData = data.filter((arrival) => {
      let decider = true
      for (let i = 0; i < filterValues.length; i++) {
        if (
          arrival.line.name
            .toLowerCase()
            .includes(filterValues[i].toLowerCase()) ||
          arrival.direction
            .toLowerCase()
            .includes(filterValues[i].toLowerCase())
        ) {
          continue
        } else {
          decider = false
          break
        }
      }
      return decider
    })
    setViewData(filteredData)
  }
  const noFilters = () => {
    setViewData(data)
  }
  const filterStops = (filterValue) => {
    const remainingStops = stops.filter(
      (currStop) =>
        currStop.id !== stop.id &&
        currStop.name.toLowerCase().includes(filterValue.toLowerCase())
    )
    const newSelection = [stop, ...remainingStops]
    setSelection(newSelection)
  }
  const doFilter = (event) => {
    // if (event.key === "Enter") {
    const filterValue = event.target.value
    filterStops(filterValue)
    // }
  }
  const setCurrStop = (currStop) => {
    setStop(currStop)
  }
  const getData = async (id) => {
    const currentStopArray = stops.filter((stop) => stop.id === id)
    const [currentStop] = currentStopArray
    const { type = "BBG" } = currentStop
    const duration = getDuration(type)
    const url = `https://sklinkusch-vbbmicro.vercel.app/?station=${id}&duration=${duration}&mode=arr`
    const response = await axios.get(url)
    const { data: resData, status } = await response
    if (status === 500 || status !== 200) {
      setError(`HTTP status code: ${status}`)
      setData([])
    } else {
      setData(resData)
      setViewData(resData)
      setError(null)
    }
  }
  const handleChange = (currentStop) => {
    setCurrStop(currentStop)
    const { id: myStopId } = currentStop
    getData(myStopId)
    inputField.current.value = ""
    filterField.current.value = ""
    filterSelector.current.value = "OR"
  }
  const handleSubmit = () => {
    getData(stop.id)
    inputField.current.value = ""
    filterField.current.value = ""
    filterSelector.current.value = "OR"
  }
  // useEffect(() => {
  //   getData(stop);
  // }, []);
  return (
    <div className="timetable">
      <Input filterStops={doFilter} inputField={inputField} />
      <Select handleChange={handleChange} selection={selection} stop={stop} mode="arr" />
      <Button handleSubmit={handleSubmit} />
      <Filter
        filterField={filterField}
        filterSelector={filterSelector}
        filterData={filterData}
        mode="arr"
      />
      <StopBody stop={stop} data={viewData} error={error} mode="arr" />
    </div>
  )
}
