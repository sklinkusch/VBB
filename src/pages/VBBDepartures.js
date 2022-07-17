import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LegendDep from "../components/LegendDep"
import Timetable from "../components/Timetable"
// const LegendDep = lazy(() => import("../components/LegendDep"))
// const Timetable = lazy(() => import("../components/Timetable"))

function App() {
  return (
    <div>
      <LegendDep />
      <Router basename={`${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route path="/:stopId" element={<Timetable />} />
          <Route path="/" element={< Timetable />} />
          <Route path="*" element={< Timetable />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
