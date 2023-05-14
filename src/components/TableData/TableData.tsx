import React from "react"
import StopName from "../StopName/StopName"
import Tablehead from "../Tablehead/Tablehead"
import Tablebody from "../Tablebody/Tablebody"

type Location = {
	type: "location"
	latitude: number
	longitude: number
}

type Remarks = {
	code: string | undefined
	summary: string | null | undefined
	text: string
	type: string
	validFrom: string | undefined
	validUntil: string | undefined
}[]

type Operator = {
  type: "operator",
  id: string,
  name: string
}

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
	operator: Operator
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
	operator: Operator
	product: "express" | "tram" | "bus" | "ferry"
	type: string
}

type Dataset = {
	cancelled: boolean | undefined
	currentTripPosition: Location
	delay: number | null
	direction: string | null
	formerScheduledWhen?: string
	line: LINE_A | LINE_B
	plannedPlatform?: string
	plannedWhen?: string
	platform?: number | string
	prognosedPlatform?: string
	prognosisType: string | null | undefined
	provenance: string | null
	remarks: Remarks
	scheduledWhen?: string
	stop: {
		id: string
		name: string
		location: Location
	}
	tripId: string
	when?: string
}

type Mode = "dep" | "arr"

type Props = {
	mode: Mode
	stop: {
		id: string
		name: string
	}
	data: Dataset[]
}

export default function TableData(props: Props) {
	const { stop, data, mode } = props
	const linesRaw = data.map((dataset) => dataset.line)
	const lineNames = linesRaw.map((line) => line.name)
	const uniqueLineNames = Array.from(new Set(lineNames))
	const unsortedLines = uniqueLineNames
		.map((result) => {
			const element = linesRaw.filter((line) => line.name === result)[0]
			return element
		})
		.filter((element) => element !== undefined)
	const lines = unsortedLines.sort((a: LINE_A | LINE_B, b: LINE_A | LINE_B) => {
		const {
			product: aProduct,
			name: aLineName,
			metro: aMetro,
			express: aExpress,
			night: aNight,
		} = a
		const {
			product: bProduct,
			name: bLineName,
			metro: bMetro,
			express: bExpress,
			night: bNight,
		} = b
		const sortOrder = ["regional", "suburban", "subway", "tram", "bus", "ferry"]
		if (sortOrder.indexOf(aProduct) < sortOrder.indexOf(bProduct)) return -1
		if (sortOrder.indexOf(bProduct) < sortOrder.indexOf(aProduct)) return +1
		if (aMetro && !bMetro) return -1
		if (bMetro && !aMetro) return +1
		if (aExpress && !bExpress) return -1
		if (bExpress && !aExpress) return +1
		if (aNight && !bNight) return +1
		if (bNight && !aNight) return -1
		if (aLineName < bLineName) return -1
		if (bLineName < aLineName) return +1
		return 0
	})
	return (
		<div>
			<StopName stop={stop} element="h3" lines={lines} />
			<Tablehead mode={mode} />
			<Tablebody data={data} mode={mode} />
		</div>
	)
}
