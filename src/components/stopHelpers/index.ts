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
	getGörlitzerBf,
	getHalleschesTor,
	getMöckernbrücke,
	getOstbahnhof,
	getOstkreuz,
	getPrinzenstr,
	getSchlesischesTor,
	getWarschauerStr,
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
	getBeusselstr,
	getBrandenburgerTor,
	getFriedrichstr,
	getGesundbrunnen,
	getHackescherMarkt,
	getHbf,
	getHumboldthain,
	getJannowitzbrücke,
	getMendelssohnBartholdyPark,
	getMohrenstr,
	getMärkischesMuseum,
	getNordbahnhof,
	getOranienburgerStr,
	getPotsdamerPlatz,
	getRosaLuxemburgPlatz,
	getSpittelmarkt,
	getStadtmitte,
	getTiergarten,
	getWedding,
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
	getHermannstr,
	getKöllnischeHeide,
	getNeukölln,
	getSonnenallee,
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
	getFrohnau,
	getHeiligensee,
	getHermsdorf,
	getKarlBonhoefferNervenklinik,
	getSchulzendorf,
	getSchönholz,
	getTegel,
	getWaidmannslust,
	getWilhelmsruh,
} from "./Reinickendorf"
import { getSpandau, getStresow } from "./Spandau"
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
	getSteglitz,
	getSundgauerStr,
	getSüdende,
	getWannsee,
	getZehlendorf,
} from "./Steglitz-Zehlendorf"
import { getBlankenfelde } from "./Teltow-Fläming"
import {
	getAttilastr,
	getBayerischerPlatz,
	getBuckowerChaussee,
	getBülowstr,
	getInnsbruckerPlatz,
	getJuliusLeberBrücke,
	getKurfürstenstr,
	getMarienfelde,
	getNollendorfplatz,
	getPriesterweg,
	getRathausSchöneberg,
	getSchöneberg,
	getSüdkreuz,
	getTempelhof,
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

export function changeStopObject(mode: string, oldStopObject: Data) {
	let newStopName, trackNo, newStop
	const { stop, line, direction, provenance } = oldStopObject
	const { id } = stop
	const { product, name: lineName } = line
	if (["tram", "bus", "ferry"].includes(product)) {
		switch (id) {
			case "900000023302":
				newStopName = getAdenauerplatz(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
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
				;[newStopName, trackNo] = getAlex(
					id,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000195510":
			case "900000196514":
				newStopName = getAltglienicke(id)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
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
				newStopName = getBayerischerPlatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
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
				newStopName = getBerlinerStr(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000350160":
				newStopName = getBernau()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000020202":
				newStopName = getBeusselstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000171001":
			case "900000171531":
				newStopName = getBiesdorf(id)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000320026":
				newStopName = getBirkenstein()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000200008":
				newStopName = getBirkenwerder()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000024201":
				newStopName = getBismarckstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000142001":
				newStopName = getBlankenburg()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000245027":
				newStopName = getBlankenfelde(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000041102":
			case "900000043172":
				newStopName = getBlissestr(id, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
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
				newStopName = getBundesplatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000024101":
			case "900000024103":
			case "900000024202":
			case "900000024205":
				;[newStopName, trackNo] = getCharlottenburg(
					id,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
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
			case "900000023101":
				newStopName = getErnstReuterPlatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000041101":
				newStopName = getFehrbellinerPlatz(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000063101":
				newStopName = getFeuerbachstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000120001":
				newStopName = getFrankfurterAllee(product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000320006":
			case "900000320009":
				newStopName = getFredersdorf(id)
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
				newStopName = getFriedrichstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000092201":
			case "900000092282":
				;[newStopName, trackNo] = getFrohnau(
					id,
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
				newStopName = getGesundbrunnen(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000014101":
				newStopName = getGörlitzerBf(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000110003":
				newStopName = getGreifswalderStr(product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
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
				newStopName = getGüntzelstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
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
				newStopName = getHalemweg()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000040101":
				newStopName = getHalensee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000012103":
				newStopName = getHalleschesTor(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000003201":
				;[newStopName, trackNo] = getHbf(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000026105":
				newStopName = getHeerstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000045102":
				newStopName = getHeidelbergerPlatz(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000091203":
				newStopName = getHeiligensee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000200000":
			case "900000203376":
				newStopName = getHennigsdorf(id)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000079220":
			case "900000079221":
				;[newStopName, trackNo] = getHermannstr(
					id,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
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
				newStopName = getInnsbruckerPlatz(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000018101":
				newStopName = getJakobKaiserPlatz(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000100004":
				newStopName = getJannowitzbrücke(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000057104":
				newStopName = getJuliusLeberBrücke()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000020201":
			case "900000020207":
				;[newStopName, trackNo] = getJungfernheide(
					id,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000096458":
				newStopName = getKarlBonhoefferNervenklinik()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000162001":
			case "900000162702":
				newStopName = getKarlshorst(id, product, lineName)
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
				newStopName = getKonstanzerStr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000180001":
			case "900000180701":
				;[newStopName, trackNo] = getKöpenick(
					id,
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
				newStopName = getKurfürstendamm(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
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
			case "900000160004":
			case "900000160020":
			case "900000160701":
			case "900000160702":
			case "900000160704":
				;[newStopName, trackNo] = getLichtenberg(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000064301":
				newStopName = getLichterfeldeOst()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000066101":
				newStopName = getLichterfeldeWest()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000176001":
			case "900000176007":
			case "900000176701":
			case "900000176702":
				;[newStopName, trackNo] = getMahlsdorf(
					id,
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
				newStopName = getMärkischesMuseum(id)
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
				newStopName = getMesseNord(id, lineName)
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
				newStopName = getMierendorffplatz(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000017104":
				newStopName = getMöckernbrücke(mode, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000100010":
				newStopName = getMohrenstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000200013":
				newStopName = getMühlenbeckMönchmühle()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000320007":
				newStopName = getNeuenhagen()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000078201":
			case "900000078271":
				;[newStopName, trackNo] = getNeukölln(
					id,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
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
				newStopName = getNöldnerplatz(id)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000056102":
				newStopName = getNollendorfplatz(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000007104":
			case "900000007108":
				;[newStopName, trackNo] = getNordbahnhof(
					id,
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
				;[newStopName, trackNo] = getPankow(
					id,
					mode,
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
			case "900000320005":
				newStopName = getPetershagenNord()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
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
				trackNo = getPotsdamerPlatz(id, mode, lineName, direction, provenance)
				return { ...oldStopObject, platform: trackNo }
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
			case "900000054101":
			case "900000054106":
				newStopName = getRathausSchöneberg(id)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000022202":
				newStopName = getRichardWagnerPlatz(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000100016":
				newStopName = getRosaLuxemburgPlatz(product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000045101":
				newStopName = getRüdesheimerPlatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000025202":
				newStopName = getRuhleben(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000160001":
				newStopName = getRummelsburg(product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000014102":
				newStopName = getSchlesischesTor(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000054104":
				newStopName = getSchöneberg()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000192001":
			case "900000192701":
			case "900000194006":
				newStopName = getSchöneweide(id, product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000110001":
				newStopName = getSchönhauserAllee(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000085201":
				newStopName = getSchönholz()
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
			case "900000077106":
			case "900000077110":
				newStopName = getSonnenallee(id, lineName)
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
				;[newStopName, trackNo] = getSpandau(
					id,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000042101":
				newStopName = getSpichernstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
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
				;[newStopName, trackNo] = getStadtmitte(id)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000062282":
			case "900000062782":
			case "900000062784":
				;[newStopName, trackNo] = getSteglitz(
					id,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000110012":
				newStopName = getStorkowerStr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000320004":
				newStopName = getStrausberg()
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
				newStopName = getStresow(id)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000063452":
				newStopName = getSüdende()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000058100":
			case "900000058101":
				;[newStopName, trackNo] = getSüdkreuz(
					id,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
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
				newStopName = getTeltowStadt(id)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000068201":
			case "900000068272":
				newStopName = getTempelhof(id, mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000026201":
			case "900000026203":
			case "900000026271":
				newStopName = getTheo(id)
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
					id,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000023301":
				newStopName = getUhlandstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000130011":
				newStopName = getVinetastr(product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000094101":
				newStopName = getWaidmannslust(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
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
				;[newStopName, trackNo] = getWarschauerStr(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000151001":
				newStopName = getWartenberg()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000260080":
				;[newStopName, trackNo] = getWaßmannsdorf(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			case "900000008103":
			case "900000009104":
				newStopName = getWedding(id, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000020204":
			case "900000026207":
				newStopName = getWestend(id)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000001201":
				newStopName = getWesthafen()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000024102":
				newStopName = getWestkreuz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
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
			case "900000056101":
				newStopName = getWittenbergplatz(mode, lineName, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000130003":
			case "900000130523":
				newStopName = getWollankstr(id)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000175001":
				newStopName = getWuhletal()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000180002":
				newStopName = getWuhlheide()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
			case "900000057102":
			case "900000058103":
				newStopName = getYorckstr(id)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop }
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
			case "900000023201":
			case "900000023172":
			case "900000023173":
				;[newStopName, trackNo] = getZooBusStops(
					id,
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, platform: trackNo }
			default:
				return oldStopObject
		}
	} else {
		return oldStopObject
	}
}
