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

type Operator = {
  type: "operator",
  id: string,
  name: string
}

type Remarks = {
	code: string | undefined
	summary: string | null | undefined
	text: string | undefined
	type: string | undefined
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
	operator: Operator
	product: "regional" | "suburban" | "subway"
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
}

type Dep = {
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
	dep: Dep
}

type SingleStop = {
	type: "stop"
	id: string
	name: string
	location: Location
	distance: number
	stationDHID: string
	products: {
		suburban: boolean
		subway: boolean
		tram: boolean
		bus: boolean
		ferry: boolean
		express: boolean
		regional: boolean
	}
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

const Departure = (props: Props) => {
	const [currPosition, setCurrPosition] = useState(null)
	const [trip, setTrip] = useState(undefined)
	const getDistance = (dep: Dep) => {
	const pi = 4 * Math.atan(1)
	const { currentTripPosition, stop } = dep
	if (currentTripPosition) {
		const { latitude: currLat, longitude: currLng } = currentTripPosition
		fetch(`https://vbb-rest.vercel.app/locations/nearby?latitude=${currLat}&longitude=${currLng}&results=10&language=de`)
		.then(response => response.json())
		.then(data => data.filter((singleStop: SingleStop) => singleStop.products[dep.line.product] === true))
		.then(stops => {
			if (stops.length > 0 && stops[0].name) {
				setCurrPosition(stops[0].name)
			}
		})
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
		return dist
	} else {
		return null
	}
}
	const distance = getDistance(props.dep)
	useEffect(() => {
		fetch(`https://vbb-rest.vercel.app/trips/${props.dep.tripId}?language=de`)
		.then(response => response.json())
		.then(data => setTrip(data.trip))
	},[])
	const delayMin = props.dep.cancelled ? getDelay(props.dep.delay, props.dep.cancelled) : getDelay(props.dep.delay, false)
	let delay
	let sign
	if (typeof props.dep.delay === "number" && typeof delayMin === "number") {
		sign = props.dep.delay < 0 ? "–" : props.dep.delay > 0 ? "+" : "±"
		delay = `${sign}${delayMin}`
	} else {
		delay = delayMin
		sign = "±"
	}
	let realtime = getTime(props.dep.when)
	let plantime
	if (props.dep.when != null && props.dep.delay != null) {
		plantime = getPlanTime(realtime, Number(delayMin), sign)
	} else if (props.dep.when != null && delayMin === "?") {
		plantime = realtime
		realtime = ""
	} else {
		plantime =
			getTime(props.dep.formerScheduledWhen) ||
			getTime(props.dep.scheduledWhen) ||
			getTime(props.dep.plannedWhen)
	}
	const {
		line,
		direction,
		remarks,
		platform,
		plannedPlatform,
		prognosedPlatform,
	} = props.dep
	return (
		<Fragment>
			<div
				className="row"
				key={props.dep.tripId}
				sx={{
					display: "grid",
					gridTemplateColumns: ["repeat(24,1fr)","repeat(24,1fr)","repeat(26,1fr)"],
				}}
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
					{direction}
				</div>
				<div
					className="platform"
					sx={{
						textAlign: "center",
						gridColumn: ["22 / span 3", "19 / span 2"],
					}}
				>
					{platform || plannedPlatform || prognosedPlatform}
				</div>
				<Barrier remarks={remarks} />
				<Bike remarks={remarks} />
				<Warning remarks={remarks} />
				<Status remarks={remarks} />
				<Carrier operator={line.operator} />
			</div>
			<div
				className="row row-add"
				key={`add:${props.dep.tripId}`}
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(24, 1fr)",
					borderBottom: ["1px solid #ccc", "1px solid #ccc", "none"],
				}}
			>
				{currPosition && distance && <Distance position={currPosition} distance={distance} />}
				{trip && <Trip trip={trip} stopId={props.dep.stop.id} mode="dep" />}
				<Warntext remarks={remarks} />
				<Stattext remarks={remarks} />
			</div>
		</Fragment>
	)
}

export default Departure
