/** @jsxImportSource theme-ui */
import { Fragment, lazy } from "react"
const Time = lazy(() => import("../Time/Time"))
const Product = lazy(() => import("../Product/Product"))
const Line = lazy(() => import("../Line/Line"))
const Barrier = lazy(() => import("../Barrier/Barrier"))
const Bike = lazy(() => import("../Bike/Bike"))
const Warning = lazy(() => import("../Warning/Warning"))
const Status = lazy(() => import("../Status/Status"))
const Warntext = lazy(() => import("../Warntext/Warntext"))
const Stattext = lazy(() => import("../Stattext/Stattext"))

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
	product: "express" | "tram" | "bus" | "ferry"
}

type Props = {
	dep: {
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
	}
}

export const getDelay = (
	delay: number | null | undefined,
	cancelled: boolean | null | undefined
) => {
	if (delay != null) {
		return Math.floor(delay / 60)
	} else if (cancelled) {
		return "X"
	} else {
		return "?"
	}
}

export const getPlanTime = (realtime: string, delay: number) => {
	let hours = Number(realtime.substring(0, 2))
	let minutes = Number(realtime.substring(3, 5))
	minutes -= delay
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
	let delayMin
	if (props.dep.cancelled) {
		delayMin = getDelay(props.dep.delay, props.dep.cancelled)
	} else {
		delayMin = getDelay(props.dep.delay, false)
	}
	let realtime = getTime(props.dep.when)
	let plantime
	if (props.dep.when != null && props.dep.delay != null) {
		plantime = getPlanTime(realtime, Number(delayMin))
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
					gridTemplateColumns: "repeat(24,1fr)",
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
					{delayMin}
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
				<Warntext remarks={remarks} />
				<Stattext remarks={remarks} />
			</div>
		</Fragment>
	)
}

export default Departure
