import React from "react"

export default function Document({
  Html,
  Head,
  Body,
  children,
  state: { siteData, renderMeta },
}) {
  const styleSrc =
    "https://ready-set-move.de/ https://*.ready-set-move.de/ 'self' 'unsafe-inline'"
  const fontSrc =
    "https://ready-set-move.de/ https://*.ready-set-move.de/ 'self' data:"
  const imgSrc =
    "https://ready-set-move.de/ https://*.ready-set-move.de/ 'self' data:"
  const scriptSrc =
    siteData.stage === "development"
      ? "'unsafe-inline' 'self' 'unsafe-eval'"
      : "https://ready-set-move.de/ https://*.ready-set-move.de/ 'unsafe-inline' 'self'"
  const defaultSrc =
    "https://ready-set-move.de/ https://*.ready-set-move.de/ 'self'"
  return (
    <Html lang="de-DE">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content={`style-src ${styleSrc}; font-src ${fontSrc}; img-src ${imgSrc}; script-src ${scriptSrc}; default-src ${defaultSrc}`}
        />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Informationen zum Personal Fitness und Bewegungs Training in Berlin bei Ready Set Move"
        />
        <meta
          name="google-site-verification"
          content="UOjxhN9tIKCRw79M0CSetgA3LPLaiz7jVZVS0J7mmfU"
        />
        <meta name="geo.placename" content="Berlin, Germany" />
        <title>Ready Set Move – Personal Training Berlin</title>
        <link rel="author" href="/about-me.html" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Body>{children}</Body>
    </Html>
  )
}
