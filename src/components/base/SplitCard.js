// @flow
import React from "react"
import type { Node } from "react"
import { createStyles, makeStyles, Paper } from "@material-ui/core"
import SplitBox from "./SplitBox"

type Props = {
  contentLeft: Node,
  contentRight: Node,
}

const useStyles = makeStyles((theme) =>
  createStyles({
    splitCard: {
      backgroundColor: theme.palette.primary.main,
      overflow: "hidden",
    },
  })
)

export default function SplitCard({ contentLeft, contentRight }: Props): Node {
  const classes = useStyles()
  return (
    <Paper elevation={5} className={classes.splitCard}>
      <SplitBox
        contentLeft={contentLeft}
        contentRight={contentRight}
        reverseColumns
      />
    </Paper>
  )
}
