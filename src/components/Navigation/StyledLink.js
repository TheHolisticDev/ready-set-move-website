// @flow
import React from "react"
import type { Node } from "react"
import { createStyles, makeStyles } from "@material-ui/core"

import { Link } from "components/Router"

const useStyles = makeStyles((theme) =>
  createStyles({
    styledLink: {
      textTransform: "uppercase",
      fontSize: 14,
      fontWeight: "bold",
      width: "100%",
    },
  })
)

export type LinkConfig = {
  to: string,
  text: string,
  directLink?: boolean,
  className?: string,
}

export const StyledLink = ({
  to,
  text,
  directLink,
  className,
  ...other
}: LinkConfig): Node => {
  const classes = useStyles()

  if (directLink) {
    return (
      <a
        className={
          className ? `${classes.styledLink} ${className}` : classes.styledLink
        }
        href={to}
      >
        {to}
      </a>
    )
  }

  return (
    <Link
      {...other}
      to={to}
      className={
        className ? `${classes.styledLink} ${className}` : classes.styledLink
      }
    >
      {text}
    </Link>
  )
}
