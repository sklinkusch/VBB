import React, { useRef, useContext } from "react"
import "../styles/Timetable.scss"
import AppContext from "../context/AppContext"
import Input from "./Input"
import Select from "./Select"
import Button from "./Button"
import StopBody from "./StopBody"
import Filter from "./Filter"

export default function Timetable(props) {
  const inputField = useRef(null)
  const filterField = useRef(null)
  const filterSelector = useRef(null)
  const stopContext = useContext(AppContext)
  const {
    filterOr,
    filterAnd,
    noFilters,
    filterStops,
    setStop,
    getData,
  } = stopContext
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
  const doFilter = (event) => {
    if (event.key === "Enter") {
      const filterValue = event.target.value
      filterStops(filterValue)
    }
  }
  const handleChange = (e) => {
    const myStopId = e.target.value
    setStop(myStopId)
    getData(myStopId)
    inputField.current.value = ""
    filterField.current.value = ""
    filterSelector.current.value = "OR"
  }
  const handleSubmit = () => {
    getData(stopContext.stop.id)
    inputField.current.value = ""
    filterField.current.value = ""
    filterSelector.current.value = "OR"
  }
  // useEffect(() => {
  //   getData(stop);
  // }, []);
  return (
    <AppContext.Consumer>
      {(context) => (
        <div className="timetable">
          <Input filterStops={doFilter} inputField={inputField} />
          <Select handleChange={handleChange} selection={context.selection} />
          <Button handleSubmit={handleSubmit} />
          <Filter
            filterField={filterField}
            filterSelector={filterSelector}
            filterData={filterData}
          />
          <StopBody />
        </div>
      )}
    </AppContext.Consumer>
  )
}
