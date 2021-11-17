import React from "react"
import getLocale from "./getLocale"

export default function Filter(props) {
  const { filterField, filterSelector, filterData, mode = "dep" } = props
  return (
    <div>
      <input
        type="text"
        placeholder={mode === "dep" ? getLocale("filterDepartures") : getLocale("filterArrivals")}
        ref={filterField}
        onInput={(event) => props.filterData(event)}
      />
      <select ref={filterSelector} onChange={filterData}>
        <option value="OR">{getLocale("filterOr")}</option>
        <option value="AND">{getLocale("filterAnd")}</option>
      </select>
    </div>
  )
}
