import path from "path"

import Document from "./src/components/Document"
import { translations, SUPPORTED_LANGUAGES } from "./src/i18n/translations"
import { products } from "./data/products"
import { experience, education } from "./data/skills"
import { steps } from "./data/steps"

const CHILD_ROUTE_TEMPLATES = [
  "studio",
  "appointments",
  "training",
  "imprint",
  "privacy",
  "agb",
]

const siteRoot = "https://ready-set-move.de"

const createCanonical = ({ lang, path }) =>
  lang ? `${siteRoot}/${lang}/${path}` : `${siteRoot}/${path}`

const createAlternateLinks = (path) =>
  SUPPORTED_LANGUAGES.map((lang) => ({
    lang,
    link: createCanonical({ lang, path }),
  }))

const createSubRoute = ({ template, lang, path, translationKey }) => {
  const i18nKey = translationKey ? translationKey : template
  return {
    path,
    getData: () => ({
      canonicalLink: createCanonical({ lang, path }),
      alternateLinks: createAlternateLinks(path),
      langFromPath: lang,
      translations: lang ? translations[i18nKey][lang] : translations[i18nKey],
    }),
    template: `src/pages/${template}.js`,
  }
}

const createProductsRoutes = (lang) => {
  const pathPrefix = translations.site[lang].offers

  return products.map((product) =>
    createSubRoute({
      template: "index",
      lang,
      path: `${pathPrefix}/${product[lang].slug}`,
      translationKey: "home",
    })
  )
}

const createSubRoutes = (lang) => {
  const subRoutes = CHILD_ROUTE_TEMPLATES.map((template) =>
    createSubRoute({
      template,
      lang,
      path: template,
    })
  )

  if (lang) {
    subRoutes.push(...createProductsRoutes(lang))
  } else {
    // for root path we want to generate all language options
    subRoutes.push(...SUPPORTED_LANGUAGES.map(createProductsRoutes).flat())
  }

  return subRoutes
}

const createRoutesForLang = (lang) => {
  return {
    path: lang,
    getData: () => ({
      canonicalLink: createCanonical({ lang, path: "index.html" }),
      alternateLinks: createAlternateLinks(lang, "index.html"),
      langFromPath: lang,
      translations: translations.home[lang],
    }),
    template: "src/pages/index.js",
    children: createSubRoutes(lang),
  }
}

const stagingBasePath = "ready-set-move-website"

const stage = process.env.ENVIRONMENT

const config = {
  siteRoot,
  stagingSiteRoot: "https://holisticdev.gitlab.io",
  stagingBasePath,
  Document,
  getSiteData: () => ({
    mail: "info@ready-set-move.de",
    phone: "+49 176 / 21964450",
    street: "Schönhauser Allee 134",
    city: "10437 Berlin",
    ceoName: "Robert Pazurek",
    companyName: "Ready Set Move – Personal Training Berlin",
    rating: 5,
    reviewCount: 5,
    translations: translations.site,
    products,
    experience,
    education,
    steps,
    stage,
  }),
  getRoutes: async () => {
    return [
      ...SUPPORTED_LANGUAGES.map(createRoutesForLang),
      {
        path: "/",
        getData: () => ({
          translations: translations.home,
          canonicalLink: siteRoot,
          alternateLinks: createAlternateLinks("de", "index.html"),
        }),
        template: "src/pages/index.js",
        children: createSubRoutes(),
      },
      {
        path: "404",
        getData: () => ({
          translations: translations[404],
        }),
      },
    ]
  },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
    "jss-provider",
    [
      "react-static-plugin-favicons",
      {
        inputFile: path.resolve(__dirname, "src/assets/monkey-positive.svg"),
        configuration: {
          path: stage === "staging" ? `/${stagingBasePath}` : undefined,
          appName: translations.home.de.title,
          appShortName: "RSM",
          appDescription: translations.home.de.description,
          developerName: "Robert Pazurek",
          lang: "de-DE",
          theme_color: "#00525e",
        },
      },
    ],
  ],
}
export default config
