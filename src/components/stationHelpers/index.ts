import {
	getGleisdreieck,
	getHalleschesTor,
	getKottbusserTor,
	getMöckernbrücke,
	getWarschauerStr,
} from "./Friedrichshain-Kreuzberg"
import { getNollendorfplatz } from "./Tempelhof-Schöneberg"

type Remarks = {
	code: string | undefined
	summary: string | null | undefined
	text: string
	type: string
	validFrom: string | undefined
	validUntil: string | undefined
}[]

type Data = {
	cancelled: boolean | undefined
	delay: number | null
	direction: string | null
	formerScheduledWhen?: string
	line: {
		express: boolean
		metro: boolean
		mode: string
		name: string
		night: boolean
		product: string
		type: string
	}
	order?: number
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
}

export function changeStationObject(mode: string, oldStopObject: Data) {
	let newStopName, newStop, order
	const { stop, line, direction, provenance } = oldStopObject
	const { id } = stop
	const { product, name: lineName } = line
	if (["express", "regional", "suburban", "subway"].includes(product)) {
		switch (id) {
			case "900000017103":
				newStopName = getGleisdreieck(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000012103":
				;[newStopName, order] = getHalleschesTor(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000013102":
				;[newStopName, order] = getKottbusserTor(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000017104":
				newStopName = getMöckernbrücke(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000056102":
				;[newStopName, order] = getNollendorfplatz(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000120004":
				;[newStopName, order] = getWarschauerStr(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			default:
				return oldStopObject
		}
	}
	return oldStopObject
}
