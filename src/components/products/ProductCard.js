// @flow
import React, { useRef } from "react"
import type { Node } from "react"
import {
  Box,
  Button,
  Card,
  CardContent,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { Link } from "components/Router"

import { useLanguage } from "i18n/useLanguage"
import useTranslations from "i18n/useTranslations"
import useSiteTranslations from "i18n/useSiteTranslations"
import ProductDetailDialog from "components/products/ProductDetailDialog"
import { useBasepath, usePrefetch } from "react-static"
import { useMatch, useNavigate } from "@reach/router"
import { useMailToLink } from "components/useMailToLink"

type Product = {|
  title: string,
  description: string[],
  details: string[],
  fullPrice: string,
  pricing: string,
|}

type Props = {|
  product: Product,
|}

const useStyles = makeStyles((theme) =>
  createStyles({
    productCard: {
      width: "100%",
      backgroundColor: theme.palette.primary.main,
      borderRadius: 0,
      display: "flex",
      borderColor: theme.palette.secondary.main,
      borderWidth: 1,
      height: 304,

      [theme.breakpoints.only("xs")]: {
        height: 244,
      },
    },
    productCardContent: {
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      width: "inherit",
    },
    productCardPricing: {
      marginBottom: theme.spacing(3),
      fontSize: "2rem",
      fontWeight: 300,
      lineHeight: 1.2,
      letterSpacing: 0.64,
      marginTop: 0,
    },
    productCardTitle: {
      marginBottom: theme.spacing(1),
    },
    productCardDescription: {
      marginBottom: theme.spacing(3),
    },
    productCardButton: {
      backgroundColor: theme.palette.action.active,
      borderRadius: 22.2,
      height: 45,
      width: 89,
      "& span": {
        color: theme.palette.primary.contrastText,
      },
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)

export function ProductCardSkeleton({ children }: { children?: Node }): Node {
  const classes = useStyles()
  return (
    <Card className={classes.productCard} variant="outlined">
      {children}
    </Card>
  )
}

const useShowDetails = (
  language: string,
  productsPathPrefix: string,
  slug: string
): boolean => {
  const pathMatch = useMatch(`${productsPathPrefix}/:slug`)
  const langPathMatch = useMatch(`${language}/${productsPathPrefix}/:slug`)

  if (pathMatch) {
    return pathMatch.slug === slug
  }

  if (langPathMatch) {
    return langPathMatch.slug === slug
  }

  return false
}

export default function ProductCard({ product }: Props): Node {
  const t = useTranslations()
  const classes = useStyles()
  const language = useLanguage()
  const { pricing, fullPrice, title, description, details, slug } = product[
    language
  ]
  const ts = useSiteTranslations()
  const productsPathPrefix = ts("offers")
  const showDetails = useShowDetails(language, productsPathPrefix, slug)
  const navigate = useNavigate()
  const basePath = useBasepath()
  const hasPathLanguagePrefix = useMatch(`${language}/*`)
  const languagePrefixSetInitiallyRef = useRef(hasPathLanguagePrefix)

  const link = useMailToLink({ title })
  const productRoute = `${productsPathPrefix}/${slug}`
  // prefetch needs to be done with language as product links are always build with lang prefix by router
  const startPrefetchRef = usePrefetch(`${language}/${productRoute}`)

  let closingLink = basePath ? `/${basePath}/` : "/"

  if (languagePrefixSetInitiallyRef.current) {
    closingLink = closingLink.concat(language)
  }

  return (
    <>
      <ProductCardSkeleton>
        <CardContent className={classes.productCardContent}>
          <Box width="inherit" ref={startPrefetchRef}>
            <p className={classes.productCardPricing} align="center">
              {pricing}
            </p>
            <Typography
              variant="h3"
              className={classes.productCardTitle}
              align="center"
            >
              {title}
            </Typography>
            <Box className={classes.productCardDescription}>
              {description.map((paragraph, idx) => (
                <Typography color="textSecondary" align="center" key={idx}>
                  {paragraph}
                </Typography>
              ))}
            </Box>
            <Button
              variant="contained"
              disableElevation={true}
              className={classes.productCardButton}
              component={Link}
              to={productRoute}
            >
              Details
            </Button>
          </Box>
        </CardContent>
      </ProductCardSkeleton>
      <ProductDetailDialog
        action={{
          link,
          text: t("Get in touch"),
        }}
        pricing={fullPrice}
        text={details}
        title={title}
        show={showDetails}
        onClose={() => navigate(closingLink)}
      />
    </>
  )
}
