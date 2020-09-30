import React from "react"
import ReactDOM from "react-dom"
import AppProvider from "./context/AppProvider"
import App from "./components/App"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./styles/index.scss"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
