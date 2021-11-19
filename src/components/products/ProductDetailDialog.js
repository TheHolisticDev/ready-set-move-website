// @flow
import React from "react"
import type { Node } from "react"
import {
  ButtonBase,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import MailIcon from "@material-ui/icons/Mail"

type Props = {
  title: string,
  pricing: string,
  text: string[],
  action: {
    text: string,
    link: string,
  },
  onClose: () => void,
  show: boolean,
}

const useStyles = makeStyles((theme) =>
  createStyles({
    detailCardHeader: {
      paddingTop: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(5),
      boxShadow:
        "0px 3px 3px -2px rgb(0 0 0 / 10%), 0px 3px 4px 0px rgb(0 0 0 / 7%), 0px 1px 8px 0px rgb(0 0 0 / 6%)",
    },
    detailCardTitle: {
      paddingTop: theme.spacing(1),
      marginRight: theme.spacing(2),
    },
    detailCardCloseButton: {
      padding: 0,
      position: "absolute",
      right: theme.spacing(2),
      top: theme.spacing(2),
      color: theme.palette.action.active,
    },
    detailCardContent: {
      paddingLeft: theme.spacing(5),
    },
    detailCardParagraph: {
      marginBottom: theme.spacing(3),
    },
    detailCardPricing: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    detailCardActions: {
      backgroundColor: theme.palette.action.active,
      color: theme.palette.primary.contrastText,
      boxShadow:
        "0px -3px 3px -2px rgb(0 0 0 / 20%), 0px -3px 4px 0px rgb(0 0 0 / 14%), 0px -1px 8px 0px rgb(0 0 0 / 12%)",
      justifyContent: "center",
      "& a": {
        textDecoration: "none",
      },
      padding: 0,
    },
    detailCardAction: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      width: "100%",
    },
    detailCardActionIcon: {
      marginRight: theme.spacing(1),
    },
  })
)

export default function ProductDetailDialog({
  title,
  pricing,
  text,
  action,
  onClose,
  show,
}: Props): Node {
  const classes = useStyles()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Dialog
      fullScreen={fullScreen}
      fullWidth
      maxWidth="sm"
      open={show}
      onClose={onClose}
    >
      <DialogTitle disableTypography className={classes.detailCardHeader}>
        <Typography
          variant="h2"
          component="h3"
          className={classes.detailCardTitle}
        >
          {title}
        </Typography>
        <IconButton
          className={classes.detailCardCloseButton}
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.detailCardContent}>
        {text.map((paragraph, idx) => (
          <Typography
            color="textSecondary"
            align="left"
            key={idx}
            className={classes.detailCardParagraph}
          >
            {paragraph}
          </Typography>
        ))}
        <Typography
          color="textSecondary"
          align="left"
          className={classes.detailCardPricing}
        >
          {pricing}
        </Typography>
      </DialogContent>
      <a href={action.link} target="_blank" rel="noreferrer">
        <DialogActions className={classes.detailCardActions}>
          <ButtonBase focusRipple className={classes.detailCardAction}>
            <MailIcon className={classes.detailCardActionIcon} />
            <Typography variant="button">{action.text}</Typography>
          </ButtonBase>
        </DialogActions>
      </a>
    </Dialog>
  )
}
