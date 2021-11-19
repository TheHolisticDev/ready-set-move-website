import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import "@fontsource/source-sans-pro/900.css"
import "@fontsource/source-sans-pro/700.css"
import "@fontsource/source-sans-pro/400.css"
import "@fontsource/source-sans-pro/300.css"
import "@fontsource/eczar/800.css"
import "@fontsource/aileron/400-italic.css"
import "@fontsource/aileron/700.css"

// Your top level component
import App from "./App"

// Export your top level component as JSX (for static rendering)
export default App

// Render your app
if (typeof document !== "undefined") {
  const target = document.getElementById("root")

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render

  const render = (Comp) => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      target
    )
  }

  // Render!
  render(App)

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept("./App", () => {
      render(App)
    })
  }
}
