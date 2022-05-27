/** @jsxImportSource theme-ui */
import { Fragment } from "react"

export default function Select(props) {
  const { handleChange, selection, stop } = props
  return (
    <Fragment>
      <select
        value={stop.id}
        sx={{ padding: "5px", backgroundColor: "#ccc", opacity: 1, width: "400px", maxWidth: "90%", mx: "10px" }}
        onChange={(event) => {
          const id = event.target.value
          const stop = selection.filter((stop) => stop.id === id)[0]
          return handleChange(stop)
        }}
      >
        {selection &&
          selection.length >= 1 &&
          selection.map((stop, index) => (
            <option key={`${stop.id}-${index}`} value={stop.id}>
              {stop.name}
            </option>
          ))}
      </select>
    </Fragment>
  )
}
