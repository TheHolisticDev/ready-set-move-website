// @flow
import React from "react"
import type { Node } from "react"
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"
import DirectionsIcon from "@material-ui/icons/Directions"
import Rating from "@material-ui/lab/Rating"

import logo from "assets/logo-inverted-vertical.svg"
import map from "assets/images/map.svg"
import mapMarker from "assets/images/map-marker.webp"
import { useSiteData } from "react-static"
import { useLanguage } from "i18n/useLanguage"
import useTranslations from "i18n/useTranslations"

const useStyles = makeStyles((theme) =>
  createStyles({
    mapMarker: {
      width: 388,
      [theme.breakpoints.only("xs")]: {
        width: 328,
      },
      marginLeft: "auto",
      marginRight: "auto",
      position: "relative",
    },
    mapMarkerCard: {
      backgroundColor: "#FFF",
      borderRadius: 6,
    },
    mapMarkerCardMedia: {
      textAlign: "center",
      boxShadow: "inset 0 0 0 194px rgba(0, 82, 94, 0.9)",
    },
    mapMarkerCardMediaLogo: {
      marginTop: 77,
      marginBottom: 77,
      height: 234,
      margin: "auto",
    },
    mapMarkerCardContent: {
      height: 115,
      padding: 24,
    },
    mapMarkerCardContentTitle: {
      fontWeight: "bold",
      fontSize: "0.95rem",
      [theme.breakpoints.only("xs")]: {
        fontSize: "0.79rem",
      },
    },
    mapMarkerCardContentSubTitle: {
      fontSize: "0.875rem",
      marginBottom: theme.spacing(1),
    },
    mapMarkerCardContentRatingAVG: {
      fontSize: "0.9rem",
      marginRight: theme.spacing(0),
    },
    mapMarkerCardContentRatingStars: {
      fontSize: "0.875rem",
      verticalAlign: "text-bottom",
    },
    mapMarkerCardContentRatingReviews: {
      fontSize: "0.8rem",
      paddingLeft: theme.spacing(1),
    },
    mapMarkerArrowBox: {
      height: 15,
    },
    mapMarkerArrow: {
      width: 0,
      height: 0,
      borderLeft: "15px solid transparent",
      borderRight: "15px solid transparent",
      borderTop: "15px solid #FFF",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: -1,
    },
    mapImage: {
      height: 752,
      marginTop: -386,
      backgroundImage: `url("${map}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  })
)

export default function Map(): Node {
  const classes = useStyles()
  const t = useTranslations()
  const { street, city, rating, reviewCount, companyName } = useSiteData()
  const language = useLanguage()
  return (
    <Box>
      <a
        href="https://g.page/ready-set-move-berlin"
        target="_blank"
        rel="noreferrer"
      >
        <Box className={classes.mapMarker}>
          <Box className={classes.mapMarkerCard}>
            <Card elevation={5}>
              <CardActionArea>
                <CardMedia
                  image={mapMarker}
                  className={classes.mapMarkerCardMedia}
                >
                  <img
                    alt="ready set move logo card marker"
                    src={logo}
                    className={classes.mapMarkerCardMediaLogo}
                  />
                </CardMedia>
                <CardContent>
                  <Grid container>
                    <Grid item xs={10}>
                      <Typography
                        className={classes.mapMarkerCardContentTitle}
                        color="textPrimary"
                      >
                        {companyName}
                      </Typography>
                      <Typography
                        className={classes.mapMarkerCardContentSubTitle}
                        color="textSecondary"
                      >
                        {street}, {city}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        component="span"
                        className={classes.mapMarkerCardContentRatingAVG}
                      >
                        {rating.toLocaleString(language, {
                          minimumFractionDigits: 1,
                        })}
                      </Typography>
                      <Rating
                        readOnly
                        value={rating}
                        className={classes.mapMarkerCardContentRatingStars}
                      />
                      <Typography
                        component="span"
                        className={classes.mapMarkerCardContentRatingReviews}
                      >
                        {reviewCount} {t("Reviews")}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      container
                      xs={2}
                      justifyContent="center"
                      alignContent="center"
                    >
                      <Grid item>
                        <DirectionsIcon fontSize="large" color="action" />
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Box className={classes.mapMarkerArrowBox}>
            <div className={classes.mapMarkerArrow} />
          </Box>
        </Box>
        <Box className={classes.mapImage} />
      </a>
    </Box>
  )
}
