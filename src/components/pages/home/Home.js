import React, { useEffect, useRef } from "react"
import { Box, createStyles, makeStyles } from "@material-ui/core"

import useTranslations from "i18n/useTranslations"
import ExplainBox from "components/base/ExplainBox"
import ProductsCard from "components/products/ProductsCard"
import TrainerCard from "components/TrainerCard"
import SkillCard from "components/skills/SkillCard"
import StepCard from "components/pages/home/StepCard"
import Map from "./Map"
import Quote from "./Quote"
import { usePrefetch, useSiteData } from "react-static"
import { routes } from "components/Navigation/routes"
import { useElementScrolledIntoView } from "components/useElementScrolledIntoView"
import { useMonkeyFab } from "components/MonkeyFab"

const useStyles = makeStyles((theme) =>
  createStyles({
    homeExplainBox: {
      maxWidth: 800,
      marginLeft: "auto",
      marginRight: "auto",
    },
    homeRow: {
      marginBottom: theme.spacing(9),
    },
    homeNarrowRow: {
      marginBottom: theme.spacing(6),
    },
    homeMediumRow: {
      marginBottom: theme.spacing(8),
    },
    homeResponsiveRow: {
      marginBottom: theme.spacing(10),
      [theme.breakpoints.down("lg")]: {
        marginBottom: theme.spacing(9),
      },
    },
    homeSmallColumn: {
      [theme.breakpoints.down("md")]: {
        maxWidth: 488,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    homeFullWidthRow: {
      width: "100vw",
      position: "relative",
      marginLeft: "-50vw",
      left: "50%",
    },
    homeWideElement: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 1440,
    },
  })
)

export default function Home() {
  const t = useTranslations()
  const { ceoName } = useSiteData()
  const classes = useStyles()
  const startPrefetchRef = usePrefetch(routes.start)
  const bottomRef = useRef()
  const scrolledToBottom = useElementScrolledIntoView({
    element: bottomRef.current,
  })
  const { setOpen } = useMonkeyFab()

  useEffect(() => {
    if (scrolledToBottom) {
      setOpen(true)
    }
  }, [scrolledToBottom, setOpen])

  return (
    <Box justifyItems="center">
      <Box className={`${classes.homeExplainBox} ${classes.homeNarrowRow}`}>
        <ExplainBox
          title={t("explanationTitle")}
          text={[
            t(
              "In a relaxed atmosphere I'll work with you on your personal training goals. To reach them I use latest insights and proven methods."
            ),
            "",
            t(
              "That way, no matter where you currently stand in your fitness life, you'll make visible and sustainable gains and improve your life quality. For you I'll evaluate what currently keeps you from exploiting your full potential and togehter we'll push your limits!"
            ),
          ]}
        />
      </Box>
      <Box className={`${classes.homeMediumRow} ${classes.homeSmallColumn}`}>
        <TrainerCard
          text={[
            t(
              "For me personal training includes much more than the physical side. I use my knowledge of neuro biological findings, behavioural research, mindset building and all the experiences I made throughout my life to shape your training."
            ),
            t(
              "That way you get a holistic training package, that will push your limits."
            ),
          ]}
          subTitle={ceoName}
          title={t("Your Trainer")}
        />
      </Box>
      <Box className={`${classes.homeMediumRow} ${classes.homeSmallColumn}`}>
        <SkillCard />
      </Box>
      <Box className={classes.homeRow}>
        <StepCard />
      </Box>
      <Box className={classes.homeResponsiveRow} ref={startPrefetchRef}>
        <ProductsCard />
      </Box>
      <Box className={`${classes.homeFullWidthRow} ${classes.homeRow}`}>
        <Box className={classes.homeWideElement}>
          <Quote />
        </Box>
      </Box>
      <Box className={classes.homeMediumRow}>
        <ExplainBox
          title={"Personal Fitness Training"}
          text={[
            t("Home SEO P1"),
            "",
            t("Home SEO P2"),
            t("Home SEO P3"),
            t("Home SEO P4"),
            t("Home SEO P5"),
            "",
            t("Home SEO P6"),
            t("Home SEO P7"),
            "",
            t("Home SEO P8"),
          ]}
          className={classes.homeExplainBox}
        />
      </Box>
      <Box className={classes.homeFullWidthRow} ref={bottomRef}>
        <Box className={classes.homeWideElement}>
          <Map />
        </Box>
      </Box>
    </Box>
  )
}
