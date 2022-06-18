/** @jsxImportSource theme-ui */
import { Fragment, LegacyRef } from "react"
import getLocale from "./getLocale"

interface Props {
  filterStops: any
  inputField: LegacyRef<HTMLInputElement>
}

export default function Input(props: Props) {
  const { filterStops, inputField } = props
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
