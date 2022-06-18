import React from "react"

export default function StopName({ element, stop: { name }}: { element: string, stop: { name: string } }) {
  return element === "h2" ? <h2>{name}</h2> : <h3>{name}</h3>
}
