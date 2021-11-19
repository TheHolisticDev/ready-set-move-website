// @flow
import React from "react"
import type { Node } from "react"
import { Box, createStyles, makeStyles, Typography } from "@material-ui/core"

type Props = {
  title: string,
  children: Node,
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& h3": {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(3),
      },
      "& h4": {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
      },
      marginBottom: theme.spacing(7),
    },
    title: {
      marginBottom: theme.spacing(5),
    },
  })
)

export default function DocumentParagraph({ title, children }: Props): Node {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>
      {children}
    </Box>
  )
}
