/** @jsxImportSource theme-ui */
import { useRef, useEffect } from "react"
import { useParams, useSearchParams, useNavigate } from "react-router-dom"
import { useDebugState } from "use-named-state"
// import axios from "axios"
import { getDuration } from "../helpers/helpers"
import Input from "../Input/Input"
import Select from "../Select/Select"
import Button from "../Button/Button"
import Filter from "../Filter/Filter"
import ProductsFilter from "../ProductsFilter/ProductsFilter"
import StopBody from "../StopBody/StopBody"
import TimeSelect from "../TimeSelect/TimeSelect"
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
	direction: string | null
	time?: string
}

type Data = Dataset[]

export default function Timetable() {
	const [selection, setSelection] = useDebugState<Stop[]>("selection", [])
	const [filterSelection, setFilterSelection] = useDebugState<(Stop)[]>("filterSelection", [])
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
	const [time, setTime] = useDebugState<string>("time", new Date().toLocaleString('sv', { timeZone: 'Europe/Berlin', minute: '2-digit', hour: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' }).replace(" ", "T"))
	const params = useParams()
	const [searchParams, setSearchParams] = useSearchParams()
	const navigate = useNavigate()
	useEffect(() => {
		async function findInitialStop() {
			if (
				params.hasOwnProperty("id") &&
				typeof params.id === "string" &&
				params.id.length === 9
			) {
				try {
					// const stationUrl =
					// `https://station-api-jade.vercel.app/?id=${params.id}`
					const stationUrl = `https://vbb-rest.vercel.app/stops/${params.id}?language=de`
					const response = await fetch(
						stationUrl
					)
					const station = await response.json()
					const { name } = await station
					navigate(`/departures/${params.id}`)
					setStop(station)
					const filterId = searchParams.has('direction') && searchParams.get('direction') ? searchParams.get('direction')  : "0";
					if (typeof filterId === 'string' && filterId !== "0") {
						const filterUrl = `https://vbb-rest.vercel.app/stops/${filterId}?language=de`
						const filterResponse = await fetch(filterUrl)
						const filterStation = await filterResponse.json()
						const { name: filterName } = await filterStation
						setFilterStop({ id: filterId, name: filterName, type: '' })
					} else {
						setFilterStop({ id: '0', name: '⸺', type: '' });
					}
					getData(params.id, name, { direction: filterId })
					document.title = navigator.language.startsWith("de")
					? `Abfahrten ab ${name}`
					: `Departures from ${name}`
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
					const modifiedId = `${params.id.slice(0, 1)}${params.id.slice(-8)}`
					// const stationUrl =
					// `https://station-api-jade.vercel.app/?id=${modifiedId}`
					const stationUrl = `https://vbb-rest.vercel.app/stops/${modifiedId}?language=de`
					const response = await fetch(
						stationUrl
					)
					const station = await response.json()
					const { name } = await station
					navigate(`/departures/${modifiedId}`)
					setStop(station)
					getData(modifiedId, name, { direction: "0" })
					document.title = navigator.language.startsWith("de")
						? `Abfahrten ab ${name}`
						: `Departures from ${name}`
					const stopSelection = [station]
					setSelection(stopSelection)
				} catch (error) {
					console.debug(error)
				}
			} else {
				try {
					const initialId = "900100011"
					// const stationUrl = `https://station-api-jade.vercel.app/?id=${initialId}`
					const stationUrl = `https://vbb-rest.vercel.app/stops/${initialId}?language=de`
					const response = await fetch(
						stationUrl
					)
					const station = await response.json()
					const { name: initialName } = await station
					navigate(`/departures/${initialId}`)
					setStop(station)
					getData(initialId, initialName, { direction: "0" })
					document.title = navigator.language.startsWith("de")
						? `Abfahrten ab ${initialName}`
						: `Departures from ${initialName}`
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
			if (searchValue.length >= 3) {
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
	const getType = (name: string) => {
		if (name.startsWith("Berlin")) {
			return "BLN"
		}
		if (name.includes("(Berlin)")) {
			return "BLN"
		}
		if (name.includes("Berlin Hauptbahnhof")) {
			return "BLN"
		}
		return "BBG"
	}
	const getData = async (id: string, name: string, options: Options) => {
		try {
			const type = getType(name)
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
			if ((id === stop.id || date === '') && !options.time) {
				const myDate = new Date().toLocaleString("de-DE", {
					year: "numeric",
					month: "2-digit",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					timeZone: "Europe/Berlin",
				})
				const myTime = new Date().toLocaleString('sv', {
					year: "numeric",
					month: "2-digit",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					timeZone: "Europe/Berlin",
				}).replace(' ', 'T')
				setDate(myDate)
				setTime(myTime)
			}
			// const url =
			// `https://sklinkusch-vbbmicro.vercel.app/?station=${id}&duration=${duration}&language=${lang}`
			const url = `https://vbb-rest.vercel.app/stops/${id}/departures?language=${lang}&duration=${duration}&express=${typeof options.express === 'boolean' ? options.express.toString() : express.toString()}&regional=${typeof options.regional === 'boolean' ? options.regional.toString() : regional.toString()}&suburban=${typeof options.suburban === 'boolean' ? options.suburban.toString() : suburban.toString()}&subway=${typeof options.subway === 'boolean' ? options.subway.toString() : subway.toString()}&tram=${typeof options.tram === 'boolean' ? options.tram.toString() : tram.toString()}&bus=${typeof options.bus === 'boolean' ? options.bus.toString() : bus.toString()}&ferry=${typeof options.ferry === 'boolean' ? options.ferry.toString() : ferry.toString()}${directionSnippet}&when=${typeof options.time === 'string' ? new Date(options.time).toISOString() : new Date(time).toISOString()}`
			const response = await fetch(url)
			const {status } = await response
			const resData = await response.json()
			if (status === 500 || status !== 200) {
				setError(`HTTP status code: ${status}`)
				setData([])
			} else {
				const { departures } = resData
				document.title =
				lang === "de" ? `Abfahrten ab ${name}` : `Departures from ${name}`
				setData(departures)
				// setViewData(departures)
				setError(null)
			}
		} catch (error) {
			console.debug(error)
		}
	}
	const handleChange = (currentStop: Stop) => {
		setCurrStop(currentStop)
		const { id: myStopId, name: currentStopName } = currentStop
		getData(myStopId, currentStopName, { direction: "0" })
		const inputCurrent = inputField.current as HTMLInputElement
		inputCurrent.value = ""
	}
	const handleFilterChange = (currentStop: Stop) => {
		if (currentStop.id !== "0") {
			setFilterStop(currentStop)
			setSearchParams({ direction: currentStop.id })
			getData(stop.id, stop.name, { direction: currentStop.id })
		} else {
			setFilterStop({ id: "0", name: "⸺", type: "" })
			setSearchParams({ direction: '0'})
			getData(stop.id, stop.name, { direction: "0" })
		}
		const viaInputCurrent = viaInputField.current as HTMLInputElement
		viaInputCurrent.value = ""
	}
	const handleSubmit = () => {
		const currentTime = new Date().toLocaleString('de-DE', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			timeZone: 'Europe/Berlin',
		});
		const currentTimeISO = new Date().toLocaleString('sv', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			timeZone: 'Europe/Berlin',
		}).replace(' ', 'T');
		setDate(currentTime);
		setTime(currentTimeISO);
		getData(stop.id, stop.name, { direction: filterStop.id, time: currentTimeISO});
		const inputCurrent = inputField.current as HTMLInputElement
		inputCurrent.value = ""
	}
	const handleTimeChange = (value: string) => {
		const newDateTime = new Date(value).toLocaleString('sv', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Berlin' }).replace(' ', 'T')
		const formattedDateTime = new Date(value).toLocaleString('de-DE', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Berlin' })
		setTime(newDateTime)
		setDate(formattedDateTime)
		getData(stop.id, stop.name, { direction: filterStop.id, time: newDateTime })
	}
	return (
		<div className="timetable" sx={{ minHeight: "75vh" }}>
			{inputField && (
				<Input filterStops={getStopSelection} inputField={inputField} />
			)}
			<Select
				handleChange={handleChange}
				selection={selection}
				stop={stop}
				mode="dep"
			/>
			<Button handleSubmit={handleSubmit} />
			<div>
				<span sx={{ display: "inline-block", mr: "0.2rem", fontStyle: "italic", fontWeight: 700 }}>via</span>
				<Input filterStops={getFilterStopSelection} inputField={viaInputField} />
				<Filter handleChange={handleFilterChange} selection={filterSelection} stop={filterStop} />
			</div>
			<ProductsFilter 
				products={
					[ 
						express, 
						regional, 
						suburban, 
						subway, 
						tram, 
						bus, 
						ferry 
					]
				} 
				productSetters={
					[ 
						setExpress, 
						setRegional, 
						setSuburban, 
						setSubway, 
						setTram, 
						setBus, 
						setFerry 
					]
				} 
				getData={(options: Options) => getData(stop.id, stop.name, options)} 
				searchParams={searchParams}
				setSearchParams={setSearchParams}
			/>
			<TimeSelect time={time} setTime={handleTimeChange} />
			<StopBody
				stop={stop}
				data={data}
				error={error}
				date={date}
				mode="dep"
			/>
		</div>
	)
}
