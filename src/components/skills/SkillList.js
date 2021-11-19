// @flow
import React from "react"
import type { Node } from "react"
import {
  Box,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { useLanguage } from "i18n/useLanguage"

type Skill = {|
  name: string,
  time: string,
|}

type SkillTranslation = {|
  de: Skill,
  en: Skill,
|}

type Props = {
  title: string,
  skills: SkillTranslation[],
  className?: string,
}

const useStyles = makeStyles((theme) =>
  createStyles({
    skillListTitle: {
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(4),
      textTransform: "uppercase",
    },
    skillListSkillRow: {
      marginBottom: theme.spacing(4) - 2,
    },
    skillListSkillTime: {
      color: theme.palette.text.secondary,
    },
  })
)

export default function SkillList({ title, skills, className }: Props): Node {
  const classes = useStyles()
  const language = useLanguage()
  return (
    <Box className={className}>
      <Typography
        component="h2"
        color="textSecondary"
        className={classes.skillListTitle}
      >
        {title}
      </Typography>
      {skills.map((skill, idx) => (
        <Grid container key={idx} className={classes.skillListSkillRow}>
          <Grid item xs={8}>
            <Typography variant="h3">{skill[language].name}</Typography>
          </Grid>
          <Grid item container xs={4} justifyContent="flex-end">
            <Typography className={classes.skillListSkillTime}>
              {skill[language].time}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Box>
  )
}
