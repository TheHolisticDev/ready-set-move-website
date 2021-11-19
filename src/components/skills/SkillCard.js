// @flow
import React from "react"
import type { Node } from "react"
import { createStyles, makeStyles } from "@material-ui/core"
import SkillList from "./SkillList"
import SplitBox from "components/base/SplitBox"
import { useSiteData } from "react-static"
import useSiteTranslations from "i18n/useSiteTranslations"

type Skill = {|
  name: string,
  time: string,
|}

type Props = {
  title: string,
  skills: Skill[],
}

const useStyles = makeStyles((theme) =>
  createStyles({
    skillCardLeft: {
      [theme.breakpoints.up("lg")]: {
        paddingRight: theme.spacing(6),
        paddingLeft: theme.spacing(5),
      },
      [theme.breakpoints.only("md")]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4) + theme.spacing(0),
      },
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(7),
      },
    },
    skillCardRight: {
      [theme.breakpoints.only("md")]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4) + theme.spacing(0),
      },
      [theme.breakpoints.up("lg")]: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6),
      },
    },
  })
)

export default function SkillCard({ title }: Props): Node {
  const { education, experience } = useSiteData()
  const classes = useStyles()
  const t = useSiteTranslations()
  return (
    <SplitBox
      contentLeft={
        <SkillList
          title={t("Professional career")}
          skills={education}
          className={classes.skillCardLeft}
        />
      }
      contentRight={
        <SkillList
          title={t("Experience")}
          skills={experience}
          className={classes.skillCardRight}
        />
      }
    />
  )
}
