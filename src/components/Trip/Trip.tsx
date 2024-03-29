/** @jsxImportSource theme-ui */

type Loc = {
  type: string
  id?: string
  latitude: string 
  longitude: string
}

type Prod = {
  suburban: boolean
  subway: boolean
  tram: boolean
  bus: boolean
  ferry: boolean
  express: boolean
  regional: boolean
}

type OrigDest = {
  type: string
  id: string
  name: string
  location: Loc
  products: Prod
  stationDHID: string
}

type Operator = {
  type: string
  id: string
  name: string
}

type Color = {
  fg: string
  bg: string
}

type Line = {
  type: string
  id: string
  fahrtNr: string
  name: string
  public: boolean
  adminCode: string
  productName: string
  mode: string
  product: string
  operator: Operator
  color: Color
}

type Stopover = {
  stop: OrigDest
  cancelled?: boolean
  arrival: string | null
  plannedArrival: string | null
  arrivalDelay: number | null
  arrivalPlatform: string | null
  arrivalPrognosisType: string | null
  plannedArrivalPlatform: string | null
  departure: string | null
  plannedDeparture: string | null
  departureDelay: number | null
  departurePlatform: string | null
  departurePrognosisType: string | null
  plannedDeparturePlatform: string | null
}

type Remarks = {
	code: string | undefined
	summary: string | null | undefined
	text: string | undefined
	type: string | undefined
	validFrom: string | undefined
	validUntil: string | undefined
}[]

type Props = {
  trip: {
    origin: OrigDest
    destination: OrigDest
    departure: string
    plannedDeparture: string
    departureDelay: number | null
    arrival: string
    plannedArrival: string
    arrivalDelay: number | null
    line: Line
    direction: string
    currentLocation: Loc
    arrivalPlatform: string
    plannedArrivalPlatform: string
    arrivalPrognosisType: string
    departurePlatform: string
    plannedDeparturePlatform: string
    departurePrognosisType: string
    stopovers: Stopover[]
    remarks: Remarks
    id: string
  }
  stopId: string
  mode: "dep" | "arr"
}

function Trip({ trip, stopId, mode }: Props) {
  const stopOfInterest = trip.stopovers.find(stopover => stopover.stop.id === stopId)
  const indexOfInterest = stopOfInterest ? trip.stopovers.indexOf(stopOfInterest) : -1
  const getTime = (timestamp: string) => {
    return timestamp.split("T")[1].substring(0,5)
  }
  const getDelay = (delay: number) => {
    const roundedDelay = Math.round(delay / 60)
    if (roundedDelay === 0) {
      return "±0"
    }
    if (delay < 0) {
      return `-${Math.abs(roundedDelay)}`
    }
    return `+${Math.abs(roundedDelay)}`
  }
  const getColor = (delay: number) => {
    if (delay === 0) {
      return "blue"
    }
    if (delay < 0) {
      return "green"
    }
    return "red"
  }
  return (
    <div sx={{ gridColumn: "1 / span 24", fontSize: "0.8rem", textAlign: "left", hyphens: "auto" }} lang="de">
      {trip.stopovers && trip.stopovers.length > 0 && trip.stopovers.map((stop, idx) => {
        const isCancelled = stop.cancelled ? { textDecorationLine: "line-through" } : {}
        const isCurrentStop = idx === indexOfInterest ? { fontWeight: 700 } : {}
        return (
          <span key={`${idx}_${stop.stop.name}`}>
            <span sx={{ ...isCancelled, ...isCurrentStop }}>
              {stop.stop.name}
            </span>
            {idx <= indexOfInterest && (stop.plannedDeparture ? <span sx={{ mx: "0.3em", ...isCancelled, ...isCurrentStop }}>{getTime(stop.plannedDeparture)}</span> : stop.plannedArrival && (<span sx={{ mx: "0.3em", ...isCancelled, ...isCurrentStop }}>{getTime(stop.plannedArrival)}</span>))}
            {idx > indexOfInterest && (stop.plannedArrival ? <span sx={{ mx: "0.3em", ...isCancelled }}>{getTime(stop.plannedArrival)}</span> : stop.plannedDeparture && (<span sx={{ mx: "0.3em", ...isCancelled }}>{getTime(stop.plannedDeparture)}</span>))}
            {idx <= indexOfInterest && (typeof stop.departureDelay === "number" && !stop.cancelled ? (<span sx={{ mr: "0.2em", ...isCurrentStop, color: getColor(stop.departureDelay) }}>{getDelay(stop.departureDelay)}</span>) : typeof stop.arrivalDelay === 'number' && !stop.cancelled && (<span sx={{ mr: "0.2em", ...isCurrentStop, color: getColor(stop.arrivalDelay) }}>{getDelay(stop.arrivalDelay)}</span>))}
            {idx > indexOfInterest && (typeof stop.arrivalDelay === 'number' && !stop.cancelled ? (<span sx={{ mr: "0.2em", color: getColor(stop.arrivalDelay) }}>{getDelay(stop.arrivalDelay)}</span>) : typeof stop.departureDelay === 'number' && !stop.cancelled && (<span sx={{ mr: "0.2em", color: getColor(stop.departureDelay) }}>{getDelay(stop.departureDelay)}</span>))}
            {idx !== trip.stopovers.length - 1 && <span sx={{ mr: "0.3em" }}>–</span>}
          </span>
        )
      })}
    </div>
  )
}

export default Trip