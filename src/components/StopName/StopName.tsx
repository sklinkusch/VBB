/** @jsxImportSource theme-ui */
import React from "react"
import Line from "../Line/Line"

type LINE_A = {
	color: {
		fg: string
		bg: string
	}
	express: boolean
	fahrtNr: string
	id: string
	metro: boolean
	mode: string
	name: string
	night: boolean
	nr: number
	product: "regional" | "suburban" | "subway"
	type: string
}

type LINE_B = {
	express: boolean
	fahrtNr: string
	id: string
	metro: boolean
	mode: string
	name: string
	night: boolean
	nr: number
	product: "express" | "tram" | "bus" | "ferry"
	type: string
}

type Props = {
	element: string
	stop: {
		id: string
		name: string
	}
	date?: string
	lines?: (LINE_A | LINE_B)[]
}

function isRE (name: string) {
	return name === 'FEX' || name.startsWith("RE")
}

function isMetro (name: string) {
	return name.startsWith("M")
}

function isExpress (name: string) {
	return name.startsWith("X")
}

function isNight (name: string) {
	return name.startsWith("N")
}

function isNormalLine (name: string) {
	return /^[0-9]{1,3}$/.test(name)
}

function StopName(props: Props) {
	const { element, stop, date, lines } = props
	const productsArray = ['express', 'regional', 'suburban', 'subway', 'tram', 'bus', 'ferry']
	const linesWithoutExpress = lines
		? lines.filter((line) => !/(ICE|IC|EC|D)/.test(line.name))
		: []
	const sortedLines = linesWithoutExpress.sort((a, b) => {
		const { product: aProduct, name: aName } = a
		const { product: bProduct, name: bName } = b
		const aIndex = productsArray.indexOf(aProduct)
		const bIndex = productsArray.indexOf(bProduct)
		if (aIndex < bIndex) return -1
		if (bIndex < aIndex) return +1
		if (isRE(aName) && !isRE(bName)) return -1
		if (isRE(bName) && !isRE(aName)) return +1
		if (isMetro(aName) && !isMetro(bName)) return -1
		if (isMetro(bName) && !isMetro(aName)) return +1
		if (isExpress(aName) && !isExpress(bName)) return -1
		if (isExpress(bName) && !isExpress(aName)) return +1
		if (isNormalLine(aName) && !isNormalLine(bName)) return -1
		if (isNormalLine(bName) && !isNormalLine(aName)) return +1
		if (isNight(aName) && !isNight(bName)) return -1
		if (isNight(bName) && !isNight(aName)) return -1
		return 0
	})
	return (
		<React.Fragment>
			{element === "h2" ? (
				<h2>{stop.name}</h2>
			) : (
				<h3>
					{stop.name}
					{sortedLines &&
						Array.isArray(sortedLines) &&
						sortedLines.map((line) => (
							<Line line={line} key={line.name} />
						))}
				</h3>
			)}
			{element === "h2" && (
				<div sx={{ fontWeight: "bold", my: "8px" }}>{date}</div>
			)}
		</React.Fragment>
	)
}

export default StopName
