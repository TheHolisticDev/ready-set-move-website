// @flow
import React, { useEffect, useState } from "react"
import type { Node } from "react"
import {
  Box,
  createStyles,
  makeStyles,
  Slide,
  Typography,
} from "@material-ui/core"

import SplitCard from "./base/SplitCard"
import trainer from "assets/images/trainer.jpg"
import trainerMD from "assets/images/trainer_md.jpg"
import {
  REFERENCE_POINTS,
  useElementScrolledIntoView,
} from "./useElementScrolledIntoView"

type Props = {
  title: string,
  subTitle: string,
  text: string[],
}

const useStyles = makeStyles((theme) =>
  createStyles({
    trainerCardPortrait: {
      height: 624,
      [theme.breakpoints.down("md")]: {
        height: 326,
        backgroundImage: `url("${trainerMD}")`,
      },
      backgroundImage: `url("${trainer}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  })
)

const useLeftStyles = makeStyles((theme) =>
  createStyles({
    trainerCardLeft: {
      marginLeft: theme.spacing(6),
      marginRight: theme.spacing(6),
      [theme.breakpoints.down("md")]: {
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
      },
    },
    trainerCardLeftTitle: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
      },
    },
    trainerCardLeftSubTitle: {
      marginBottom: theme.spacing(3),
    },
    trainerCardLeftText: {
      marginBottom: theme.spacing(6),
    },
  })
)

const Left = ({ title, subTitle, text }: Props) => {
  const classes = useLeftStyles()
  const [showText, setShowText] = useState(false)
  const [containerElement, setContainerElement] = useState()
  const containerInView = useElementScrolledIntoView({
    element: containerElement,
    referencePoint: REFERENCE_POINTS.middle,
    offset: 50,
  })
  useEffect(() => {
    if (containerInView) {
      setShowText(true)
    }
  }, [containerInView])

  return (
    <div className={classes.trainerCardLeft} ref={setContainerElement}>
      <Typography
        variant="h3"
        component="h2"
        className={classes.trainerCardLeftTitle}
      >
        {title}
      </Typography>
      <Slide direction="up" in={showText} timeout={800}>
        <Box>
          <Typography
            variant="h2"
            component="h3"
            className={classes.trainerCardLeftSubTitle}
          >
            {subTitle}
          </Typography>

          <Box className={classes.trainerCardLeftText}>
            {text.map((paragraph, idx) => (
              <Typography color="textSecondary" key={idx}>
                {paragraph}
              </Typography>
            ))}
          </Box>
        </Box>
      </Slide>
    </div>
  )
}

export default function TrainerCard({ title, subTitle, text }: Props): Node {
  const classes = useStyles()

  return (
    <SplitCard
      contentLeft={<Left title={title} subTitle={subTitle} text={text} />}
      contentRight={<div className={classes.trainerCardPortrait} />}
    />
  )
}
