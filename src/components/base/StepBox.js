// @flow
import React, { useEffect, useState } from "react"
import type { Node } from "react"
import {
  Box,
  createStyles,
  Fade,
  makeStyles,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
  Zoom,
} from "@material-ui/core"
import { useElementScrolledIntoView } from "components/useElementScrolledIntoView"

type Props = {
  stepNumber: number,
  title: string,
  text: string[],
  children: Node,
  color: string,
}

const useStyles = (color) =>
  makeStyles((theme) =>
    createStyles({
      stepBoxTitle: {
        marginBottom: theme.spacing(3),
      },
      stepBoxText: {
        maxWidth: 300,
        marginLeft: "auto",
        marginRight: "auto",
        "&:not(:first-child)": {
          marginTop: theme.spacing(0),
        },
      },
      stepBoxStep: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: theme.spacing(5),
        width: 80,
        height: 80,
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 20,
        fontSize: "2rem",
        fontWeight: "bold",
        color: color,
        textAlign: "center",
        letterSpacing: 0.69,
        paddingTop: 18,
      },
    })
  )()

export default function StepBox({
  stepNumber,
  title,
  text,
  children,
  color,
}: Props): Node {
  const classes = useStyles(color)
  const [showStep, setShowStep] = useState(false)
  const [containerElement, setContainerElement] = useState()
  const theme = useTheme()
  const stepsInColumn = useMediaQuery(theme.breakpoints.down("md"))
  const show = useElementScrolledIntoView({
    element: containerElement,
  })

  useEffect(() => {
    if (show) {
      setShowStep(true)
    }
  }, [show])
  const transitionDelay =
    show && !stepsInColumn ? `${(stepNumber - 1) * 400}ms` : "0ms"

  return (
    <Zoom
      in={showStep}
      style={{
        transitionDelay,
      }}
      timeout={1000}
      ref={setContainerElement}
    >
      <Fade
        in={showStep}
        style={{
          transitionDelay: transitionDelay + 200,
        }}
        timeout={800}
      >
        <Box>
          <Paper elevation={5} className={classes.stepBoxStep}>
            {stepNumber}
          </Paper>
          <Typography
            variant="h3"
            className={classes.stepBoxTitle}
            align="center"
          >
            {title}
          </Typography>
          {text.map((paragraph, idx) => (
            <Typography
              color="textSecondary"
              align="center"
              className={classes.stepBoxText}
              key={idx}
            >
              {paragraph}
            </Typography>
          ))}
          {children}
        </Box>
      </Fade>
    </Zoom>
  )
}
