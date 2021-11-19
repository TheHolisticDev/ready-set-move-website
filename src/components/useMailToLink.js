// @flow
import useSiteTranslations from "i18n/useSiteTranslations"
import { useSiteData } from "react-static"

type Params = {|
  title: string,
|}

export const useMailToLink = ({ title }: Params): string => {
  const { mail } = useSiteData()
  const t = useSiteTranslations()

  const mailSubject = encodeURIComponent(
    `${t("Further information request for")}: ${title}`
  )
  const mailBody = encodeURIComponent(`${t("Hi Ready Set Move Team")},

${t("I'm interested in your training offer")}: ${title}
  
${t("Please contect me via")}:`)

  return `mailto:${mail}?subject=${mailSubject}&body=${mailBody}`
}
