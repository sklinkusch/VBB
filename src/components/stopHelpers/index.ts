import { changeStationObject } from "../stationHelpers"
import { getBernau, getZepernick } from "./Barnim"
import {
	getAdenauerplatz,
	getBerlinerStr,
	getBismarckstr,
	getBlissestr,
	getBundesplatz,
	getCharlottenburg,
	getDeutscheOper,
	getErnstReuterPlatz,
	getFehrbellinerPlatz,
	getGrunewald,
	getGüntzelstr,
	getHalemweg,
	getHalensee,
	getHeerstr,
	getHeidelbergerPlatz,
	getHohenzollerndamm,
	getHohenzollernplatz,
	getJakobKaiserPlatz,
	getJungfernheide,
	getKonstanzerStr,
	getKurfürstendamm,
	getMesseNord,
	getMesseSüd,
	getMierendorffplatz,
	getNeuWestend,
	getRichardWagnerPlatz,
	getRuhleben,
	getRüdesheimerPlatz,
	getSophieCharlottePlatz,
	getSpichernstr,
	getTheo,
	getUhlandstr,
	getWestend,
	getWestkreuz,
	getZooBusStops,
} from "./Charlottenburg-Wilmersdorf"
import {
	getBERT1,
	getBERT5,
	getEichwalde,
	getKönigsWusterhausen,
	getWaßmannsdorf,
	getWildau,
	getZeuthen,
} from "./Dahme-Spreewald"
import {
	getAnhalterBahnhof,
	getFrankfurterAllee,
	getGneisenaustr,
	getGörlitzerBf,
	getHalleschesTor,
	getKochstr,
	getMehringdamm,
	getMoritzplatz,
	getMöckernbrücke,
	getOstbahnhof,
	getOstkreuz,
	getPlatzDerLuftbrücke,
	getPrinzenstr,
	getSchlesischesTor,
	getSchönleinstr,
	getStrausbergerPlatz,
	getSüdstern,
	getWarschauerStr,
	getWeberwiese,
} from "./Friedrichshain-Kreuzberg"
import {
	getGehrenseestr,
	getHohenschönhausen,
	getKarlshorst,
	getLichtenberg,
	getNöldnerplatz,
	getRummelsburg,
	getWartenberg,
} from "./Lichtenberg"
import {
	getAhrensfelde,
	getBiesdorf,
	getFriedrichsfeldeOst,
	getKaulsdorf,
	getMahlsdorf,
	getMarzahn,
	getMehrowerAllee,
	getPoelchaustr,
	getRaoulWallenbergStr,
	getSpringpfuhl,
	getWuhletal,
} from "./Marzahn-Hellersdorf"
import {
	getAlex,
	getAmrumerStr,
	getBernauerStr,
	getBeusselstr,
	getBirkenstr,
	getBrandenburgerTor,
	getFriedrichstr,
	getGesundbrunnen,
	getHackescherMarkt,
	getHansaplatz,
	getHbf,
	getHeinrichHeineStr,
	getHumboldthain,
	getJannowitzbrücke,
	getLeopoldplatz,
	getMendelssohnBartholdyPark,
	getMohrenstr,
	getMuseumsinsel,
	getMärkischesMuseum,
	getNauenerPlatz,
	getNordbahnhof,
	getOranienburgerStr,
	getOsloerStr,
	getPankstr,
	getPotsdamerPlatz,
	getRosaLuxemburgPlatz,
	getRosenthalerPlatz,
	getRotesRathaus,
	getSchillingstr,
	getSpittelmarkt,
	getStadtmitte,
	getTiergarten,
	getTurmstr,
	getUnterDenLinden,
	getVoltastr,
	getWedding,
	getWeinmeisterstr,
	getWesthafen,
} from "./Mitte"
import {
	getBirkenstein,
	getFredersdorf,
	getHoppegarten,
	getNeuenhagen,
	getPetershagenNord,
	getStrausberg,
	getStrausbergNord,
	getStrausbergStadt,
} from "./Märkisch-Oderland"
import {
	getBlaschkoallee,
	getBoddinstr,
	getBritzSüd,
	getGrenzallee,
	getHermannplatz,
	getHermannstr,
	getJohannisthalerChaussee,
	getKarlMarxStr,
	getKöllnischeHeide,
	getLeinestr,
	getLipschitzallee,
	getNeukölln,
	getParchimerAllee,
	getRathausNeukölln,
	getRudow,
	getSonnenallee,
	getZwickauerDamm,
} from "./Neukölln"
import {
	getBergfelde,
	getBirkenwerder,
	getBorgsdorf,
	getHennigsdorf,
	getHohenNeuendorf,
	getMühlenbeckMönchmühle,
	getOranienburg,
} from "./Oberhavel"
import {
	getBlankenburg,
	getBornholmerStr,
	getBuch,
	getEberswalderStr,
	getGreifswalderStr,
	getKarow,
	getLandsbergerAllee,
	getPankow,
	getPankowHeinersdorf,
	getPrenzlauerAllee,
	getSchönhauserAllee,
	getSenefelderplatz,
	getStorkowerStr,
	getVinetastr,
	getWollankstr,
} from "./Pankow"
import { getGriebnitzsee, getPotsdamHbf } from "./Potsdam"
import { getTeltowStadt } from "./Potsdam-Mittelmark"
import {
	getEichborndamm,
	getFranzNeumannPlatz,
	getFrohnau,
	getHeiligensee,
	getHermsdorf,
	getKarlBonhoefferNervenklinik,
	getLindauerAllee,
	getParacelsusBad,
	getRathausReinickendorf,
	getResidenzstr,
	getSchulzendorf,
	getSchönholz,
	getTegel,
	getWaidmannslust,
	getWilhelmsruh,
	getWittenau,
} from "./Reinickendorf"
import {
	getAltstadtSpandau,
	getHaselhorst,
	getPaulsternstr,
	getRohrdamm,
	getSiemensdamm,
	getSpandau,
	getStresow,
	getZitadelle,
} from "./Spandau"
import {
	getBotanischerGarten,
	getBreitenbachplatz,
	getDahlemDorf,
	getFeuerbachstr,
	getFreieUniversität,
	getKrummeLanke,
	getLankwitz,
	getLichterfeldeOst,
	getLichterfeldeWest,
	getMexikoplatz,
	getNikolassee,
	getOnkelTomsHütte,
	getOsdorferStr,
	getSchloßstr,
	getSteglitz,
	getSundgauerStr,
	getSüdende,
	getWannsee,
	getZehlendorf,
} from "./Steglitz-Zehlendorf"
import { getBlankenfelde } from "./Teltow-Fläming"
import {
	getAltMariendorf,
	getAltTempelhof,
	getAttilastr,
	getBayerischerPlatz,
	getBuckowerChaussee,
	getBülowstr,
	getEisenacherStr,
	getFriedrichWilhelmPlatz,
	getInnsbruckerPlatz,
	getJuliusLeberBrücke,
	getKaiserinAugustaStr,
	getKleistpark,
	getKurfürstenstr,
	getMarienfelde,
	getNollendorfplatz,
	getParadestr,
	getPriesterweg,
	getRathausSchöneberg,
	getSchöneberg,
	getSüdkreuz,
	getTempelhof,
	getUllsteinstr,
	getWaltherSchreiberPlatz,
	getWestphalweg,
	getWittenbergplatz,
	getYorckstr,
} from "./Tempelhof-Schöneberg"
import {
	getAdlershof,
	getAltglienicke,
	getBaumschulenweg,
	getFriedrichshagen,
	getGrünau,
	getKöpenick,
	getRahnsdorf,
	getSchöneweide,
	getSpindlersfeld,
	getTreptowerPark,
	getWilhelmshagen,
	getWuhlheide,
} from "./Treptow-Köpenick"

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

type Mode = "dep" | "arr"

export function changeStopObject(mode: Mode, oldStopObject: Data) {
	let newStopName, trackNo, newStop, order
	const { stop, line, direction, provenance } = oldStopObject
	const { id } = stop
	const { product, name: lineName } = line
	if (["express", "regional", "suburban", "subway"].includes(product)) {
		const stopObject = changeStationObject(mode, oldStopObject)
		return stopObject
	}
	const idArray = id.split("")
	const twelveDigitId = idArray.length === 9 ? [idArray.slice(0,1), '0', '0', '0', ...idArray.slice(1)].join("") : id
	if (["tram", "bus", "ferry"].includes(product)) {
		switch (twelveDigitId) {
			case "900000023302":
				;[newStopName, order] = getAdenauerplatz(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000193002":
				;[newStopName, trackNo] = getAdlershof(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000170004":
				newStopName = getAhrensfelde()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000100024":
			case "900000100026":
			case "900000100031":
			case "900000100711":
			case "900000100712":
				;[newStopName, trackNo, order] = getAlex(
					twelveDigitId,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo, order }
			case "900000195510":
			case "900000196514":
				newStopName = getAltglienicke(twelveDigitId)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000070301":
			case "900000070701":
			case "900000070702":
				;[newStopName, order] = getAltMariendorf(
					twelveDigitId,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000029301":
				;[newStopName, order] = getAltstadtSpandau()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000068202":
				;[newStopName, order] = getAltTempelhof(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000009101":
				;[newStopName, order] = getAmrumerStr(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000012101":
				newStopName = getAnhalterBahnhof(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000068301":
				newStopName = getAttilastr(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000191001":
				newStopName = getBaumschulenweg(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000055102":
				;[newStopName, order] = getBayerischerPlatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000260009":
				;[newStopName, trackNo] = getBERT1(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000260005":
				;[newStopName, trackNo] = getBERT5(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000200011":
				newStopName = getBergfelde()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000044201":
				;[newStopName, order] = getBerlinerStr(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000350160":
				newStopName = getBernau()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000007110":
			case "900000007170":
				;[newStopName, order] = getBernauerStr(
					twelveDigitId,
					mode,
					product,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000020202":
				newStopName = getBeusselstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000171001":
			case "900000171531":
				newStopName = getBiesdorf(twelveDigitId)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000320026":
				newStopName = getBirkenstein()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000002201":
				;[newStopName, order] = getBirkenstr(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000200008":
				newStopName = getBirkenwerder()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000024201":
				;[newStopName, order] = getBismarckstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000142001":
				newStopName = getBlankenburg()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000245027":
				newStopName = getBlankenfelde(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000080201":
				;[newStopName, order] = getBlaschkoallee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000041102":
			case "900000043172":
				;[newStopName, order] = getBlissestr(twelveDigitId, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000079202":
				;[newStopName, order] = getBoddinstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000200007":
				newStopName = getBorgsdorf()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000110011":
				newStopName = getBornholmerStr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000066102":
				newStopName = getBotanischerGarten()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000100025":
				newStopName = getBrandenburgerTor()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000051202":
				newStopName = getBreitenbachplatz(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000080402":
			case "900000080455":
				;[newStopName, order] = getBritzSüd(twelveDigitId)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000135001":
				newStopName = getBuch(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000072101":
				newStopName = getBuckowerChaussee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000056104":
				newStopName = getBülowstr(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000044202":
				;[newStopName, order] = getBundesplatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000024101":
			case "900000024103":
			case "900000024202":
			case "900000024205":
				;[newStopName, trackNo, order] = getCharlottenburg(
					twelveDigitId,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo, order }
			case "900000051303":
				newStopName = getDahlemDorf(mode, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000022201":
				newStopName = getDeutscheOper()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000110006":
				newStopName = getEberswalderStr(product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000096405":
				newStopName = getEichborndamm(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000260004":
				newStopName = getEichwalde()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000054103":
				;[newStopName, order] = getEisenacherStr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000023101":
				newStopName = getErnstReuterPlatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000041101":
				;[newStopName, order] = getFehrbellinerPlatz(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000063101":
				newStopName = getFeuerbachstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000120001":
				;[newStopName, order] = getFrankfurterAllee(product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000085202":
				;[newStopName, order] = getFranzNeumannPlatz(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000320006":
			case "900000320009":
				newStopName = getFredersdorf(twelveDigitId)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000051201":
				newStopName = getFreieUniversität(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000171002":
				;[newStopName, trackNo] = getFriedrichsfeldeOst(
					mode,
					product,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000182002":
			case "900000182006":
				newStopName = getFriedrichshagen(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000100001":
				;[newStopName, order] = getFriedrichstr(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000061102":
				;[newStopName, order] = getFriedrichWilhelmPlatz(mode, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000092201":
			case "900000092282":
				;[newStopName, trackNo] = getFrohnau(
					twelveDigitId,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000152002":
				newStopName = getGehrenseestr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000007102":
				;[newStopName, order] = getGesundbrunnen(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000016101":
				;[newStopName, order] = getGneisenaustr(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000014101":
				newStopName = getGörlitzerBf(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000110003":
				newStopName = getGreifswalderStr(product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000080202":
			case "900000080204":
				;[newStopName, order] = getGrenzallee(twelveDigitId)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000230003":
				newStopName = getGriebnitzsee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000186001":
			case "900000186701":
			case "900000186704":
				;[newStopName, trackNo] = getGrünau(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000048101":
				newStopName = getGrunewald(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000043201":
				;[newStopName, order] = getGüntzelstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100002":
				;[newStopName, trackNo] = getHackescherMarkt(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000018102":
				;[newStopName, order] = getHalemweg()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000040101":
				newStopName = getHalensee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000012103":
				newStopName = getHalleschesTor(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000003101":
			case "900000003105":
				;[newStopName, order] = getHansaplatz(twelveDigitId)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000034102":
			case "900000034170":
				;[newStopName, order] = getHaselhorst(twelveDigitId, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000003201":
				;[newStopName, trackNo] = getHbf(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000026105":
				newStopName = getHeerstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000045102":
				;[newStopName, order] = getHeidelbergerPlatz(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000091203":
				newStopName = getHeiligensee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000100008":
				;[newStopName, order] = getHeinrichHeineStr(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000200000":
			case "900000203376":
				newStopName = getHennigsdorf(twelveDigitId)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000078101":
			case "900000078104":
			case "900000078105":
			case "900000078106":
			case "900000078170":
			case "900000078171":
				;[newStopName, order] = getHermannplatz(twelveDigitId)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000079220":
			case "900000079221":
				;[newStopName, trackNo, order] = getHermannstr(
					twelveDigitId,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo, order }
			case "900000093201":
				newStopName = getHermsdorf()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000200009":
				newStopName = getHohenNeuendorf()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000152001":
				newStopName = getHohenschönhausen()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000044101":
				;[newStopName, trackNo] = getHohenzollerndamm(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000043101":
				newStopName = getHohenzollernplatz(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000320008":
				newStopName = getHoppegarten()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000008101":
				newStopName = getHumboldthain()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000054105":
				;[newStopName, order] = getInnsbruckerPlatz(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000018101":
				;[newStopName, order] = getJakobKaiserPlatz(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100004":
				;[newStopName, order] = getJannowitzbrücke(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000082202":
				;[newStopName, order] = getJohannisthalerChaussee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000079201":
				;[newStopName, order] = getLeinestr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000057104":
				newStopName = getJuliusLeberBrücke()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000020201":
			case "900000020207":
				;[newStopName, trackNo, order] = getJungfernheide(
					twelveDigitId,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo, order }
			case "900000068302":
				;[newStopName, order] = getKaiserinAugustaStr(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000096458":
				;[newStopName, order] = getKarlBonhoefferNervenklinik()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000078103":
				;[newStopName, order] = getKarlMarxStr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000162001":
			case "900000162702":
				newStopName = getKarlshorst(twelveDigitId, product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000143001":
				newStopName = getKarow()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000175002":
				newStopName = getKaulsdorf()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000054102":
				;[newStopName, order] = getKleistpark()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000012102":
				;[newStopName, order] = getKochstr(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000077155":
				newStopName = getKöllnischeHeide()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000260001":
				;[newStopName, trackNo] = getKönigsWusterhausen(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000041201":
				;[newStopName, order] = getKonstanzerStr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000180001":
			case "900000180701":
				;[newStopName, trackNo] = getKöpenick(
					twelveDigitId,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000050201":
				newStopName = getKrummeLanke(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000023203":
				;[newStopName, order] = getKurfürstendamm(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000005201":
				newStopName = getKurfürstenstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000110004":
				newStopName = getLandsbergerAllee(product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000067221":
				newStopName = getLankwitz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000009102":
				;[newStopName, order] = getLeopoldplatz(mode, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000160004":
			case "900000160020":
			case "900000160701":
			case "900000160702":
			case "900000160704":
				;[newStopName, trackNo, order] = getLichtenberg(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000064301":
				newStopName = getLichterfeldeOst()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000066101":
				newStopName = getLichterfeldeWest()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000086160":
				;[newStopName, order] = getLindauerAllee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000082201":
				;[newStopName, order] = getLipschitzallee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000176001":
			case "900000176007":
			case "900000176701":
			case "900000176702":
				;[newStopName, trackNo] = getMahlsdorf(
					twelveDigitId,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000073101":
				newStopName = getMarienfelde()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000100014":
			case "900000100516":
				newStopName = getMärkischesMuseum(twelveDigitId)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000170001":
			case "900000170701":
			case "900000170702":
				;[newStopName, trackNo] = getMarzahn(
					mode,
					product,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000017101":
			case "900000017171":
				;[newStopName, order] = getMehringdamm(twelveDigitId, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000170003":
				newStopName = getMehrowerAllee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000005252":
				newStopName = getMendelssohnBartholdyPark(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000024106":
			case "900000026202":
			case "900000026204":
				newStopName = getMesseNord(twelveDigitId, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000025423":
				newStopName = getMesseSüd()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000050301":
				newStopName = getMexikoplatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000019204":
				;[newStopName, order] = getMierendorffplatz(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000017104":
				;[newStopName, order] = getMöckernbrücke(mode, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100010":
				newStopName = getMohrenstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000013101":
				;[newStopName, order] = getMoritzplatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000100537":
				newStopName = getMuseumsinsel()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000200013":
				newStopName = getMühlenbeckMönchmühle()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000009201":
				;[newStopName, order] = getNauenerPlatz(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000320007":
				newStopName = getNeuenhagen()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000078201":
			case "900000078271":
				;[newStopName, trackNo, order] = getNeukölln(
					twelveDigitId,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo, order }
			case "900000026101":
				newStopName = getNeuWestend()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000052201":
				newStopName = getNikolassee(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000160003":
			case "900000150534":
				newStopName = getNöldnerplatz(twelveDigitId)
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
			case "900000007104":
			case "900000007108":
				;[newStopName, trackNo] = getNordbahnhof(
					twelveDigitId,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000050282":
				newStopName = getOnkelTomsHütte()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000200005":
				newStopName = getOranienburg()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000100007":
				newStopName = getOranienburgerStr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000064256":
				newStopName = getOsdorferStr(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000009202":
			case "900000009272":
				;[newStopName, order] = getOsloerStr(twelveDigitId, product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000120005":
				newStopName = getOstbahnhof()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000120003":
				newStopName = getOstkreuz(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000130002":
			case "900000130500":
				;[newStopName, trackNo, order] = getPankow(
					twelveDigitId,
					mode,
					product,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000130001":
				newStopName = getPankowHeinersdorf(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000009203":
				;[newStopName, order] = getPankstr(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000085104":
			case "900000085108":
				;[newStopName, order] = getParacelsusBad(twelveDigitId, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000068101":
				;[newStopName, order] = getParadestr()
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
			case "900000320005":
				newStopName = getPetershagenNord()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000017102":
				;[newStopName, order] = getPlatzDerLuftbrücke(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000170005":
				newStopName = getPoelchaustr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000230999":
				newStopName = getPotsdamHbf(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000005208":
			case "900000100020":
			case "900000100022":
			case "900000100720":
			case "900000100721":
			case "900000100722":
				;[newStopName, trackNo, order] = getPotsdamerPlatz(
					twelveDigitId,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo, order }
			case "900000110002":
				newStopName = getPrenzlauerAllee(product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000058102":
				newStopName = getPriesterweg()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000013103":
				newStopName = getPrinzenstr(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000183001":
			case "900000183007":
				newStopName = getRahnsdorf(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000170002":
				newStopName = getRaoulWallenbergStr(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000078102":
			case "900000078151":
				;[newStopName, order] = getRathausNeukölln(
					twelveDigitId,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000096410":
			case "900000096710":
			case "900000096711":
				;[newStopName, order] = getRathausReinickendorf(twelveDigitId)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000054101":
			case "900000054106":
				newStopName = getRathausSchöneberg(twelveDigitId)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000085203":
				;[newStopName, order] = getResidenzstr(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000022202":
				;[newStopName, order] = getRichardWagnerPlatz(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000036101":
				;[newStopName, order] = getRohrdamm(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000100016":
				newStopName = getRosaLuxemburgPlatz(product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000100023":
				;[newStopName, order] = getRosenthalerPlatz(
					mode,
					product,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100045":
			case "900000100539":
				newStopName = getRotesRathaus(twelveDigitId)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000045101":
				newStopName = getRüdesheimerPlatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000083201":
				;[newStopName, trackNo, order] = getRudow(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo, order }
			case "900000025202":
				newStopName = getRuhleben(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000160001":
				newStopName = getRummelsburg(product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000100017":
				newStopName = getSchillingstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000014102":
				newStopName = getSchlesischesTor(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000062203":
				;[newStopName, order] = getSchloßstr(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000054104":
				newStopName = getSchöneberg()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000192001":
			case "900000192701":
			case "900000194006":
				newStopName = getSchöneweide(twelveDigitId, product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000110001":
				;[newStopName, order] = getSchönhauserAllee(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000085201":
				newStopName = getSchönholz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000016201":
				;[newStopName, order] = getSchönleinstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000091205":
				newStopName = getSchulzendorf()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000110005":
				newStopName = getSenefelderplatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000035101":
				;[newStopName, order] = getSiemensdamm(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000077106":
			case "900000077110":
				newStopName = getSonnenallee(twelveDigitId, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000022101":
				newStopName = getSophieCharlottePlatz(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000029302":
			case "900000029371":
				;[newStopName, trackNo, order] = getSpandau(
					twelveDigitId,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo, order }
			case "900000042101":
				;[newStopName, order] = getSpichernstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000180003":
				newStopName = getSpindlersfeld(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000100013":
				newStopName = getSpittelmarkt(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000171003":
				newStopName = getSpringpfuhl(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000100011":
			case "900000100018":
			case "900000100528":
				;[newStopName, trackNo, order] = getStadtmitte(twelveDigitId)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo, order }
			case "900000062282":
			case "900000062782":
			case "900000062784":
				;[newStopName, trackNo, order] = getSteglitz(
					twelveDigitId,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo, order }
			case "900000110012":
				newStopName = getStorkowerStr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000320004":
				newStopName = getStrausberg()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000120006":
				newStopName = getStrausbergerPlatz(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000320001":
				newStopName = getStrausbergNord()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000320002":
				newStopName = getStrausbergStadt()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000030202":
			case "900000030272":
				newStopName = getStresow(twelveDigitId)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000063452":
				newStopName = getSüdende()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000058100":
			case "900000058101":
				;[newStopName, trackNo] = getSüdkreuz(
					twelveDigitId,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000016202":
				;[newStopName, order] = getSüdstern()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000049202":
				newStopName = getSundgauerStr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000089303":
				newStopName = getTegel(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000220114":
			case "900000220413":
				newStopName = getTeltowStadt(twelveDigitId)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000068201":
			case "900000068272":
				;[newStopName, order] = getTempelhof(
					twelveDigitId,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000026201":
			case "900000026203":
			case "900000026271":
				newStopName = getTheo(twelveDigitId)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000003103":
				newStopName = getTiergarten()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000190001":
			case "900000190100":
			case "900000190701":
			case "900000190702":
				;[newStopName, trackNo] = getTreptowerPark(
					twelveDigitId,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000003104":
			case "900000003174":
			case "900000003175":
			case "900000003176":
				;[newStopName, order] = getTurmstr(twelveDigitId)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000023301":
				newStopName = getUhlandstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000069201":
			case "900000069271":
				;[newStopName, order] = getUllsteinstr(twelveDigitId, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100513":
				;[newStopName, order] = getUnterDenLinden(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000130011":
				newStopName = getVinetastr(product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000007103":
				;[newStopName, order] = getVoltastr(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000094101":
				newStopName = getWaidmannslust(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000061101":
				;[newStopName, order] = getWaltherSchreiberPlatz(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000053301":
				;[newStopName, trackNo] = getWannsee(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000120004":
				;[newStopName, trackNo, order] = getWarschauerStr(
					mode,
					product,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo, order }
			case "900000151001":
				newStopName = getWartenberg()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000260080":
				;[newStopName, trackNo] = getWaßmannsdorf(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000120025":
				newStopName = getWeberwiese(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000008103":
			case "900000009104":
				;[newStopName, order] = getWedding(twelveDigitId, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100051":
			case "900000100080":
				;[newStopName, order] = getWeinmeisterstr(
					twelveDigitId,
					mode,
					product,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000020204":
			case "900000026207":
				newStopName = getWestend(twelveDigitId)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000001201":
				;[newStopName, order] = getWesthafen()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000024102":
				newStopName = getWestkreuz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000070101":
				;[newStopName, order] = getWestphalweg(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000260002":
				newStopName = getWildau()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000183002":
				newStopName = getWilhelmshagen()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000084101":
				newStopName = getWilhelmsruh()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000096101":
			case "900000096197":
			case "900000096198":
			case "900000096407":
			case "900000096193":
				;[newStopName, order] = getWittenau(twelveDigitId, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000056101":
				newStopName = getWittenbergplatz(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000130003":
			case "900000130523":
				newStopName = getWollankstr(twelveDigitId)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000175001":
				;[newStopName, order] = getWuhletal()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000180002":
				newStopName = getWuhlheide()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000057102":
			case "900000058103":
				;[newStopName, order] = getYorckstr(twelveDigitId)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000049201":
				;[newStopName, trackNo] = getZehlendorf(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000350163":
				newStopName = getZepernick()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000260003":
				newStopName = getZeuthen()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000033101":
				;[newStopName, order] = getZitadelle()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000023201":
			case "900000023172":
			case "900000023173":
				;[newStopName, trackNo, order] = getZooBusStops(
					twelveDigitId,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo, order }
			case "900000083101":
				;[newStopName, order] = getZwickauerDamm()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			default:
				return oldStopObject
		}
	} else {
		return oldStopObject
	}
}
