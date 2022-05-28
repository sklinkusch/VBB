import React from "react"
import LegendDep from "../components/LegendDep"
import Timetable from "../components/Timetable"
// const LegendDep = lazy(() => import("../components/LegendDep"))
// const Timetable = lazy(() => import("../components/Timetable"))

function App() {
  return (
    <div>
      <LegendDep />
      <Timetable />
    </div>
  )
}

export default App
