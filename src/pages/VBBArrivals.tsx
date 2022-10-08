import React, { lazy } from "react"
const LegendArr = lazy(() => import("../components/LegendArr/LegendArr")) 
const TimetableArr = lazy(() => import("../components/TimetableArr/TimetableArr")) 

function VBBArrivals() {
  return (
    <div>
      <LegendArr />
      <TimetableArr />
    </div>
  )
}

export default VBBArrivals
