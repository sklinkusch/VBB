import React from "react"

export default function Select(props) {
  const { handleChange, selection, stop } = props
  return (
    <React.Fragment>
      <select
        value={stop.id}
        onChange={(event) => {
          const id = event.target.value
          const stop = props.selection.filter((stop) => stop.id === id)[0]
          return handleChange(stop)
        }}
      >
        {selection &&
          selection.length >= 1 &&
          selection.map((stop) => (
            <option key={stop.id} value={stop.id}>
              {stop.name}
            </option>
          ))}
      </select>
    </React.Fragment>
  )
}
