/** @jsxImportSource theme-ui */

type Props = {
	distance: number | undefined | null
}

export function Distance({ distance }: Props) {
	if (distance) {
		return (
			<div sx={{ gridColumn: "1 / 25" }}>
				{navigator.language.startsWith("de") ? "Entfernung: " : "Distance: "}
				{distance.toFixed(3)} km
			</div>
		)
	}
	return (
		<div sx={{ gridColumn: "1 / 25" }}>
			{navigator.language.startsWith("de") ? "keine Entfernung" : "No distance"}
		</div>
	)
}
