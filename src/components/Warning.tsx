/** @jsxImportSource theme-ui */

type Remarks = {
  categories: number[] | undefined,
  code: string | undefined,
  company: string | undefined,
  icon: {
    title: string | null | undefined,
    type: string | undefined
  },
  id: string | undefined,
  modified: string | undefined,
  priority: number | undefined | null,
  products: {
    bus: boolean | undefined,
    express: boolean | undefined,
    ferry: boolean | undefined,
    regional: boolean | undefined,
    suburban: boolean | undefined,
    subway: boolean | undefined,
    tram: boolean | undefined
  },
  summary: string | null | undefined,
  text: string,
  type: string,
  validFrom: string | undefined,
  validUntil: string | undefined
}[]

type Props = {
  remarks: Remarks
}

type Timestamp = string | null | undefined

type Text = string | null | undefined

const Warning = ({ remarks }: Props) => {
  const formatTime = (timestamp: Timestamp) => {
    if (timestamp !== null && timestamp !== undefined) {
      const dateArray = timestamp.substring(0, 10).split("-")
      const [year, month, day] = dateArray
      const time = timestamp.substring(11, 16)
      return `${day}.${month}.${year}, ${time}`
    }
    return null
  }
  const formatText = (text: Text) => {
    if (typeof text === 'string') {
      const textWithoutLinks = replaceLinks(text)
      const formattedText = includeSpecialChars(textWithoutLinks)
      return formattedText
    }
    return ""
  }
  const replaceLinks = (item: Text) => {
    if (typeof item === 'string') {
      if (/<a.*href=".*".*>.*<\/a>/.test(item)) {
        if (
          /<a.*href=".*" target="_blank" rel="noopener noreferrer[ ]*">.*<\/a>/.test(
            item
            )
          ) {
            const pattern1 = /<a.*href="(.*)" target="_blank" rel="noopener noreferrer[ ]*">(.*)<\/a>/g
            return item.replace(pattern1, "$2 ($1)")
          } else if (
            /<a.*href=".*" target="_blank" rel="noopener[ ]*">.*<\/a>/.test(item)
            ) {
            const pattern2 = /<a.*href="(.*)" target="_blank" rel="noopener[ ]*">(.*)<\/a>/g
            return item.replace(pattern2, "$2 ($1)")
          } else if (/<a.*href?".*" target="_blank">.*<\/a>/.test(item)) {
            const pattern3 = /<a.*href="(.*)" target="_blank">(.*)<\/a>/g
            return item.replace(pattern3, "$2 ($1)")
          } else {
            const pattern = /<a.*href="(.*)".*>(.*)<\/a>/g
            return item.replace(pattern, "$2 ($1)")
          }
        }
        return item
      }
      return item
  }
  const includeSpecialChars = (text: Text) => {
    if (typeof text === 'string') {
      let textWODoubleBrs = text.replace(/(\[br\]*)/g, " ")
      let textForm = textWODoubleBrs.replace(/&lt;/g, "<")
      textForm = textForm.replace(/&gt;/g, ">")
      return textForm
    }
    return text
  }
  const warnings = remarks.filter((remark) => remark.type === "warning")
  const formattedWarnings = warnings
    .map((warning) => {
      const from = formatTime(warning.validFrom)
      const until = formatTime(warning.validUntil)
      const summary = formatText(warning.summary)
      const text = formatText(warning.text)
      return `${from ? from : ""} - ${until ? until : ""}: ${
        summary ? summary : ""
      }, ${text ? text : ""}`
    })
    .join("\n")
  return (
    <div className="warning" sx={{ textAlign: "center", gridColumn: ["13 / span 6", "23 / span 1"]}}>
      {warnings.length > 0 ? (
        <span
          className="fas fa-exclamation-triangle"
          title={formattedWarnings}
        />
      ) : null}
    </div>
  )
}

export default Warning
