import React from "react"

export default function Input({ filterStops, inputField }) {
  return (
    <React.Fragment>
      <input
        type="text"
        onInput={(event) => filterStops(event)}
        ref={inputField}
        placeholder="Insert string to filter stops"
      />
    </React.Fragment>
  )
}
