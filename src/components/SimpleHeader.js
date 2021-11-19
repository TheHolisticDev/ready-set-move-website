// @flow
import React from "react"
import type { Node } from "react"
import { Grid } from "@material-ui/core"

import NavBar from "./Navigation/NavBar"

export default function SimpleHeader(): Node {
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
    </Grid>
  )
}
