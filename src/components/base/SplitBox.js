// @flow
import React from "react"
import type { Node } from "react"
import { Grid, useMediaQuery, useTheme } from "@material-ui/core"

type Props = {
  contentLeft: Node,
  contentRight: Node,
  reverseColumns?: boolean,
}

export default function SplitBox({
  contentLeft,
  contentRight,
  reverseColumns,
}: Props): Node {
  const theme = useTheme()
  const useColumns = useMediaQuery(theme.breakpoints.down("md"))
  const columnDirection = reverseColumns ? "column-reverse" : "row"
  return (
    <Grid container direction={useColumns ? columnDirection : "row"}>
      <Grid item xs={12} lg={6}>
        {contentLeft}
      </Grid>
      <Grid item xs={12} lg={6}>
        {contentRight}
      </Grid>
    </Grid>
  )
}
