/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import getLocale from "./getLocale"

export default function Input({ filterStops, inputField }) {
  return (
    <Fragment>
      <input
        type="text"
        onInput={(event) => filterStops(event)}
        ref={inputField}
        placeholder={getLocale("filterStops")}
        sx={{ padding: "5px", opacity: 1, backgroundColor: "#fff", width: "300px", maxWidth: "90%" }}
      />
    </Fragment>
  )
}
