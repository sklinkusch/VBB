/** @jsxImportSource theme-ui */
import React, { useRef, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useDebugState } from "use-named-state"
// import axios from "axios"
import { getDuration } from "../helpers/helpers"
import Input from "../Input/Input"
import Select from "../Select/Select"
import Button from "../Button/Button"
import Filter from "../Filter/Filter"
import ProductsFilter from "../ProductsFilter/ProductsFilter"
import StopBody from "../StopBody/StopBody"
/* eslint-disable react-hooks/exhaustive-deps */

type Location = {
	type: "location"
	latitude: number
	longitude: number
}

type Remarks = {
	code: string | undefined
	summary: string | null | undefined
	text: string
	type: string
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

type Dataset = {
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

type Stop = {
	id: string
	name: string
	type?: string
}

type Options = {
	express?: boolean
	regional?: boolean
	suburban?: boolean
	subway?: boolean
	tram?: boolean
	bus?: boolean
	ferry?: boolean
	direction?: string
}

type Data = Dataset[]

export default function TimetableArr() {
	const [selection, setSelection] = useDebugState<Stop[]>("selection", [])
	const [filterSelection, setFilterSelection] = useDebugState<Stop[]>("filterSelection", [])
	const [stop, setStop] = useDebugState<Stop>("stop", {
		id: "",
		name: "",
		type: "",
	})
	const [filterStop, setFilterStop] = useDebugState<Stop>("filterStop", { id: "0", name: "⸺", type: "" })
	const [data, setData] = useDebugState<Data>("data", [])
	const [date, setDate] = useDebugState<string>("date", "")
	const [error, setError] = useDebugState<any>("error", null)
	const [express, setExpress] = useDebugState<boolean>("express", true)
	const [regional, setRegional] = useDebugState<boolean>("regional", true)
	const [suburban, setSuburban] = useDebugState<boolean>("suburban", true)
	const [subway, setSubway] = useDebugState<boolean>("subway", true)
	const [tram, setTram] = useDebugState<boolean>("tram", true)
	const [bus, setBus] = useDebugState<boolean>("bus", true)
	const [ferry, setFerry] = useDebugState<boolean>("ferry", true)
	const params = useParams()
	const navigate = useNavigate()
	useEffect(() => {
		async function findInitialStop() {
			if (
				params.hasOwnProperty("id") &&
				typeof params.id === "string" &&
				params.id.length === 9
			) {
				try {
					// const stationUrl = `https://station-api-jade.vercel.app/?id=${params.id}`
					const stationUrl = `https://vbb-rest.vercel.app/stops/${params.id}?language=de`
					const response = await fetch(
						stationUrl
					)
					const station = await response.json()
					const { name } = await station
					navigate(`/arrivals/${params.id}`)
					setStop(station)
					getData(params.id, name, {})
					document.title = navigator.language.startsWith("de")
						? `Ankünfte an ${name}`
						: `Arrivals at ${name}`
					const stopSelection = [station]
					setSelection(stopSelection)
				} catch (error) {
					console.debug(error)
				}
			} else if (
				params.hasOwnProperty("id") &&
				typeof params.id === 'string' &&
				params.id.length === 12
			) {
				try {
					const modifiedId = `${params.id.slice(0,1)}${params.id.slice(-8)}`
					// const stationUrl = `https://station-api-jade.vercel.app/?id=${modifiedId}`
					const stationUrl = `https://vbb-rest.vercel.app/stops/${modifiedId}?language=de`
					const response = await fetch(
						stationUrl
					)
					const station = await response.json()
					const { name } = await station
					navigate(`/arrivals/${modifiedId}`)
					setStop(station)
					getData(modifiedId, name, {})
					document.title = navigator.language.startsWith("de")
						? `Ankünfte an ${name}`
						: `Arrivals at ${name}`
					const stopSelection = [station]
					setSelection(stopSelection)
				} catch (error) {
					console.debug(error)
				}
			} else {
				try {
					const initialId = "900100011"
					// const stationUrl =
					// `https://station-api-jade.vercel.app/?id=${initialId}`
					const stationUrl = `https://vbb-rest.vercel.app/stops/${initialId}?language=de`
					const response = await fetch(
						stationUrl
					)
					const station = await response.json()
					const { name: initialName } = await station
					navigate(`/arrivals/${initialId}`)
					setStop(station)
					getData(initialId, initialName, {})
					document.title = navigator.language.startsWith("de")
						? `Ankünfte an ${initialName}`
						: `Arrivals at ${initialName}`
					const stopSelection = [station]
					setSelection(stopSelection)
				} catch (error) {
					console.debug(error)
				}
			}
		}
		findInitialStop()
	}, [])
	const inputField = useRef<HTMLInputElement>(null)
	const viaInputField = useRef<HTMLInputElement>(null)
	const getStopSelection = async (event: {
		key: string
		target: { value: string }
	}) => {
		const searchValue = event.target.value
		try {
			if (searchValue.length > 4) {
				// const getStopsUrl = `https://station-api-jade.vercel.app/?station=${searchValue}`
				const getStopsUrl = `https://vbb-rest.vercel.app/locations?query=${searchValue}&results=15&fuzzy=true&stops=true&addresses=false&poi=false&language=de&linesOfStops=true`
				const response = await fetch(
					getStopsUrl
				)
				const data = await response.json()
				const newData = [stop, ...data]
				setSelection(newData)
			} else {
				setSelection([stop])
			}
		} catch (error) {
			console.debug(error)
		}
	}
	const getFilterStopSelection = async (event: {
		key: string
		target: { value: string }
	}) => {
		const searchValue = event.target.value
		try {
			const nullElement = { id: "0", name: "⸺", type: "" }
			if (searchValue.length >= 3) {
				// const getStopsUrl = `https://station-api-jade.vercel.app/?station=${searchValue}`
				const getStopsUrl = `https://vbb-rest.vercel.app/locations?query=${searchValue}&results=15&fuzzy=true&stops=true&addresses=false&poi=false&language=de&linesOfStops=true`
				const response = await fetch(
					getStopsUrl
				)
				const fdata = await response.json()
				const newData = filterStop.id !== "0"
					? [ nullElement, filterStop, ...fdata ]
					: [ nullElement, ...fdata ]
				setFilterSelection(newData)
			} else if (filterStop.id !== "0") {
				const newData = [ nullElement, filterStop ]
				setFilterSelection(newData)
			} else {
				setFilterSelection([nullElement])
			}
		} catch (error) {
			console.debug(error)
		}
	}
	const setCurrStop = (currStop: Stop) => {
		setStop(currStop)
	}
	const getData = async (id: string, name: string, options: Options) => {
		try {
			const type = name.startsWith("Berlin") ? "BLN" : "BBG"
			const duration = getDuration(type)
			let lang = "de"
			const browserLang = navigator.language
			if (browserLang.startsWith("de")) {
				lang = "de"
			} else {
				lang = "en"
			}
			const direction = options.direction
				? options.direction !== "0"
					? parseInt(options.direction,10)
					: null
				: filterStop.id !== "0"
						? parseInt(filterStop.id, 10)
						: null
			const directionSnippet = typeof direction === 'number'
				? `&direction=${direction}`
				: ''
			// const url =
			// `https://sklinkusch-vbbmicro.vercel.app/?station=${id}&duration=${duration}&mode=arr&language=${lang}`
			const url = `https://vbb-rest.vercel.app/stops/${id}/arrivals?language=${lang}&duration=${duration}&express=${typeof options.express === 'boolean' ? options.express.toString() : express.toString()}&regional=${typeof options.regional === 'boolean' ? options.regional.toString() : regional.toString()}&suburban=${typeof options.suburban === 'boolean' ? options.suburban.toString() : suburban.toString()}&subway=${typeof options.subway === 'boolean' ? options.subway.toString() : subway.toString()}&tram=${typeof options.tram === 'boolean' ? options.tram.toString() : tram.toString()}&bus=${typeof options.bus === 'boolean' ? options.bus.toString() : bus.toString()}&ferry=${typeof options.ferry === 'boolean' ? options.ferry.toString() : ferry.toString()}${directionSnippet}`
			const response = await fetch(url)
			const { status } = await response
			const resData = await response.json()
			if (status === 500 || status !== 200) {
				setError(`HTTP status code: ${status}`)
				setData([])
			} else {
				const myDate = new Date().toLocaleString("de-DE", {
					year: "numeric",
					month: "2-digit",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					timeZone: "Europe/Berlin",
				})
				const { arrivals } = resData
				document.title =
					lang === "de" ? `Ankünfte an ${name}` : `Arrivals at ${name}`
				setDate(myDate)
				setData(arrivals)
				setError(null)
			}
		} catch (error) {
			console.debug(error)
		}
	}
	const handleChange = (currentStop: Stop) => {
		setCurrStop(currentStop)
		const { id: myStopId, name: currentStopName } = currentStop
		getData(myStopId, currentStopName, {})
		const inputCurrent = inputField.current as HTMLInputElement
		inputCurrent.value = ""
	}
	const handleFilterChange = (currentStop: Stop) => {
		setFilterStop(currentStop)
		if (currentStop.id !== "0") {
			getData(stop.id, stop.name, { direction: currentStop.id })
		} else {
			getData(stop.id, stop.name, {})
		}
		const viaInputCurrent = viaInputField.current as HTMLInputElement
		viaInputCurrent.value = ""
	}
	const handleSubmit = () => {
		getData(stop.id, stop.name, {})
		const inputCurrent = inputField.current as HTMLInputElement
		inputCurrent.value = ""
	}
	return (
		<div className="timetable">
			<Input filterStops={getStopSelection} inputField={inputField} />
			<Select
				handleChange={handleChange}
				selection={selection}
				stop={stop}
				mode="arr"
			/>
			<Button handleSubmit={handleSubmit} />
			<div>
				<span sx={{ display: "inline-block", mr: "0.2rem", fontStyle: "italic", fontWeight: 700 }}>via</span>
				<Input filterStops={getFilterStopSelection} inputField={viaInputField} />
				<Filter
					handleChange={handleFilterChange}
					selection={filterSelection}
					stop={filterStop}
				/>
			</div>
			<ProductsFilter products={[ express, regional, suburban, subway, tram, bus, ferry ]} productSetters={[ setExpress, setRegional, setSuburban, setSubway, setTram, setBus, setFerry ]} getData={(options: Options) => getData(stop.id, stop.name, options)} />
			<StopBody
				stop={stop}
				data={data}
				error={error}
				date={date}
				mode="arr"
			/>
		</div>
	)
}
