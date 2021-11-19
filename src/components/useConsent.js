// @flow
import React, { createContext, useContext, useEffect, useState } from "react"
import type { Node } from "react"
import {
  AppBar,
  Box,
  Button,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Slide,
  Typography,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

import { Link } from "components/Router"
import { getItem, persistItem, removeAllItems } from "./local-storage-service"
import type { Consent } from "./local-storage-service"
import useSiteTranslations from "i18n/useSiteTranslations"
import { routes } from "./Navigation/routes"

type Interface = {
  consent: Consent,
  setConsent: (consent: Consent) => void,
}

const ConsentContext = createContext<Interface | void>()
type ProviderProps = {|
  children: Node,
|}

export const ConsentProvider = ({ children }: ProviderProps): Node => {
  const [consent, setConsent] = useState<Consent>(() => {
    const storedConsent = getItem("consent")
    return storedConsent !== "full" && storedConsent !== "functional"
      ? "none"
      : storedConsent
  })

  return (
    <ConsentContext.Provider value={{ consent, setConsent }}>
      {children}
    </ConsentContext.Provider>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    consentBar: {
      top: "auto",
      bottom: 0,
      backgroundColor: theme.palette.action.active,
      opacity: 0.95,
    },
    consentBarText: {
      paddingBottom: theme.spacing(4),
      paddingTop: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(6),
    },
    consentBarCloseButton: {
      position: "absolute",
      top: 0,
      right: 0,
    },
    consentBarActionButtons: {
      marginBottom: theme.spacing(2),
    },
    consentBarActionButtonsButton: {
      marginRight: theme.spacing(3),
      [theme.breakpoints.only("xs")]: {
        marginLeft: theme.spacing(3),
      },
    },
    consentBarActionButtonsAccept: {
      color: theme.palette.action.active,
      [theme.breakpoints.only("xs")]: {
        marginBottom: theme.spacing(1),
      },
    },
  })
)

export const ConsentBar = (): Node => {
  const { consent, setConsent } = useConsent()
  const classes = useStyles()
  const t = useSiteTranslations()
  const [showConsentMessage, setShowConsentMessage] = useState<boolean>(false)
  useEffect(() => {
    if (consent === "none") {
      setTimeout(() => {
        setShowConsentMessage(true)
      }, 400)
      removeAllItems()
    }
  }, [consent])

  useEffect(() => {
    if (consent !== "none") {
      setShowConsentMessage(false)
    }
    persistItem("consent", consent, consent)
  }, [consent])

  return (
    <Slide direction="up" in={showConsentMessage} exit={true}>
      <AppBar position="fixed" color="default" className={classes.consentBar}>
        <Box className={classes.consentBarText}>
          <Typography color="primary" variant="h2">
            {t("Consent for data usage")}
          </Typography>
          <Typography color="primary">{t("Consent message")}</Typography>
          <Typography color="primary">{t("Consent message P2")}</Typography>
          <Typography color="primary">{t("Consent message P3")}</Typography>
          <Typography color="primary">
            {t("Consent message P4")}
            <Link to={routes.privacy}>{t("Privacy")}</Link>
          </Typography>
        </Box>
        <IconButton
          className={classes.consentBarCloseButton}
          onClick={() => setShowConsentMessage(false)}
          aria-label="close"
          color="primary"
        >
          <CloseIcon />
        </IconButton>
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          className={classes.consentBarActionButtons}
        >
          <Grid
            item
            xs={12}
            sm={5}
            md={3}
            className={classes.consentBarActionButtonsButton}
          >
            <Button
              variant="contained"
              disableElevation
              onClick={() => setConsent("full")}
              color="secondary"
              fullWidth
              className={classes.consentBarActionButtonsAccept}
            >
              {t("Accept all")}
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            md={3}
            className={classes.consentBarActionButtonsButton}
          >
            <Button
              variant="outlined"
              onClick={() => setConsent("functional")}
              color="primary"
              fullWidth
            >
              {t("Accept necessary")}
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </Slide>
  )
}

export const useConsent = (): Interface => {
  const i = useContext(ConsentContext)
  if (!i)
    throw Error(
      "Consent context not set, did you forget to wrap the component in a APIPathProvider?"
    )

  return i
}
