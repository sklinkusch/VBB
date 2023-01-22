import React, { Fragment, useEffect } from "react"
import { useDebugState } from "use-named-state"
import { getDuration } from "../helpers/helpers"
import StopName from "../StopName/StopName"
import Error from "../Error/Error"
import TableData from "../TableData/TableData"
import { changeStopObject } from "../stopHelpers"
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
	order?: number
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

type Data = Dataset[]

type Stop = {
	id: string
	name: string
	type?: string
}

type Mode = "dep" | "arr"

type Props = {
	data: Data
	date: string
	error: string
	mode: Mode
	stop: Stop
}

type Intermediate = {
	name: string
	order: number | null | undefined
}

export default function StopBody({
	data,
	date,
	error,
	stop,
	mode = "dep",
}: Props) {
	const [newData, setNewData] = useDebugState<Dataset[][]>("newData", [])
	const sortData = (data: Data) => {
		if (data !== null && data !== undefined && data.length > 0) {
			const tempArray = data.map((element, index) => {
				const stopName = element.stop.name.toLowerCase()
				const product = element.line.product
				const time =
					element.when ||
					element.scheduledWhen ||
					element.formerScheduledWhen ||
					element.plannedWhen
				return { index, stop: stopName, product, time }
			})
			const sortedTempArray = tempArray.sort((a, b) => {
				const { stop: aStop, product: aProduct, time: aTime } = a
				const { stop: bStop, product: bProduct, time: bTime } = b
				if (aStop < bStop) {
					return -1
				} else if (bStop < aStop) {
					return +1
				} else {
					const sortingArray = [
						"express",
						"regional",
						"suburban",
						"subway",
						"tram",
						"bus",
						"ferry",
					]
					if (sortingArray.indexOf(aProduct) < sortingArray.indexOf(bProduct)) {
						return -1
					} else if (
						sortingArray.indexOf(bProduct) < sortingArray.indexOf(aProduct)
					) {
						return +1
					} else if (aTime && bTime && aTime < bTime) {
						return -1
					} else if (aTime && bTime && bTime < aTime) {
						return +1
					} else {
						return 0
					}
				}
			})
			const sortedDataArray = sortedTempArray.map((e) => data[e.index])
			return sortedDataArray
		}
		return []
	}
	const splitArray = async (data: Data) => {
		if (data !== undefined && data.length > 0) {
			const dataModified = data.map((e) => {
				const newStopObject = changeStopObject(mode, e)
				return newStopObject
			})
			const stopsRaw = await dataModified.map((e) => ({
				name: e.stop.name,
				order: e.order,
			}))
			const intermediateArray = await stopsRaw.reduce(
				(acc: Intermediate[], item: Intermediate) => {
					const arr = acc.slice()
					const i = arr.findIndex(
						(x) => x.name === item.name && x.order === item.order
					)
					if (i <= -1) arr.push(item)
					return arr
				},
				[]
			)
			const stopsContracted = await intermediateArray.sort((a, b) => {
				const { name: aName, order: aOrder } = a
				const { name: bName, order: bOrder } = b
				if (
					typeof aOrder === "number" &&
					typeof bOrder === "number" &&
					aOrder < bOrder
				)
					return -1
				if (
					typeof aOrder === "number" &&
					typeof bOrder === "number" &&
					bOrder < aOrder
				)
					return +1
				if (
					typeof aName === "string" &&
					typeof bName === "string" &&
					aName.toLowerCase() < bName.toLowerCase()
				)
					return -1
				if (
					typeof bName === "string" &&
					typeof aName === "string" &&
					bName.toLowerCase() < aName.toLowerCase()
				)
					return +1
				return 0
			})
			const resultArray = await dataModified.reduce(
				(acc: Dataset[][], curr: any) => {
					const arr = [...acc]
					const index = stopsContracted.findIndex(
						(x) => x.name === curr.stop.name && x.order === curr.order
					)
					if (Array.isArray(arr[index])) {
						arr[index].push(curr)
					} else {
						arr[index] = [curr]
					}
					return arr
				},
				[]
			)
			if ((await resultArray.length) > 0) {
				return await resultArray
			}
		}
	}
	const sortCompressedArray = (compressedData: Data[]) => {
		return compressedData.sort((a, b) => {
			const aOrder = a[0].order || undefined
			const bOrder = b[0].order || undefined
			const aStop =
				typeof a[0].stop.name === "string" ? a[0].stop.name.toLowerCase() : ""
			const bStop =
				typeof b[0].stop.name === "string" ? b[0].stop.name.toLowerCase() : ""
			if (typeof aOrder === "number" && typeof bOrder === "undefined") {
				return -1
			} else if (typeof aOrder === "undefined" && typeof bOrder === "number") {
				return +1
			} else if (typeof aOrder === "number" && typeof bOrder === "number") {
				return aOrder - bOrder
			} else if (aStop < bStop) {
				return -1
			} else if (bStop < aStop) {
				return +1
			} else {
				return 0
			}
		})
	}
	useEffect(() => {
		async function fetchData() {
			const sortedData = await sortData(data)
			const compressedData =
				sortedData && typeof sortedData === "object"
					? await splitArray(await sortedData)
					: []
			const sortedCompressedData =
				typeof compressedData === "object" &&
				Array.isArray(compressedData) &&
				(await compressedData.length) >= 1
					? await sortCompressedArray(await compressedData)
					: []
			await setNewData(await sortedCompressedData)
		}
		fetchData()
	}, [data])
	const type = stop.name.startsWith("Berlin") ? "BLN" : "BBG"
	const text = `In the next ${getDuration(type)} minutes, no ${
		mode === "dep" ? "departures" : "arrivals"
	} are planned for the station or stop you have chosen`
	return (
		<Fragment>
			{stop && <StopName stop={stop} date={date} element="h2" />}
			{error ? (
				<Error />
			) : newData !== undefined && newData !== null && newData.length > 0 ? (
				newData.map((depset = [], index) => {
					if (depset.length > 0) {
						return (
							<TableData
								stop={depset[0].stop}
								data={depset}
								key={index}
								mode={mode}
							/>
						)
					}
					return null
				})
			) : (
				<div>{text}</div>
			)}
		</Fragment>
	)
}
