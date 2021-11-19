// @flow
import React, { createContext, useContext, useEffect, useState } from "react"
import type { Node } from "react"

import MonkeyPositive from "assets/monkey-positive.svg"
import { createStyles, makeStyles, Zoom } from "@material-ui/core"
import { SpeedDial, SpeedDialAction } from "@material-ui/lab"
import MailIcon from "@material-ui/icons/Mail"
import PhoneIcon from "@material-ui/icons/Phone"
import { useMailToLink } from "./useMailToLink"
import { useSiteData } from "react-static"
import useSiteTranslations from "i18n/useSiteTranslations"

const useStyles = makeStyles((theme) =>
  createStyles({
    monkeyFab: {
      position: "fixed",
      bottom: theme.spacing(5),
      right: theme.spacing(5),
      zIndex: theme.zIndex.speedDial,
    },
    monkeyFabIcon: {
      width: 36,
    },
    monkeyFabMainButton: {
      width: 82,
      height: 82,
      [theme.breakpoints.only("xs")]: {
        width: 70,
        height: 70,
      },
    },
  })
)

const actions = [
  { icon: <MailIcon />, name: "E-Mail" },
  { icon: <PhoneIcon />, name: "Phone" },
]

const MonkeyIcon = () => {
  const classes = useStyles()
  return (
    <img src={MonkeyPositive} alt="mail me" className={classes.monkeyFabIcon} />
  )
}

type Interface = {|
  setOpen: (boolean) => void,
|}

const FabContext = createContext()

export const MonkeyFabProvider = ({ children }: { children: Node }): Node => {
  const [showFab, setShowFab] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const classes = useStyles()
  const mailToLink = useMailToLink({ title: "Personal Training" })
  const { phone } = useSiteData()
  const t = useSiteTranslations()

  useEffect(() => {
    setTimeout(() => {
      setShowFab(true)
    }, 100)
  }, [])

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  const handleAction = (action) => {
    if (action === "E-Mail") {
      window.open(mailToLink)
      return
    }

    window.open(`tel:${phone}`)
  }

  return (
    <FabContext.Provider value={{ setOpen }}>
      {children}
      <Zoom in={showFab} timeout={500}>
        <SpeedDial
          icon={<MonkeyIcon />}
          ariaLabel="contact"
          open={isOpen}
          FabProps={{
            color: "secondary",
            size: "large",
            className: classes.monkeyFabMainButton,
          }}
          className={classes.monkeyFab}
          onClose={handleClose}
          onOpen={handleOpen}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={t(action.name)}
              tooltipOpen={false}
              onClick={() => handleAction(action.name)}
            />
          ))}
        </SpeedDial>
      </Zoom>
    </FabContext.Provider>
  )
}

export const useMonkeyFab = (): Interface => {
  const i = useContext(FabContext)
  if (!i) {
    throw Error(
      "Could not find FabContext. Did you forget to wrap your components inside the MonkeyFapProvider?"
    )
  }
  return i
}
