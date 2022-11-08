import React from "react"
import StopName from "../StopName/StopName"
import Tablehead from "../Tablehead/Tablehead"
import Tablebody from "../Tablebody/Tablebody"

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
	mode: string
	stop: {
		id: string
		name: string
	}
	data: {
		cancelled: boolean | undefined
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
		}
		tripId: string
		when?: string
	}[]
}

export default function TableData(props: Props) {
	const { stop, data, mode } = props
	return (
		<div>
			<StopName stop={stop} element="h3" />
			<Tablehead mode={mode} />
			<Tablebody data={data} mode={mode} />
		</div>
	)
}
