import { getKurfürstendamm } from "./Charlottenburg-Wilmersdorf"
import {
	getGleisdreieck,
	getHalleschesTor,
	getKottbusserTor,
	getMöckernbrücke,
	getWarschauerStr,
} from "./Friedrichshain-Kreuzberg"
import { getAlex, getPotsdamerPlatz, getStadtmitte } from "./Mitte"
import { getPankow, getSchönhauserAllee } from "./Pankow"
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
			case "900000100003":
			case "900000100703":
			case "900000100704":
			case "900000100705":
				;[newStopName, order] = getAlex(id, product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000017103":
				newStopName = getGleisdreieck(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000012103":
				;[newStopName, order] = getHalleschesTor(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000023203":
				;[newStopName, order] = getKurfürstendamm(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000013102":
				;[newStopName, order] = getKottbusserTor(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000017104":
				;[newStopName, order] = getMöckernbrücke(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000056102":
				;[newStopName, order] = getNollendorfplatz(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000130002":
				;[newStopName, order] = getPankow(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100020":
			case "900000100720":
				;[newStopName, order] = getPotsdamerPlatz(id, product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000110001":
				;[newStopName, order] = getSchönhauserAllee(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100011":
				;[newStopName, order] = getStadtmitte(lineName)
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
