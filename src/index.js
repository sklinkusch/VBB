import React from "react"
import { createRoot } from "react-dom/client"
import "./styles/index.css"
import App from "./components/App"
import reportWebVitals from "./reportWebVitals"
import "@fortawesome/fontawesome-free/js/all.min.js"
import { ThemeProvider } from "theme-ui"
import theme from "./styles/theme"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<ThemeProvider theme={theme}><App /></ThemeProvider>)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals()
