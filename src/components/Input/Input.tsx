/** @jsxImportSource theme-ui */
import { Fragment } from "react"
import getLocale from "../Locales/getLocale"

type Props = {
  filterStops: Function,
  inputField: React.Ref<HTMLInputElement>
}

export default function Input({ filterStops, inputField }: Props) {
  return (
    <Fragment>
      <input
        type="text"
        onChange={(event) => filterStops(event)}
        ref={inputField}
        placeholder={getLocale("filterStops")}
        sx={{ padding: "5px", opacity: 1, backgroundColor: "#fff", width: "300px", maxWidth: "90%" }}
      />
    </Fragment>
  )
}
