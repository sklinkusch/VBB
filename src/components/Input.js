import React from "react"

export default function Input({ filterStops, inputField }) {
  return (
    <React.Fragment>
      <input
        type="text"
        onInput={(event) => filterStops(event)}
        ref={inputField}
        placeholder="Insert stop, press enter, then choose"
      />
    </React.Fragment>
  )
}
