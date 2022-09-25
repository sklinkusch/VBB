/** @jsxImportSource theme-ui */
import React from "react"

type Location = {
  id: string,
  latitude: number,
  longitude: number,
  type: string
}

type Props = {
  element: string,
  stop: {
    id: string,
    location: Location,
    name: string,
    products: {
      bus: boolean,
      express: boolean,
      ferry: boolean,
      regional: boolean,
      suburban: boolean,
      subway: boolean,
      tram: boolean
    }
  }
}

function StopName(props: Props) {
  const { element, stop } = props
  return element === "h2" ? <h2>{stop.name}</h2> : <h3>{stop.name}</h3>
}

export default StopName