import locales from "./locales"
import type { LocaleKey } from "./locales"

const getLocale = (element: string) => {
  const elKey = element as LocaleKey;
  if(navigator.language.startsWith("de")) {
    return locales.de[elKey]
  }
  return locales.en[elKey]
}

export default getLocale