// import React from "react"

// import { renderApp } from "./test-utils"
// import Page from "../src/components/base/Page"
// import Home from "../src/components/pages/Home"

jest.mock("react-static", () => {
  const { translations } = require("../src/i18n/translations")
  return {
    __esModule: true,
    useRouteData: jest.fn(() => {
      return {
        translations: translations.home,
        alternateLinks: [
          { lang: "de", link: "index-alt1" },
          { lang: "en", link: "index-alt2" },
        ],
      }
    }),
    useSiteData: jest.fn(() => {
      return {
        translations: translations.site,
      }
    }),
  }
})

describe("The App", () => {
  describe("when rendering the root page", () => {
    it("shows the main page in the users language (en for test environment)", async () => {
      // const { getByRole } = renderApp({
      //   component: (
      //     <Page>
      //       <Home />
      //     </Page>
      //   ),
      // })
      // await getByRole("heading", { name: "Cheerio" })
    })
  })
})
