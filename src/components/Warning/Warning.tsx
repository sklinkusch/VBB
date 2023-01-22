/** @jsxImportSource theme-ui */

type Remarks = {
	summary: string | null | undefined
	text: string | undefined
	type: string | undefined
	validFrom: string | undefined
	validUntil: string | undefined
}[]

type Props = {
	remarks: Remarks
}

type Timestamp = string | null | undefined

type Text = string | null | undefined

export const formatTime = (timestamp: Timestamp) => {
	if (timestamp !== null && timestamp !== undefined) {
		const dateArray = timestamp.substring(0, 10).split("-")
		const [year, month, day] = dateArray
		const time = timestamp.substring(11, 16)
		return `${day}.${month}.${year}, ${time}`
	}
	return null
}

export const formatText = (text: Text) => {
	if (typeof text === "string") {
		const textWithoutLinks = replaceLinks(text)
		const formattedText = includeSpecialChars(textWithoutLinks)
		return formattedText
	}
	return ""
}

export const replaceLinks = (item: Text) => {
	if (typeof item === "string") {
		if (/<a.*href=".*".*>.*<\/a>/.test(item)) {
			const pattern = /<a.*href="([\w:/.]*)".*>(.*)<\/a>/g
			return item.replace(pattern, "$2 ($1)")
		}
		return item
	}
	return item
}

export const includeSpecialChars = (text: Text) => {
	if (typeof text === "string") {
		let textWODoubleBrs = text.replace(/(\[br\]*)/g, " ")
		let textForm = textWODoubleBrs.replace(/&lt;/g, "<")
		textForm = textForm.replace(/&gt;/g, ">")
		return textForm
	}
	return text
}

const Warning = ({ remarks }: Props) => {
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
		<div
			className="warning"
			sx={{
				textAlign: "center",
				gridColumn: ["13 / span 6", "23 / span 1"],
				px: 0,
			}}
		>
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
