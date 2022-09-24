import { getAdenauerplatz, getBerlinerStr, getBismarckstr, getBlissestr, getBundesplatz, getCharlottenburg, getErnstReuterPlatz, getFehrbellinerPlatz, getGrunewald, getGüntzelstr, getHalemweg, getHalensee, getHeerstr, getHeidelbergerPlatz, getHohenzollerndamm, getHohenzollernplatz, getJakobKaiserPlatz, getJungfernheide, getKonstanzerStr, getKurfürstendamm, getMesseNord, getMesseSüd, getMierendorffplatz, getNeuWestend, getRichardWagnerPlatz, getRuhleben, getRüdesheimerPlatz, getSophieCharlottePlatz, getSpichernstr, getTheo, getUhlandstr, getWestend, getWestkreuz, getZooBusStops } from "./Charlottenburg-Wilmersdorf"
import { getWarschauerStr } from "./Friedrichshain-Kreuzberg"
import { getLichtenberg } from "./Lichtenberg"
import { getFriedrichsfeldeOst, getMahlsdorf, getMarzahn } from "./Marzahn-Hellersdorf"
import { getAlex, getHbf, getPotsdamerPlatz } from "./Mitte"
import { getPankow } from "./Pankow"
import { getSpandau } from "./Spandau"
import { getBotanischerGarten, getFeuerbachstr, getLichterfeldeWest, getMexikoplatz, getNikolassee, getSteglitz, getSundgauerStr, getWannsee, getZehlendorf } from "./Steglitz-Zehlendorf"
import { getSüdkreuz } from "./Tempelhof-Schöneberg"
import { getAdlershof, getGrünau } from "./Treptow-Köpenick"

export function changeStopObject (mode, oldStopObject) {
  let newStopName, trackNo, newStop
  const { stop, line, direction, provenance } = oldStopObject
  const { id } = stop
  const { product, name: lineName } = line
  if (['tram', 'bus', 'ferry'].includes(product)) {
    switch (id) {
      case "900000023302":
        newStopName = getAdenauerplatz(mode, lineName, direction, provenance)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000193002":
        [newStopName, trackNo] = getAdlershof(mode, lineName, direction, provenance)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, platform: trackNo }
      case "900000100024":
      case "900000100026":
      case "900000100031":
      case "900000100711":
      case "900000100712":
        [newStopName, trackNo] = getAlex(id, mode, lineName, direction, provenance)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, platform: trackNo }
      case "900000044201":
        newStopName = getBerlinerStr(lineName)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000024201":
        newStopName = getBismarckstr()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000041102":
      case "900000043172":
        newStopName = getBlissestr(id, lineName)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000066102":
        newStopName = getBotanischerGarten()
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
        [newStopName, trackNo] = getCharlottenburg(id, mode, lineName, direction, provenance)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, platform: trackNo }
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
      case "900000171002":
        [newStopName, trackNo] = getFriedrichsfeldeOst(lineName, direction)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, platform: trackNo }
      case "900000186001":
      case "900000186701":
      case "900000186704":
        [newStopName, trackNo] = getGrünau(mode, lineName, direction, provenance)
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
      case "900000018102":
        newStopName = getHalemweg()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000040101":
        newStopName = getHalensee()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000003201":
        [newStopName, trackNo] = getHbf(mode, lineName, direction, provenance)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, platform: trackNo }
      case "900000026105":
        newStopName = getHeerstr()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000045102":
        newStopName = getHeidelbergerPlatz(mode, lineName, direction, provenance)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000044101":
        newStopName = getHohenzollerndamm(mode, lineName, direction, provenance)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000043101":
        newStopName = getHohenzollernplatz(lineName)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000018101":
        newStopName = getJakobKaiserPlatz(mode, lineName, direction, provenance)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000020201":
      case "900000020207":
        newStopName = getJungfernheide(id, mode, lineName, direction, provenance)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000041201":
        newStopName = getKonstanzerStr()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000023203":
        newStopName = getKurfürstendamm(mode, lineName, direction, provenance)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000160004":
      case "900000160020":
      case "900000160701":
      case "900000160702":
      case "900000160704":
        [newStopName, trackNo] = getLichtenberg(lineName, direction)
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
        [newStopName, trackNo] = getMahlsdorf(id, mode, lineName, direction, provenance)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, platform: trackNo }
      case "900000170001":
      case "900000170701":
      case "900000170702":
        [newStopName, trackNo] = getMarzahn(product, lineName, direction)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, platform: trackNo }
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
      case "900000026101":
        newStopName = getNeuWestend()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000052201":
        newStopName = getNikolassee(lineName)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000130002":
      case "900000130500":
        [newStopName, trackNo] = getPankow(id, mode, lineName, direction, provenance)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, platform: trackNo }
      case "900000005208":
      case "900000100020":
      case "900000100022":
      case "900000100720":
      case "900000100721":
      case "900000100722":
        trackNo = getPotsdamerPlatz(id, mode, lineName, direction, provenance)
        return { ...oldStopObject, platform: trackNo }
      case "900000022202":
        newStopName = getRichardWagnerPlatz(lineName)
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
      case "900000022101":
        newStopName = getSophieCharlottePlatz(mode, lineName, direction, provenance)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000029302":
      case "900000029371":
        [newStopName, trackNo] = getSpandau(id, mode, lineName, direction, provenance)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, platform: trackNo }
      case "900000042101":
        newStopName = getSpichernstr()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000062282":
      case "900000062782":
      case "900000062784":
        [newStopName, trackNo] = getSteglitz(id, mode, lineName, direction, provenance)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, platform: trackNo }
      case "900000058100":
      case "900000058101":
        [newStopName, trackNo] = getSüdkreuz(id, mode, lineName, direction, provenance)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, platform: trackNo }
      case "900000049202":
        newStopName = getSundgauerStr()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000026201":
      case "900000026203":
      case "900000026271":
        newStopName = getTheo(id)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000023301":
        newStopName = getUhlandstr()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000053301":
        [newStopName, trackNo] = getWannsee()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, platform: trackNo }
      case "900000120004":
        [newStopName, trackNo] = getWarschauerStr(mode, lineName, direction, provenance)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, platform: trackNo }
      case "900000020204":
      case "900000026207":
        newStopName = getWestend(id)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000024102":
        newStopName = getWestkreuz()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop }
      case "900000049201":
        [newStopName, trackNo] = getZehlendorf(mode, lineName, direction, provenance)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, platform: trackNo }
      case "900000023201":
      case "900000023172":
      case "900000023173":
        [newStopName, trackNo] = getZooBusStops(id, mode, lineName, direction, provenance)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, platform: trackNo }
      default: return oldStopObject
    }
  } else {
    return oldStopObject
  }
}