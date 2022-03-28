import React, { lazy } from "react"
const LegendDep = lazy(() => import("../components/LegendDep"))
const Timetable = lazy(() => import("../components/Timetable"))

function App() {
  return (
    <div>
      <LegendDep />
      <Timetable />
    </div>
  )
}

export default App
