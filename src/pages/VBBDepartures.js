import React from "react"
import "../styles/App.scss"
import Timetable from "../components/Timetable"
import Legend from "../components/Legend"

function App() {
  return (
    <div>
      <Legend />
      <Timetable />
    </div>
  )
}

export default App
