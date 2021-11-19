// @flow
import React from "react"
import type { Node } from "react"
import { useSiteData } from "react-static"
import {
  Box,
  createStyles,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"

import useSiteTranslations from "i18n/useSiteTranslations"
import LinkBox from "components/base/LinkBox"
import LogoDark from "../assets/logo-positive-horizontal.svg"
import { routes } from "./Navigation/routes"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: { marginTop: theme.spacing(8) },
    divider: {
      marginBottom: theme.spacing(5),
    },
    logo: {
      marginBottom: theme.spacing(6),
      "& img": {
        height: 32,
      },
    },
    info: {
      "& p": {
        lineHeight: 1.1,
        marginBottom: theme.spacing(1),
        fontWeight: "bold",
        letterSpacing: 0.4,
      },
    },
    companyInfo: {
      marginTop: theme.spacing(4),
    },
    footerItem: {
      marginTop: theme.spacing(7),
    },
  })
)

export default function Footer(): Node {
  const classes = useStyles()
  const t = useSiteTranslations()
  const { mail, phone, street, city, companyName } = useSiteData()

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.divider}>
        <Divider />
      </Grid>
      {/* <Grid
        item
        xs={12}
        lg={6}
        className={`${classes.info} ${classes.footerItem}`}
      > */}
      <Grid
        item
        xs={12}
        md={6}
        className={`${classes.info} ${classes.footerItem}`}
      >
        <Box className={classes.logo}>
          <img src={LogoDark} alt="Ready Set Move Logo" />
        </Box>
        <Typography>{mail}</Typography>
        <Typography>{phone}</Typography>
        <Typography>
          {street}, {city}
        </Typography>
        <Typography
          component="div"
          color="textSecondary"
          className={classes.companyInfo}
        >
          {companyName}
        </Typography>
      </Grid>
      {/* <Grid item xs={12} md={4} lg={2} className={classes.footerItem}>
        <LinkBox
          title={t("Training")}
          links={[
            { to: routes.start, text: t("Start now!") },
            { to: routes.studio, text: t("The studio") },
            { to: routes.appointments, text: t("Your Appointments") },
            { to: routes.training, text: t("Your Training") },
          ]}
        />
      </Grid> */}
      {/* <Grid item xs={12} md={4} lg={2} className={classes.footerItem}> */}
      <Grid item xs={12} md={3} className={classes.footerItem}>
        <LinkBox
          title={t("Social Media")}
          links={[
            {
              to: "https://www.instagram.com/robertpazurek/",
              text: "Instagram",
              absolute: true,
            },
            {
              to: "https://www.linkedin.com/in/robert-pazurek/",
              text: "LinkedIn",
              absolute: true,
            },
          ]}
        />
      </Grid>
      {/* <Grid item xs={12} md={4} lg={2} className={classes.footerItem}> */}
      <Grid item xs={12} md={3} className={classes.footerItem}>
        <LinkBox
          title={t("Legal")}
          links={[
            { to: routes.agb, text: t("TOS") },
            { to: routes.imprint, text: t("Imprint") },
            { to: routes.privacy, text: t("Privacy") },
          ]}
        />
      </Grid>
    </Grid>
  )
}
