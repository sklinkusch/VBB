import React, { Fragment, useEffect } from "react"
import { useDebugState } from "use-named-state"
import { getDuration } from "../helpers/helpers"
import StopName from "../StopName/StopName"
import Error from "../Error/Error"
import TableData from "../TableData/TableData"
import { changeStopObject } from "../stopHelpers"
import { changeStationObject } from "../stationHelpers"
/* eslint-disable react-hooks/exhaustive-deps */

type Remarks = {
	code: string | undefined
	summary: string | null | undefined
	text: string
	type: string
	validFrom: string | undefined
	validUntil: string | undefined
}[]

type Dataset = {
	cancelled: boolean | undefined
	delay: number | null
	direction: string | null
	formerScheduledWhen?: string
	line: {
		express: boolean
		metro: boolean
		mode: string
		name: string
		night: boolean
		product: string
		type: string
	}
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

type Data = Dataset[]

type Stop = {
	id: string
	name: string
	type?: string
}

type Props = {
	data: Data
	date: string
	error: string
	mode: string
	stop: Stop
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
		return undefined
	}
	const splitArray = async (data: Data) => {
		if (data !== undefined && data.length > 0) {
			const dataModified = await data.map((e) => {
				const newStationObject = changeStationObject(mode, e)
				const newStopObject = changeStopObject(mode, newStationObject)
				return newStopObject
			})
			const stopsRaw = await dataModified.map((e) => e.stop.name)
			const stopsContracted = await stopsRaw
				.filter((val, ind, arr) => arr.indexOf(val) === ind)
				.sort()
			const resultArray = await dataModified.reduce(
				(acc: Dataset[][], curr: Dataset) => {
					const arr = [...acc]
					const index = stopsContracted.indexOf(curr.stop.name)
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
				await setNewData(await resultArray)
			}
		}
	}
	useEffect(() => {
		async function fetchData() {
			const sortedData = await sortData(data)
			if (typeof sortedData === "object") await splitArray(await sortedData)
		}
		fetchData()
	}, [data])
	const text = `In the next ${getDuration(stop.type || "BLN")} minutes, no ${
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
