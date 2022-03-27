import React from "react"
import ReactDOM from "react-dom"
import "./styles/index.css"
import App from "./components/App"
import reportWebVitals from "./reportWebVitals"
import "@fortawesome/fontawesome-free/js/all.min.js"
import { ThemeProvider } from "theme-ui"
import theme from "./styles/theme"

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals()
