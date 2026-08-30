import React from "react"
import { createRoot } from "react-dom/client"
import App from "./components/App/App"
import "@fortawesome/fontawesome-free/js/all.min.js"
import { ThemeProvider } from "theme-ui"
import theme from "./styles/theme"

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
