import React from "react"
import getLocale from "./getLocale"

export default function Input({ filterStops, inputField }) {
  return (
    <React.Fragment>
      <input
        type="text"
        onInput={(event) => filterStops(event)}
        ref={inputField}
        placeholder={getLocale("filterPlaceholder")}
      />
    </React.Fragment>
  )
}
