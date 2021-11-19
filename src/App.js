import React from "react"
import { Root, Routes, useBasepath } from "react-static"
import { HelmetProvider } from "react-helmet-async"
import { CssBaseline, ThemeProvider } from "@material-ui/core"
import LogoPositive from "./assets/logo-positive-horizontal.svg"

import { Router } from "components/Router"
import { light } from "theme"

// Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(["AGB"])

function App() {
  const basePath = useBasepath()
  return (
    <Root>
      <ThemeProvider theme={light}>
        <React.Suspense
          fallback={
            <img
              src={LogoPositive}
              alt="Ready Set Move Logo – Loading..."
              style={{
                width: "100%",
                padding: "32px",
              }}
            />
          }
        >
          <CssBaseline />
          <HelmetProvider>
            <Router basepath={basePath}>
              <Routes path="*" />
            </Router>
          </HelmetProvider>
        </React.Suspense>
      </ThemeProvider>
    </Root>
  )
}

export default App
