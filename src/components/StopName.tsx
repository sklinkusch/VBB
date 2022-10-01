/** @jsxImportSource theme-ui */
import React from "react"

type Props = {
  element: string,
  stop: {
    id: string,
    name: string,
  }
}

function StopName(props: Props) {
  const { element, stop } = props
  return element === "h2" ? <h2>{stop.name}</h2> : <h3>{stop.name}</h3>
}

export default StopName