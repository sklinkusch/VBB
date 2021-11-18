import React, { Suspense, lazy } from "react"
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import "../styles/App.scss"
import Header from "./Header"
import Footer from "./Footer"
const VBBDepartures = lazy(() => import("../pages/VBBDepartures"))
const VBBArrivals = lazy(() => import("../pages/VBBArrivals"))

function App() {
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <div className="App container">
        <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/arrivals">
                <VBBArrivals />
              </Route>
              <Route path="/departures">
                <VBBDepartures />
              </Route>
              <Route path="/" exact>
                <Redirect to="/departures" />
              </Route>
              <Route path="*">
                <Redirect to="/departures" />
              </Route>
            </Switch>
          </Suspense>
        <Footer />
      </div>
    </Router>
  )
}

export default App
