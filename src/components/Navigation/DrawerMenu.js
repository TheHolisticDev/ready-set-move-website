// @flow
import React from "react"
import type { Node } from "react"
import {
  Divider,
  Drawer,
  List,
  makeStyles,
  ThemeProvider,
  createStyles,
  ListItem,
} from "@material-ui/core"
import useToggle from "@formoe/use-toggle"

import MenuIcon from "@material-ui/icons/Menu"

import { light } from "theme"
import { StyledLink } from "./StyledLink"
import type { LinkConfig } from "./StyledLink"

const useStyles = makeStyles((theme) =>
  createStyles({
    linkList: {
      marginTop: theme.spacing(3),
    },
    languageSwitch: {
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(3),
    },
  })
)

type DrawerMenuProps = {|
  linkConfigs: LinkConfig[],
  alternateLanguage: string,
|}

const ListItemLink = ({ children, ...other }: { children: Node }): Node => (
  <ListItem {...other}>{children}</ListItem>
)

export default function DrawerMenu({
  linkConfigs,
  alternateLanguage,
}: DrawerMenuProps): Node {
  const classes = useStyles()
  const [open, toggleOpen] = useToggle()

  return (
    <>
      <MenuIcon onClick={toggleOpen} />
      <ThemeProvider theme={light}>
        <Drawer anchor="right" open={open} onClose={() => toggleOpen(false)}>
          <List className={classes.linkList}>
            {linkConfigs.map(({ to, text }) => (
              <ListItemLink onClick={() => toggleOpen(false)} key={to}>
                <StyledLink to={to} text={text} />
              </ListItemLink>
            ))}
          </List>
          <Divider />
          {/* <ListItemLink onClick={() => toggleOpen(false)}> */}
          <StyledLink
            to={alternateLanguage}
            text={alternateLanguage}
            className={classes.languageSwitch}
            onClick={() => toggleOpen(false)}
          />
        </Drawer>
      </ThemeProvider>
    </>
  )
}
