/** @jsxImportSource theme-ui */
import React, { ChangeEventHandler } from "react"
import getLocale from "./getLocale"

type Props = {
  mode: string,
  filterField: React.Ref<HTMLInputElement>,
  filterSelector: React.Ref<HTMLSelectElement>
  filterData: ChangeEventHandler
}

export default function Filter(props: Props) {
  const { filterField, filterSelector, filterData, mode = "dep" } = props
  return (
    <div>
      <input
        type="text"
        placeholder={mode === "dep" ? getLocale("filterDepartures") : getLocale("filterArrivals")}
        ref={filterField}
        onChange={(event) => props.filterData(event)}
        sx={{ padding: "5px", opacity: 1, backgroundColor: "#fff", width: "300px", maxWidth: "90%" }}
      />
      <select ref={filterSelector} onChange={filterData} sx={{ padding: "5px", backgroundColor: "#ccc", opacity: 1, width: "400px", maxWidth: "90%", mx: "10px" }}>
        <option value="OR">{getLocale("filterOr")}</option>
        <option value="AND">{getLocale("filterAnd")}</option>
      </select>
    </div>
  )
}
