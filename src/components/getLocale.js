import locales from "./locales.json"

const getLocale = (element) => {
  if(navigator.language.startsWith("de")) {
    return locales.de[element]
  }
  return locales.en[element]
}

export default getLocale