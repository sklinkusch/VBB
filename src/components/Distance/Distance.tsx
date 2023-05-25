/** @jsxImportSource theme-ui */

type Props = {
	position: {
		name: string
	}
	distance: number
}

export function Distance({ position, distance }: Props) {
	if (position && distance) {
		return (
			<div sx={{ gridColumn: "1 / 25" }}>
				{navigator.language.startsWith("de") ? "Aktuelle Position: " : "Current Position: "}
				<span>{position.name}</span>{" "}
				({distance.toFixed(3)} km)
			</div>
		)
	}
	return (<div></div>)
}
