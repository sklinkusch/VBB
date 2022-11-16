import {
	getAdenauerplatz,
	getBerlinerStr,
	getBismarckstr,
	getBlissestr,
	getCharlottenburg,
	getFehrbellinerPlatz,
	getHalemweg,
	getHeidelbergerPlatz,
	getJakobKaiserPlatz,
	getJungfernheide,
	getKonstanzerStr,
	getKurfürstendamm,
	getMierendorffplatz,
	getRichardWagnerPlatz,
	getSpichernstr,
	getZoologischerGarten,
} from "./Charlottenburg-Wilmersdorf"
import {
	getFrankfurterAllee,
	getGleisdreieck,
	getGneisenaustr,
	getHalleschesTor,
	getKottbusserTor,
	getMehringdamm,
	getMöckernbrücke,
	getSüdstern,
	getWarschauerStr,
} from "./Friedrichshain-Kreuzberg"
import { getLichtenberg } from "./Lichtenberg"
import { getWuhletal } from "./Marzahn-Hellersdorf"
import {
	getAlex,
	getFriedrichstr,
	getLeopoldplatz,
	getPotsdamerPlatz,
	getStadtmitte,
	getUnterDenLinden,
	getWedding,
} from "./Mitte"
import {
	getBlaschkoallee,
	getBritzSüd,
	getGrenzallee,
	getHermannplatz,
	getHermannstr,
	getJohannisthalerChaussee,
	getKarlMarxStr,
	getLipschitzallee,
	getNeukölln,
	getParchimerAllee,
	getRathausNeukölln,
	getRudow,
	getZwickauerDamm,
} from "./Neukölln"
import { getPankow, getSchönhauserAllee } from "./Pankow"
import {
	getAltstadtSpandau,
	getHaselhorst,
	getPaulsternstr,
	getRathausSpandau,
	getRohrdamm,
	getSiemensdamm,
	getZitadelle,
} from "./Spandau"
import {
	getBayerischerPlatz,
	getEisenacherStr,
	getInnsbruckerPlatz,
	getKleistpark,
	getNollendorfplatz,
	getTempelhof,
	getYorckstr,
} from "./Tempelhof-Schöneberg"

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
			case "900000023302":
				;[newStopName, order] = getAdenauerplatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100003":
			case "900000100703":
			case "900000100704":
			case "900000100705":
				;[newStopName, order] = getAlex(id, product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000029301":
				;[newStopName, order] = getAltstadtSpandau()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000055102":
				;[newStopName, order] = getBayerischerPlatz(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000044201":
				;[newStopName, order] = getBerlinerStr(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000024201":
				;[newStopName, order] = getBismarckstr(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000080201":
				;[newStopName, order] = getBlaschkoallee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000041102":
				;[newStopName, order] = getBlissestr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000080402":
				;[newStopName, order] = getBritzSüd()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000024101":
			case "900000024103":
			case "900000024202":
			case "900000024205":
				;[newStopName, order] = getCharlottenburg(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000054103":
				;[newStopName, order] = getEisenacherStr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000041101":
				;[newStopName, order] = getFehrbellinerPlatz(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000120001":
				;[newStopName, order] = getFrankfurterAllee(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100001":
				;[newStopName, order] = getFriedrichstr(product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000017103":
				newStopName = getGleisdreieck(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000016101":
				;[newStopName, order] = getGneisenaustr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000080202":
				;[newStopName, order] = getGrenzallee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000018102":
				;[newStopName, order] = getHalemweg()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000012103":
				;[newStopName, order] = getHalleschesTor(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000034102":
				;[newStopName, order] = getHaselhorst()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000045102":
				;[newStopName, order] = getHeidelbergerPlatz(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000078101":
				;[newStopName, order] = getHermannplatz(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000079221":
				;[newStopName, order] = getHermannstr(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000054105":
				;[newStopName, order] = getInnsbruckerPlatz(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000018101":
				;[newStopName, order] = getJakobKaiserPlatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000082202":
				;[newStopName, order] = getJohannisthalerChaussee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000020201":
				;[newStopName, order] = getJungfernheide(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000078103":
				;[newStopName, order] = getKarlMarxStr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000054102":
				;[newStopName, order] = getKleistpark()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000041201":
				;[newStopName, order] = getKonstanzerStr()
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
			case "900000009102":
				;[newStopName, order] = getLeopoldplatz(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000160004":
			case "900000160701":
				;[newStopName, order] = getLichtenberg(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000082201":
				;[newStopName, order] = getLipschitzallee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000017101":
				;[newStopName, order] = getMehringdamm()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000019204":
				;[newStopName, order] = getMierendorffplatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000017104":
				;[newStopName, order] = getMöckernbrücke(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000078201":
				;[newStopName, order] = getNeukölln(product)
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
			case "900000080401":
				;[newStopName, order] = getParchimerAllee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000034101":
				;[newStopName, order] = getPaulsternstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100020":
			case "900000100720":
				;[newStopName, order] = getPotsdamerPlatz(id, product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000022202":
				;[newStopName, order] = getRichardWagnerPlatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000078102":
				;[newStopName, order] = getRathausNeukölln()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000029101":
			case "900000029302":
			case "900000029371":
				;[newStopName, order] = getRathausSpandau(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000036101":
				;[newStopName, order] = getRohrdamm()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000083201":
				;[newStopName, order] = getRudow()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000110001":
				;[newStopName, order] = getSchönhauserAllee(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000035101":
				;[newStopName, order] = getSiemensdamm()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000042101":
				;[newStopName, order] = getSpichernstr(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100011":
				;[newStopName, order] = getStadtmitte(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000016202":
				;[newStopName, order] = getSüdstern()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000068201":
				;[newStopName, order] = getTempelhof(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100513":
				;[newStopName, order] = getUnterDenLinden(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000120004":
				;[newStopName, order] = getWarschauerStr(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000009104":
				;[newStopName, order] = getWedding(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000175001":
				;[newStopName, order] = getWuhletal(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000033101":
				;[newStopName, order] = getZitadelle()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000057102":
			case "900000058103":
				;[newStopName, order] = getYorckstr(id, product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000023201":
				;[newStopName, order] = getZoologischerGarten(product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000083101":
				;[newStopName, order] = getZwickauerDamm()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			default:
				return oldStopObject
		}
	}
	return oldStopObject
}
