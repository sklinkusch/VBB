/** @jsxImportSource theme-ui */
import { useRef, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useDebugState } from "use-named-state"
import axios from "axios"
import { getDuration } from "../helpers/helpers"
import Input from "../Input/Input"
import Select from "../Select/Select"
import Button from "../Button/Button"
import Filter from "../Filter/Filter"
import StopBody from "../StopBody/StopBody"
// const Input = lazy(() => import("./Input"))
// const Select = lazy(() => import("./Select"))
// const Button = lazy(() => import("./Button"))
// const Filter = lazy(() => import("./Filter"))
// const StopBody = lazy(() => import("./StopBody"))
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

type Data = Dataset[]

export default function Timetable() {
	const [selection, setSelection] = useDebugState<Stop[]>("selection", [])
	const [stop, setStop] = useDebugState<Stop>("stop", {
		id: "",
		name: "",
		type: "",
	})
	const [data, setData] = useDebugState<Data>("data", [])
	const [date, setDate] = useDebugState<string>("date", "")
	const [viewData, setViewData] = useDebugState<Data>("viewData", [])
	const [error, setError] = useDebugState<any>("error", null)
	const params = useParams()
	const navigate = useNavigate()
	useEffect(() => {
		async function findInitialStop() {
			if (
				params.hasOwnProperty("id") &&
				typeof params.id === "string" &&
				params.id.length === 9
			) {
				const response = await fetch(
					`https://station-api-jade.vercel.app/?id=${params.id}`
				)
				const station = await response.json()
				const { name } = await station
				navigate(`/departures/${params.id}`)
				setStop(station)
				getData(params.id, name)
				document.title = navigator.language.startsWith("de")
					? `Abfahrten ab ${name}`
					: `Departures from ${name}`
				const stopSelection = [station]
				setSelection(stopSelection)
			} else if (
				params.hasOwnProperty("id") &&
				typeof params.id === 'string' &&
				params.id.length === 12
			) {
				const modifiedId = `${params.id.slice(0, 1)}${params.id.slice(-8)}`
				const response = await fetch(
					`https://station-api-jade.vercel.app/?id=${modifiedId}`
				)
				const station = await response.json()
				const { name } = await station
				navigate(`/departures/${modifiedId}`)
				setStop(station)
				getData(modifiedId, name)
				document.title = navigator.language.startsWith("de")
					? `Abfahrten ab ${name}`
					: `Departures from ${name}`
				const stopSelection = [station]
				setSelection(stopSelection)
			} else {
				const initialId = "900100011"
				const response = await fetch(
					`https://station-api-jade.vercel.app/?id=${initialId}`
				)
				const station = await response.json()
				const { name: initialName } = await station
				navigate(`/departures/${initialId}`)
				setStop(station)
				getData(initialId, initialName)
				document.title = navigator.language.startsWith("de")
					? `Abfahrten ab ${initialName}`
					: `Departures from ${initialName}`
				const stopSelection = [station]
				setSelection(stopSelection)
			}
		}
		findInitialStop()
	}, [])
	const inputField = useRef<HTMLInputElement>(null)
	const filterField = useRef<HTMLInputElement>(null)
	const filterSelector = useRef<HTMLSelectElement>(null)
	const filterData = () => {
		const fieldCurrent = filterField.current as HTMLInputElement
		const { value: fieldValue } = fieldCurrent
		const filterValues = fieldValue.split(" ")
		const selectorCurrent = filterSelector.current as HTMLSelectElement
		const { value: filterMode } = selectorCurrent
		if (filterValues.length > 0) {
			if (filterMode === "OR") {
				filterOr(filterValues)
			} else {
				filterAnd(filterValues)
			}
		} else {
			noFilters()
		}
	}
	const filterOr = (filterValues: string[]) => {
		const filteredData = data.filter((departure) => {
			let decider = false
			if (departure.hasOwnProperty("direction") && departure.direction) {
				for (let i = 0; i < filterValues.length; i++) {
					if (
						departure.line.name
							.toLowerCase()
							.includes(filterValues[i].toLowerCase()) ||
						departure.direction
							.toLowerCase()
							.includes(filterValues[i].toLowerCase())
					) {
						decider = true
						break
					}
				}
			}
			return decider
		})
		setViewData(filteredData)
	}
	const filterAnd = (filterValues: string[]) => {
		const filteredData = data.filter((departure) => {
			let decider = true
			if (departure.hasOwnProperty("direction") && departure.direction) {
				for (let i = 0; i < filterValues.length; i++) {
					if (
						departure.line.name
							.toLowerCase()
							.includes(filterValues[i].toLowerCase()) ||
						departure.direction
							.toLowerCase()
							.includes(filterValues[i].toLowerCase())
					) {
						continue
					} else {
						decider = false
						break
					}
				}
			}
			return decider
		})
		setViewData(filteredData)
	}
	const noFilters = () => {
		setViewData(data)
	}
	const getStopSelection = async (event: {
		key: string
		target: { value: string }
	}) => {
		const searchValue = event.target.value
		if (searchValue.length > 4) {
			const response = await fetch(
				`https://station-api-jade.vercel.app/?station=${searchValue}`
			)
			const data = await response.json()
			const newData = [stop, ...data]
			setSelection(newData)
		} else {
			setSelection([stop])
		}
	}
	const setCurrStop = (currStop: Stop) => {
		setStop(currStop)
	}
	const getData = async (id: string, name: string) => {
		const type = name.startsWith("Berlin") ? "BLN" : "BBG"
		const duration = getDuration(type)
		let lang = "de"
		const browserLang = navigator.language
		if (browserLang.startsWith("de")) {
			lang = "de"
		} else {
			lang = "en"
		}
		// const url =
		// `https://sklinkusch-vbbmicro.vercel.app/?station=${id}&duration=${duration}&language=${lang}`
		const url = `https://vbb-rest.vercel.app/stops/${id}/departures?language=${lang}&duration=${duration}`
		const response = await axios.get(url)
		const { data: resData, status } = await response
		if (status === 500 || status !== 200) {
			setError(`HTTP status code: ${status}`)
			setData([])
		} else {
			const { departures } = resData
			const myDate = new Date().toLocaleString("de-DE", {
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
				hour: "2-digit",
				minute: "2-digit",
				timeZone: "Europe/Berlin",
			})
			document.title =
				lang === "de" ? `Abfahrten ab ${name}` : `Departures from ${name}`
			setDate(myDate)
			setData(departures)
			setViewData(departures)
			setError(null)
		}
	}
	const handleChange = (currentStop: Stop) => {
		setCurrStop(currentStop)
		const { id: myStopId, name: currentStopName } = currentStop
		getData(myStopId, currentStopName)
		const inputCurrent = inputField.current as HTMLInputElement
		inputCurrent.value = ""
		const filterFieldCurrent = filterField.current as HTMLInputElement
		filterFieldCurrent.value = ""
		const filterSelectorCurrent = filterSelector.current as HTMLSelectElement
		filterSelectorCurrent.value = "OR"
	}
	const handleSubmit = () => {
		getData(stop.id, stop.name)
		const inputCurrent = inputField.current as HTMLInputElement
		inputCurrent.value = ""
		const filterFieldCurrent = filterField.current as HTMLInputElement
		filterFieldCurrent.value = ""
		const filterSelectorCurrent = filterSelector.current as HTMLSelectElement
		filterSelectorCurrent.value = "OR"
	}
	// useEffect(() => {
	//   getData(stop);
	// }, []);
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
			<Filter
				filterField={filterField}
				filterSelector={filterSelector}
				filterData={filterData}
				mode="dep"
			/>
			<StopBody
				stop={stop}
				data={viewData}
				error={error}
				date={date}
				mode="dep"
			/>
		</div>
	)
}
