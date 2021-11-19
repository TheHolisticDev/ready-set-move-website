// @flow
import React from "react"
import type { Node } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  createStyles,
  Grid,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import ProductCard, { ProductCardSkeleton } from "./ProductCard"
import useTranslations from "i18n/useTranslations"
import { useSiteData } from "react-static"

const useStyles = makeStyles((theme) =>
  createStyles({
    productsCardHeader: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(6),
    },
    productsCardContent: {
      padding: "0 !important",
    },
  })
)

const FillerCards = ({ productsCount }: { productsCount: number }): Node => {
  const theme = useTheme()
  const largeScreen = useMediaQuery(theme.breakpoints.up("lg"))
  const mediumScreen = useMediaQuery(theme.breakpoints.only("md"))
  const smallScreen = useMediaQuery(theme.breakpoints.only("sm"))
  const cardsPerRow = largeScreen ? 4 : mediumScreen ? 3 : smallScreen ? 2 : 1
  const cardsInLastRow = productsCount % cardsPerRow

  if (cardsInLastRow === 0) return null

  return Array(cardsPerRow - cardsInLastRow)
    .fill(<ProductCardSkeleton />)
    .map((card, idx) => (
      <Grid item lg={3} md={4} sm={6} xs={12} key={`empty${idx}`}>
        <ProductCardSkeleton />
      </Grid>
    ))
}

export default function ProductsCard(): Node {
  const { products } = useSiteData()
  const t = useTranslations()
  const classes = useStyles()

  return (
    <Card elevation={5}>
      <CardHeader
        title={t("Pricing & Products")}
        titleTypographyProps={{ variant: "h2", component: "h2" }}
        className={classes.productsCardHeader}
      />
      <CardContent className={classes.productsCardContent}>
        <Grid container>
          {products.map((product, idx) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={idx}>
              <ProductCard product={product} />
            </Grid>
          ))}
          <FillerCards productsCount={products.length} />
        </Grid>
      </CardContent>
    </Card>
  )
}
