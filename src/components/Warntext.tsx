/** @jsxImportSource theme-ui */
const getLocale = require("./getLocale")

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

const Warntext = (props: Props) => {
  const formatTime = (timestamp: Timestamp) => {
    if (timestamp !== null && timestamp !== undefined) {
      const dateArray = timestamp.substring(0, 10).split("-")
      const [year, month, day] = dateArray
      const time = timestamp.substring(11, 16)
      return `${day}.${month}.${year}, ${time}`
    }
    return null
  }
  const formatText = (text: string | undefined | null) => {
    if (typeof text === 'string') {
      const formattedText = includeSpecialChars(text)
      return formattedText
    }
    return ""
  }
  const includeSpecialChars = (text: string) => {
    let textWODoubleBrs = text.replace(/(\[br\]*)/g, " ")
    let textForm = textWODoubleBrs.replace(/&lt;/g, "<")
    textForm = textForm.replace(/&gt;/g, ">")
    return textForm
  }
  const warnings = props.remarks.filter((remark) => remark.type === "warning")
  if (warnings.length > 0) {
    return (
      <div className="warntext" sx={{ gridColumn: "2 / span 22"}}>
        {warnings.map((warning, index) => {
          const { validFrom, validUntil, summary, text } = warning
          const from = formatTime(validFrom)
          const until = formatTime(validUntil)
          const summaryFormatted = formatText(summary)
          const textFormatted = formatText(text)
          const limits =
            until === "31.12.2049, 23:59"
              ? `${getLocale("since")} ${from}`
              : `${from} - ${until}`
          return (
            <p key={index} sx={{ textAlign: "justify" }}>
              <span className="fas fa-exclamation-triangle" />
              <span>{limits}: </span>
              <span dangerouslySetInnerHTML={{__html: summaryFormatted}} />,
              <span dangerouslySetInnerHTML={{__html: textFormatted}} />
            </p>
          )
        })}
      </div>
    )
  }
  return null
}

export default Warntext