/** @jsxImportSource theme-ui */
import React from "react"

type Stop = {
	id: string
	name: string
}

type Props = {
	handleChange: Function
	stop: Stop
	selection: Stop[]
}

export default function Filter(props: Props) {
	const { handleChange, selection, stop } = props
	return (
		<>
			<select
				value={stop.id}
				sx={{
					padding: "5px",
					backgroundColor: "#ccc",
					opacity: 1,
					width: "400px",
					maxWidth: "90%",
					mx: "10px",
				}}
				onChange={(event) => {
					const id = event.target.value
					const stop = selection.filter((stop) => {
						return stop.id === id
					})[0]
					return handleChange(stop)
				}}
			>
				{selection &&
					selection.length >= 1 &&
					selection.map((myStop, index) => (
						<option
							key={`${myStop.id}-${index}`}
							value={myStop.id}
						>
							{myStop.name}
						</option>
					))}
			</select>
		</>
	)
}
