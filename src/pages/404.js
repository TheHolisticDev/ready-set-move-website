// @flow
import React from "react"
import type { Node } from "react"

import Page from "components/base/Page"
import NotFound from "components/pages/NotFound"

export default function NF(): Node {
  return (
    <Page>
      <NotFound />
    </Page>
  )
}
