/** @jsxImportSource theme-ui */
import { Fragment, lazy, useState, useEffect } from "react"
import { Distance } from "../Distance/Distance"
const Carrier = lazy(() => import("../Carrier/Carrier"))
const Trip = lazy(() => import("../Trip/Trip"))
const Time = lazy(() => import("../Time/Time"))
const Product = lazy(() => import("../Product/Product"))
const Line = lazy(() => import("../Line/Line"))
const Barrier = lazy(() => import("../Barrier/Barrier"))
const Bike = lazy(() => import("../Bike/Bike"))
const Warning = lazy(() => import("../Warning/Warning"))
const Status = lazy(() => import("../Status/Status"))
const Warntext = lazy(() => import("../Warntext/Warntext"))
const Stattext = lazy(() => import("../Stattext/Stattext"))
/* eslint-disable react-hooks/exhaustive-deps */

type Location = {
	type: "location"
	latitude: number
	longitude: number
}

type Remarks = {
	code: string | undefined
	summary: string | null | undefined
	text: string | undefined
	type: string | undefined
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

type Arr = {
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

type Props = {
	arr: Arr
}

export const getDelay = (
	delay: number | null | undefined,
	cancelled: boolean | null | undefined
) => {
	if (delay != null) {
		const valueRaw = Math.abs(delay / 60)
		const value = Math.round(valueRaw)
		return value
		// return `${sign}${value}`
	} else if (cancelled) {
		return "X"
	} else {
		return "?"
	}
}

export const getPlanTime = (realtime: string, delay: number, sign: string) => {
	let hours = Number(realtime.substring(0, 2))
	let minutes = Number(realtime.substring(3, 5))
	minutes = sign === "+" ? minutes - delay : sign === "–" ? minutes + delay : minutes
	if (minutes < 0) {
		minutes += 60
		hours -= 1
	}
	if (minutes > 59) {
		minutes -= 60
		hours += 1
	}
	if (hours < 0) {
		hours += 24
	}
	if (hours > 23) {
		hours -= 24
	}
	let hourString = hours < 10 ? `0${hours}` : `${hours}`
	let minuteString = minutes < 10 ? `0${minutes}` : `${minutes}`
	return `${hourString}:${minuteString}`
}

export const getTime = (timestamp: string | undefined | null) => {
	if (timestamp != null) {
		return timestamp.substring(11, 16)
	} else {
		return ""
	}
}

const Arrival = (props: Props) => {
	const [currPosition, setCurrPosition] = useState(null)
	const [trip, setTrip] = useState(undefined)
	const [distance, setDistance] = useState<number|null>(null)
	useEffect(() => {
		const getDistance = () => {
	const pi = 4 * Math.atan(1)
	const { currentTripPosition, stop } = props.arr
	if (currentTripPosition) {
		const { latitude: currLat, longitude: currLng } = currentTripPosition
		fetch(`https://vbb-rest.vercel.app/locations/nearby?latitude=${currLat}&longitude=${currLng}&results=1&language=de`)
		.then(response => response.json())
		.then(stops => {
			if (stops.length > 0 && stops[0].name) {
				setCurrPosition(stops[0])
			}
		})
		.catch(error => console.debug(error))
		const { location } = stop
		const { latitude: stopLat, longitude: stopLng } = location
		const rCurrLat = (pi * currLat) / 180
		const rStopLat = (pi * stopLat) / 180
		const theta = currLng - stopLng
		const rTheta = (pi * theta) / 180
		const cosDist =
			Math.sin(rCurrLat) * Math.sin(rStopLat) +
			Math.cos(rCurrLat) * Math.cos(rStopLat) * Math.cos(rTheta)
		const radDist = Math.acos(cosDist)
		const degDist = (radDist * 180) / pi
		const dist = degDist * 60 * 1.1515
		setDistance(dist)
	}
}
getDistance()
	},[])
	useEffect(() => {
		fetch(`https://vbb-rest.vercel.app/trips/${props.arr.tripId}?language=de`)
		.then(response => response.json())
		.then(data => setTrip(data.trip))
		.catch(error => console.debug(error))
	},[])
	const delayMin = props.arr.cancelled ? getDelay(props.arr.delay, props.arr.cancelled) : getDelay(props.arr.delay, false)
	let delay
	let sign
	if (typeof props.arr.delay === "number" && typeof delayMin === "number") {
		sign = props.arr.delay < 0 ? "–" : props.arr.delay > 0 ? "+" : "±"
		delay = `${sign}${delayMin}`
	} else {
		delay = delayMin
		sign = "±"
	}
	let realtime = getTime(props.arr.when)
	let plantime
	if (props.arr.when != null && props.arr.delay != null) {
		plantime = getPlanTime(realtime, Number(delayMin), sign)
	} else if (props.arr.when != null && delayMin === "?") {
		plantime = realtime
		realtime = ""
	} else {
		plantime =
			getTime(props.arr.formerScheduledWhen) ||
			getTime(props.arr.scheduledWhen) ||
			getTime(props.arr.plannedWhen)
	}
	const { line, provenance, remarks, platform } = props.arr
	return (
		<Fragment>
			<div
				className="row"
				key={props.arr.tripId}
				sx={{ display: "grid", gridTemplateColumns: ["repeat(24,1fr)", "repeat(24,1fr)", "repeat(26,1fr)"] }}
			>
				<Time time={plantime} class="plantime" />
				<Time time={realtime} class="realtime" />
				<div
					className="delay"
					sx={{
						textAlign: ["center", "center", "right"],
						gridColumn: ["17 / span 8", "5 / span 2"],
					}}
				>
					{delay}
				</div>
				<Product line={line} />
				<Line line={line} />
				<div
					className="direction"
					sx={{ textAlign: "left", gridColumn: ["8 / span 13", "11 / span 8"] }}
				>
					{provenance}
				</div>
				<div
					className="platform"
					sx={{
						textAlign: "center",
						gridColumn: ["22 / span 3", "19 / span 2"],
					}}
				>
					{platform}
				</div>
				<Barrier remarks={remarks} />
				<Bike remarks={remarks} />
				<Warning remarks={remarks} />
				<Status remarks={remarks} />
				{line.operator ? <Carrier operator={line.operator} /> : <div></div>}
			</div>
			<div
				className="row row-add"
				key={`add:${props.arr.tripId}`}
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(24, 1fr)",
					borderBottom: ["1px solid #ccc", "1px solid #ccc", "none"],
				}}
			>
				{currPosition && distance && <Distance position={currPosition} distance={distance} />}
				{trip && <Trip trip={trip} stopId={props.arr.stop.id} mode="arr" />}
				<Warntext remarks={remarks} />
				<Stattext remarks={remarks} />
			</div>
		</Fragment>
	)
}

export default Arrival
