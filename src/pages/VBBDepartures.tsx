import React from "react"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LegendDep from "../components/LegendDep/LegendDep"
import Timetable from "../components/Timetable/Timetable"
// const LegendDep = lazy(() => import("../components/LegendDep"))
// const Timetable = lazy(() => import("../components/Timetable"))

function VBBDepartures() {
  // let pathProps
  // switch(process.env.NODE_ENV) {
  //   case "development":
  //     pathProps = { basename: process.env.PUBLIC_URL }
  //     //  pathProps = {}
  //     break
  //   case "production":
  //     pathProps = { basename: process.env.PUBLIC_URL }
  //     // pathProps = {}
  //     break
  //   default:
  //     pathProps = { basename: process.env.PUBLIC_URL }
  //     // pathProps = {}
  // }
  return (
    <div>
      <LegendDep />
      {/* <Router { ...pathProps }>
        <Routes>
          <Route path="/:stopId" element={<Timetable />} />
          <Route path="" element={< Timetable />} />
          <Route path="*" element={< Timetable />} />
        </Routes>
      </Router> */}
      <Timetable />
    </div>
  )
}

export default VBBDepartures
