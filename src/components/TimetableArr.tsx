import React, { useRef, useEffect, lazy } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useDebugState } from "use-named-state"
import axios from "axios"
import { getDuration } from "./helpers"
import stops from "../data/stops"
const Input = lazy(() => import("./Input"))
const Select = lazy(() => import("./Select"))
const Button = lazy(() => import("./Button"))
const Filter = lazy(() => import("./Filter"))
const StopBody = lazy(() => import("./StopBody"))
/* eslint-disable react-hooks/exhaustive-deps */

type Remarks = {
  code: string | undefined,
  summary: string | null | undefined,
  text: string,
  type: string,
  validFrom: string | undefined,
  validUntil: string | undefined
}[]

type Dataset = {
  cancelled: boolean | undefined,
  delay: number | null,
  direction: string | null,
  formerScheduledWhen?: string,
  line: {
    express: boolean,
    metro: boolean,
    mode: string,
    name: string,
    night: boolean,
    product: string,
    type: string
  },
  plannedPlatform?: string,
  plannedWhen?: string,
  platform?: number | string,
  prognosedPlatform?: string,
  prognosisType: string | null | undefined,
  provenance: string | null,
  remarks: Remarks,
  scheduledWhen?: string,
  stop: {
    id: string,
    name: string,
  },
  tripId: string,
  when?: string
}

type Stop = {
  id: string,
  name: string,
  type?: string
}

type Data = Dataset[]

export default function TimetableArr() {
  const [selection, setSelection] = useDebugState<Stop[]>("selection",stops)
  const [stop, setStop] = useDebugState<Stop>("stop",{ id: "", name: "", type: ""})
  const [data, setData] = useDebugState<Data>("data",[])
  const [viewData, setViewData] = useDebugState<Data>("viewData",[])
  const [error, setError] = useDebugState<any>("error",null)
  const params = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    if (params.hasOwnProperty("id") && typeof params.id === "string" && params.id.length > 0) {
      const selectedStop = stops.filter(stop => stop.id === params.id)[0]
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
  const inputField = useRef<HTMLInputElement>(null)
  const filterField = useRef<HTMLInputElement>(null)
  const filterSelector = useRef<HTMLSelectElement>(null)
  const filterData = () => {
    const fieldCurrent = filterField.current as HTMLInputElement
    const { value: fieldValue } = fieldCurrent
    const filterValues = fieldValue.split(" ")
    const selectorCurrent = filterSelector.current as HTMLSelectElement
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
  const filterOr = (filterValues: string[]) => {
    const filteredData = data.filter((arrival) => {
      let decider = false
      if ( arrival.hasOwnProperty("provenance") && arrival.provenance) {
        for (let i = 0; i < filterValues.length; i++) {
          if (
            arrival.line.name
              .toLowerCase()
              .includes(filterValues[i].toLowerCase()) ||
            arrival.provenance
            .toLowerCase()
            .includes(filterValues[i].toLowerCase())
          ) {
            decider = true
            break
          }
        }
      }
      return decider
    })
    setViewData(filteredData)
  }
  const filterAnd = (filterValues: string[]) => {
    const filteredData = data.filter((arrival) => {
      let decider = true
      if (arrival.hasOwnProperty("provenance") && arrival.provenance) {
        for (let i = 0; i < filterValues.length; i++) {
          if (
            arrival.line.name
              .toLowerCase()
              .includes(filterValues[i].toLowerCase()) ||
            arrival.provenance
              .toLowerCase()
              .includes(filterValues[i].toLowerCase())
          ) {
            continue
          } else {
            decider = false
            break
          }
        }
      }
      return decider
    })
    setViewData(filteredData)
  }
  const noFilters = () => {
    setViewData(data)
  }
  const filterStops = (filterValue: string) => {
    const remainingStops = stops.filter(
      (currStop) =>
        currStop.id !== stop.id &&
        currStop.name.toLowerCase().includes(filterValue.toLowerCase())
    )
    const newSelection = [stop, ...remainingStops]
    setSelection(newSelection)
  }
  const doFilter = (event: { key: string, target: { value: string }}) => {
    // if (event.key === "Enter") {
    const filterValue = event.target.value
    filterStops(filterValue)
    // }
  }
  const setCurrStop = (currStop: Stop) => {
    setStop(currStop)
  }
  const getData = async (id: string) => {
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
  const handleChange = (currentStop: Stop) => {
    setCurrStop(currentStop)
    const { id: myStopId } = currentStop
    getData(myStopId)
    const inputCurrent = inputField.current as HTMLInputElement
    inputCurrent.value = ""
    const filterFieldCurrent = filterField.current as HTMLInputElement
    filterFieldCurrent.value = ""
    const filterSelectorCurrent = filterSelector.current as HTMLSelectElement
    filterSelectorCurrent.value = "OR"
  }
  const handleSubmit = () => {
    getData(stop.id)
    const inputCurrent = inputField.current as HTMLInputElement
    inputCurrent.value = ""
    const filterFieldCurrent = filterField.current as HTMLInputElement
    filterFieldCurrent.value = ""
    const filterSelectorCurrent = filterSelector.current as HTMLSelectElement
    filterSelectorCurrent.value = "OR"
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
