// @flow
import React from "react"
import type { Node } from "react"
import { createStyles, makeStyles, Typography } from "@material-ui/core"

type Props = {
  title: string,
  text: string[],
  className: string,
}

const useStyles = makeStyles((theme) =>
  createStyles({
    explainParagraph: {
      lineHeight: 1.5,
    },
    explainBoxEmptyParagraph: {
      marginBottom: theme.spacing(0),
    },
    explainBoxTitle: {
      marginBottom: theme.spacing(4),
    },
  })
)

export default function ExplainBox({ title, text, className }: Props): Node {
  const classes = useStyles()
  return (
    <div className={classes.explainBox}>
      <Typography
        variant="h2"
        className={classes.explainBoxTitle}
        align="center"
      >
        {title}
      </Typography>
      {text.map((paragraph, idx) => (
        <Typography
          color="textSecondary"
          align="center"
          key={idx}
          className={
            paragraph === ""
              ? classes.explainBoxEmptyParagraph
              : classes.explainParagraph
          }
        >
          {paragraph}
        </Typography>
      ))}
    </div>
  )
}
