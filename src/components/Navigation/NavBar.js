// @flow
import React from "react"
import type { Node } from "react"
import {
  createStyles,
  Divider,
  Grid,
  Hidden,
  makeStyles,
  useTheme,
} from "@material-ui/core"

import LogoPositive from "../../assets/logo-positive-horizontal.svg"
import LogoNegative from "../../assets/logo-inverted-horizontal.svg"
import MonkeyPositive from "../../assets/monkey-positive.svg"
import MonkeyNegative from "../../assets/monkey-negative.svg"

import useSiteTranslations from "i18n/useSiteTranslations"
// import DrawerMenu from "./DrawerMenu"
import { StyledLink } from "./StyledLink"
// import { routes } from "./routes"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      textTransform: "uppercase",
      [theme.breakpoints.down("lg")]: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(5),
      },
      [theme.breakpoints.up("xl")]: {
        paddingRight: theme.spacing(7),
        paddingLeft: theme.spacing(7),
      },
      marginTop: theme.spacing(6),
    },
    languageSwitchSeparator: {
      backgroundColor: theme.palette.text.primary,
      marginRight: theme.spacing(1),
    },
    navItems: {
      "& a": {
        marginRight: theme.spacing(4),
      },
      textAlign: "end",
    },
    logo: {
      [theme.breakpoints.up("md")]: {
        height: 34,
      },
    },
  })
)

export default function NavBar(): Node {
  const t = useSiteTranslations()
  const theme = useTheme()
  const classes = useStyles()
  const alternateLanguage = t("Alternate language")

  // const linkConfigs = [
  //   { to: routes.start, text: t("Start now!") },
  //   { to: routes.studio, text: t("The studio") },
  //   { to: routes.appointments, text: t("Your Appointments") },
  //   { to: routes.training, text: t("Your Training") },
  // ]

  return (
    <Grid container className={classes.root} alignItems="center">
      <Grid item xs={1} lg={5}>
        <Hidden lgUp>
          <img
            src={
              theme.palette.type === "dark" ? MonkeyNegative : MonkeyPositive
            }
            alt="Ready Set Move Logo"
            className={classes.logo}
          />
        </Hidden>
        <Hidden mdDown>
          <img
            src={theme.palette.type === "dark" ? LogoNegative : LogoPositive}
            alt="Ready Set Move Logo"
            className={classes.logo}
          />
        </Hidden>
      </Grid>
      <Grid container item xs={11} lg={7} justifyContent="flex-end">
        {/* <Hidden mdUp>
          <DrawerMenu
            linkConfigs={linkConfigs}
            alternateLanguage={alternateLanguage}
          />
        </Hidden> */}
        {/* <Hidden smDown> */}
        {/* <Grid
            container
            item
            xs={11}
            className={classes.navItems}
            alignContent="center"
          >
            <Grid item xs={12}>
              {linkConfigs.map(({ to, text }) => (
                <StyledLink to={to} text={text} key={to} />
              ))}
            </Grid>
          </Grid> */}
        <Grid
          container
          item
          xs={1}
          alignContent="center"
          justifyContent="flex-end"
        >
          <Divider
            orientation="vertical"
            className={classes.languageSwitchSeparator}
          />
          <Grid item xs={2}>
            <StyledLink
              to={alternateLanguage}
              text={alternateLanguage}
              directLink
            />
          </Grid>
        </Grid>
        {/* </Hidden> */}
      </Grid>
    </Grid>
  )
}
