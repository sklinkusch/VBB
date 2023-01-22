/** @jsxImportSource theme-ui */
import { Fragment } from "react"
import { useNavigate } from "react-router-dom"

type Stop = {
	id: string
	name: string
}

type Mode = "dep" | "arr"

type Props = {
	handleChange: Function
	mode: Mode
	stop: Stop
	selection: Stop[]
}

export default function Select(props: Props) {
	const { handleChange, selection, stop, mode } = props
	const navigate = useNavigate()
	return (
		<Fragment>
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
					const stop = selection.filter((stop) => stop.id === id)[0]
					return handleChange(stop)
				}}
			>
				{selection &&
					selection.length >= 1 &&
					selection.map((stop, index) => (
						<option
							onClick={() =>
								navigate(
									mode === "arr"
										? `/arrivals/${stop.id}`
										: `/departures/${stop.id}`
								)
							}
							key={`${stop.id}-${index}`}
							value={stop.id}
						>
							{stop.name}
						</option>
					))}
			</select>
		</Fragment>
	)
}
