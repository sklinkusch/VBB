/** @jsxImportSource theme-ui */
import React from "react"

type Props = {
  element: string,
  stop: {
    id: string,
    name: string,
  },
  date?: string
}

function StopName(props: Props) {
  const { element, stop, date } = props
  return (
    <React.Fragment>
      {element === 'h2' ? (<h2>{stop.name}</h2>) : (<h3>{stop.name}</h3>)}
      {element === 'h2' && (<div sx={{ fontWeight: "bold", my: "8px" }}>{date}</div>)}
    </React.Fragment>
  )
}

export default StopName