// @flow
import React from "react"
import type { Node } from "react"
import { Box, createStyles, makeStyles, Typography } from "@material-ui/core"

import { Link } from "components/Router"

type LinkMeta = {|
  to: string,
  absolute?: boolean,
  text: string,
|}

type Props = {
  title: string,
  links: LinkMeta[],
}

const useStyles = makeStyles((theme) =>
  createStyles({
    linkBox: {
      marginRight: theme.spacing(5),
      width: 160,
    },
    title: {
      marginBottom: theme.spacing(4),
    },
    linkBlock: {
      marginBottom: theme.spacing(1),
    },
  })
)

export default function LinkBox({ title, links }: Props): Node {
  const classes = useStyles()

  return (
    <Box textAlign="left" flexDirection="column" className={classes.linkBox}>
      <Box>
        <Typography variant="h3" component="h2" className={classes.title}>
          {title}
        </Typography>
      </Box>
      {links.map((link) => (
        <Box key={link.text} className={classes.linkBlock}>
          {link.absolute ? (
            <a
              href={link.to}
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <Typography color="textSecondary">{link.text}</Typography>
            </a>
          ) : (
            <Link to={link.to} className={classes.link}>
              <Typography color="textSecondary">{link.text}</Typography>
            </Link>
          )}
        </Box>
      ))}
    </Box>
  )
}
