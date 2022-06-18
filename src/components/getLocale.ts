const locales: any = require("./locales.json")

const getLocale = (element: string) => {
  if(navigator.language.startsWith("de")) {
    return locales.de[element]
  }
  return locales.en[element]
}

export default getLocale