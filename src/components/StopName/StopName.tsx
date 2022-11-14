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

function StopName(props: Props) {
	const { element, stop, date, lines } = props
	return (
		<React.Fragment>
			{element === "h2" ? (
				<h2>{stop.name}</h2>
			) : (
				<h3>
					{stop.name}
					{lines &&
						Array.isArray(lines) &&
						lines.map((line) => <Line line={line} key={line.name} />)}
				</h3>
			)}
			{element === "h2" && (
				<div sx={{ fontWeight: "bold", my: "8px" }}>{date}</div>
			)}
		</React.Fragment>
	)
}

export default StopName
