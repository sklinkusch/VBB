import React, { useState, useRef, useEffect } from "react"
import axios from "axios"
import "../styles/Timetable.scss"
import Input from "./Input"
import Select from "./Select"
import Button from "./Button"
import StopBody from "./StopBody"
import Filter from "./Filter"
import stops from "../data/stops"
import { getDuration } from "../components/helpers"

export default function Timetable(props) {
  const [allStops] = useState(stops)
  const [selection, setSelection] = useState(stops)
  const [stop, setStop] = useState({})
  const [data, setData] = useState([])
  const [viewData, setViewData] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    const initialStopArray = stops.filter(
      (stop) => stop.name === "U Stadtmitte"
    )
    const [initialStop] = initialStopArray
    const { id: initialId } = initialStop
    setStop(initialStop)
    getData(initialId)
    const remainingStops = allStops.filter(
      (stop) => stop.name !== initialStop.name
    )
    const stopSelection = [initialStop, ...remainingStops]
    setSelection(stopSelection)
  }, [])
  const inputField = useRef(null)
  const filterField = useRef(null)
  const filterSelector = useRef(null)
  const filterData = (event) => {
    if (event.key === "Enter") {
      if (filterField.current.value !== "") {
        const filterValues = filterField.current.value.split(" ")
        const filterMode = filterSelector.current.value
        if (filterMode === "OR") {
          filterOr(filterValues)
        } else {
          filterAnd(filterValues)
        }
      } else {
        noFilters()
      }
    }
  }
  const filterOr = (filterValues) => {
    const filteredData = this.state.data.filter((departure) => {
      let decider = false
      for (let i = 0; i < filterValues.length; i++) {
        if (
          departure.line.name
            .toLowerCase()
            .includes(filterValues[i].toLowerCase()) ||
          departure.direction
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
    const filteredData = this.state.data.filter((departure) => {
      let decider = true
      for (let i = 0; i < filterValues.length; i++) {
        if (
          departure.line.name
            .toLowerCase()
            .includes(filterValues[i].toLowerCase()) ||
          departure.direction
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
    const remainingStops = allStops.filter(
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
    const currentStopArray = allStops.filter((stop) => stop.id === id)
    const [currentStop] = currentStopArray
    const { type = "BBG" } = currentStop
    const duration = getDuration(type)
    const url = `https://sklinkusch-vbbmicro.now.sh/?station=${id}&duration=${duration}`
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
      <Select handleChange={handleChange} selection={selection} stop={stop} />
      <Button handleSubmit={handleSubmit} />
      <Filter
        filterField={filterField}
        filterSelector={filterSelector}
        filterData={filterData}
      />
      <StopBody stop={stop} data={viewData} error={error} />
    </div>
  )
}
