import React from "react"
import "../styles/App.scss"
import Timetable from "../components/Timetable"
import LegendDep from "../components/LegendDep"

function App() {
  return (
    <div>
      <LegendDep />
      <Timetable />
    </div>
  )
}

export default App
