// your_app/plugins/jss-provider/node.api.js

import { ServerStyleSheets } from "@material-ui/core/styles"

const plugin = () => ({
  beforeRenderToHtml: (App, { meta }) => {
    meta.muiSheets = new ServerStyleSheets()
    return meta.muiSheets.collect(App)
  },

  headElements: (elements, { meta }) => [
    ...elements,
    meta.muiSheets.getStyleElement(),
  ],
})

export default plugin
