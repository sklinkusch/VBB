import React, { lazy } from "react"
const LegendArr = lazy(() => import("../components/LegendArr")) 
const TimetableArr = lazy(() => import("../components/TimetableArr")) 

function App() {
  return (
    <div>
      <LegendArr />
      <TimetableArr />
    </div>
  )
}

export default App
