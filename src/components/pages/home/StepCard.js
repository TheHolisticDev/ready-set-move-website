// @flow
import React from "react"
import type { Node } from "react"
import { createStyles, Grid, makeStyles, Typography } from "@material-ui/core"
import { useSiteData } from "react-static"

import StepBox from "../../base/StepBox"
import useTranslations from "i18n/useTranslations"
import { useLanguage } from "i18n/useLanguage"

const useStyles = makeStyles((theme) =>
  createStyles({
    stepCardRow: {
      "&:not(:last-child)": {
        [theme.breakpoints.down("md")]: {
          marginBottom: theme.spacing(7),
        },
      },
    },
    stepCardContact: {
      color: theme.palette.action.active,
    },
  })
)

export default function StepCard(): Node {
  const classes = useStyles()
  const t = useTranslations()
  const language = useLanguage()
  const { mail, phone, steps } = useSiteData()
  return (
    <Grid item container justifyContent="center" spacing={6}>
      <Grid item>
        <Typography variant="h2">{t("Let's start")}</Typography>
      </Grid>
      <Grid item container>
        {steps.map((step, idx) => (
          <Grid item xs={12} lg={4} className={classes.stepCardRow} key={idx}>
            <StepBox
              stepNumber={idx + 1}
              text={step[language].text}
              title={step[language].title}
              color={step.color}
            >
              {idx === 0 ? (
                <Typography align="center" className={classes.stepCardContact}>
                  <a href={`mailto:${mail}`}>{mail}</a>
                  <br />
                  <a href={`tel:${phone}`}>{phone}</a>
                </Typography>
              ) : null}
            </StepBox>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
