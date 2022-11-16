import React, { lazy } from "react"
const Departure = lazy(() => import("../Departure/Departure"))
const Arrival = lazy(() => import("../Arrival/Arrival"))

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
	data: {
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
	}[]
	mode: string
}

export default function Tablebody(props: Props) {
	const { data = [], mode } = props
	return (
		<React.Fragment>
			{data !== undefined &&
				data !== null &&
				data.length > 0 &&
				data.map((dep) => {
					const identifier = `${dep.stop.id}:${dep.tripId}.${dep.when}`
					if (mode === "dep") {
						return <Departure dep={dep} key={identifier} />
					} else {
						return <Arrival arr={dep} key={identifier} />
					}
				})}
		</React.Fragment>
	)
}
