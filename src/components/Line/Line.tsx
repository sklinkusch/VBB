/** @jsxImportSource theme-ui */

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
}

type Props = {
	line: LINE_A | LINE_B
}

const Line = ({ line }: Props) => {
	const getStyles = (line: LINE_A | LINE_B) => {
		const { product, metro, night } = line
		switch (product) {
			case "express":
				return null
			case "regional":
			case "suburban":
			case "subway":
				const { color, name } = line
				const { bg, fg } = color
				if (name === "U12")
					return {
						backgroundImage:
							"linear-gradient(to right bottom, #61993B 0 50%, #C63927 50% 100%)",
						color: "white",
					}
				if (name === "U3") return { backgroundColor: "#00694C", color: "white" }
				return { backgroundColor: bg, color: fg }
			case "tram":
				if (metro) {
					return { backgroundColor: "#F47920", color: "white" }
				}
				return { backgroundColor: "#BB1E10", color: "white" }
			case "bus":
				if (metro) {
					return { backgroundColor: "#F47920", color: "white" }
				}
				if (night) {
					return { backgroundColor: "#51565C", color: "white" }
				}
				return { backgroundColor: "#992572", color: "white" }
			case "ferry":
				return { backgroundColor: "#3481B8", color: "white" }
			default:
				return null
		}
	}
	const styles = getStyles(line)
	const { name: linenumber } = line
	return (
		<div
			className="line"
			sx={{
				textAlign: "left",
				gridColumn: ["2 / span 6", "8 / span 3"],
				display: "inline-block",
				marginInline: "2px",
			}}
		>
			{styles ? (
				<span
					sx={{
						...styles,
						display: "inline-block",
						fontWeight: "bold",
						px: "6px",
						py: "2px",
						borderRadius: "20%",
						lineHeight: 1,
					}}
				>
					{linenumber}
				</span>
			) : (
				<span>{linenumber}</span>
			)}
		</div>
	)
}

export default Line
