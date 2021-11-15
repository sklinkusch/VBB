import React from "react"
import getLocale from "./getLocale"

export default function Filter(props) {
  const { filterField, filterSelector, filterData } = props
  return (
    <div>
      <input
        type="text"
        placeholder={getLocale("filterDepartures")}
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
