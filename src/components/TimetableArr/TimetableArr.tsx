import React, { useRef, useEffect, lazy } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useDebugState } from "use-named-state"
import axios from "axios"
import { getDuration } from "../helpers/helpers"
import ProductsFilter from "../ProductsFilter/ProductsFilter"
const Input = lazy(() => import("../Input/Input"))
const Select = lazy(() => import("../Select/Select"))
const Button = lazy(() => import("../Button/Button"))
const Filter = lazy(() => import("../Filter/Filter"))
const StopBody = lazy(() => import("../StopBody/StopBody"))
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

type Data = Dataset[]

export default function TimetableArr() {
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
					const response = await fetch(
						`https://station-api-jade.vercel.app/?id=${params.id}`
					)
					const station = await response.json()
					const { name } = await station
					navigate(`/arrivals/${params.id}`)
					setStop(station)
					getData(params.id, name)
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
					const response = await fetch(
						`https://station-api-jade.vercel.app/?id=${modifiedId}`
					)
					const station = await response.json()
					const { name } = await station
					navigate(`/arrivals/${modifiedId}`)
					setStop(station)
					getData(modifiedId, name)
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
					const response = await fetch(
						`https://station-api-jade.vercel.app/?id=${initialId}`
					)
					const station = await response.json()
					const { name: initialName } = await station
					navigate(`/arrivals/${initialId}`)
					setStop(station)
					getData(initialId, initialName)
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
		const filteredData = data.filter((arrival) => {
			let decider = false
			if (arrival.hasOwnProperty("provenance") && arrival.provenance) {
				for (let i = 0; i < filterValues.length; i++) {
					if (
						arrival.line.name
							.toLowerCase()
							.includes(filterValues[i].toLowerCase()) ||
						arrival.provenance
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
		const filteredData = data.filter((arrival) => {
			let decider = true
			if (arrival.hasOwnProperty("provenance") && arrival.provenance) {
				for (let i = 0; i < filterValues.length; i++) {
					if (
						arrival.line.name
							.toLowerCase()
							.includes(filterValues[i].toLowerCase()) ||
						arrival.provenance
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
		try {
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
		} catch (error) {
			console.debug(error)
		}
	}
	const setCurrStop = (currStop: Stop) => {
		setStop(currStop)
	}
	const getData = async (id: string, name: string) => {
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
			// const url =
			// `https://sklinkusch-vbbmicro.vercel.app/?station=${id}&duration=${duration}&mode=arr&language=${lang}`
			const url = `https://vbb-rest.vercel.app/stops/${id}/arrivals?language=${lang}&duration=${duration}&express=${express.toString()}&regional=${regional.toString()}&suburban=${suburban.toString()}&subway=${subway.toString()}&tram=${tram.toString()}&bus=${bus.toString()}&ferry=${ferry.toString()}`
			const response = await axios.get(url)
			const { data: resData, status } = await response
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
				setViewData(arrivals)
				setError(null)
			}
		} catch (error) {
			console.debug(error)
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
		<div className="timetable">
			<Input filterStops={getStopSelection} inputField={inputField} />
			<Select
				handleChange={handleChange}
				selection={selection}
				stop={stop}
				mode="arr"
			/>
			<Button handleSubmit={handleSubmit} />
			<Filter
				filterField={filterField}
				filterSelector={filterSelector}
				filterData={filterData}
				mode="arr"
			/>
			<ProductsFilter products={[ express, regional, suburban, subway, tram, bus, ferry ]} productSetters={[ setExpress, setRegional, setSuburban, setSubway, setTram, setBus, setFerry ]} getData={() => getData(stop.id, stop.name)} />
			<StopBody
				stop={stop}
				data={viewData}
				error={error}
				date={date}
				mode="arr"
			/>
		</div>
	)
}
