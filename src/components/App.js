import React, { Suspense, lazy } from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import "../styles/App.scss"
import Header from "./Header"
import Footer from "./Footer"
const VBBDepartures = lazy(() => import("../pages/VBBDepartures"))

function App() {
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <div className="App container">
        <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/">
                <VBBDepartures />
              </Route>
            </Switch>
          </Suspense>
        <Footer />
      </div>
    </Router>
  )
}

export default App
