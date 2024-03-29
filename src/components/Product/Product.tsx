/** @jsxImportSource theme-ui */
import train from "../../images/express.svg"
import regional from "../../images/regional.svg"
import suburban from "../../images/suburban.svg"
import subway from "../../images/subway.svg"
import metrotram from "../../images/metro-tram.svg"
import tram from "../../images/tram.svg"
import metrobus from "../../images/metro-bus.svg"
import expressbus from "../../images/express-bus.svg"
import bus from "../../images/bus.svg"
import specialbus from "../../images/special-bus.svg"
import nightbus from "../../images/night-bus.svg"
import ferry from "../../images/ferry.svg"

type Props = {
	line: {
		express: boolean
		metro: boolean
		name: string
		night: boolean
		product: string
	}
}

const Product = (props: Props) => {
	const { line } = props
	const { express, metro, name, night, product } = line
	const padding = ["unset", 0, "unset"]
	switch (product) {
		case "express":
			return (
				<div
					className="mean"
					sx={{
						textAlign: "center",
						gridColumn: ["1 / span 1", "7 / span 1"],
						px: padding,
					}}
				>
					<img src={train} alt="express" sx={{ width: "18px" }} />
				</div>
			)
		case "regional":
			return (
				<div
					className="mean"
					sx={{
						textAlign: "center",
						gridColumn: ["1 / span 1", "7 / span 1"],
						px: padding,
					}}
				>
					<img src={regional} alt="regional" sx={{ width: "18px" }} />
				</div>
			)
		case "suburban":
			return (
				<div
					className="mean"
					sx={{
						textAlign: "center",
						gridColumn: ["1 / span 1", "7 / span 1"],
						px: padding,
					}}
				>
					<img src={suburban} alt="suburban" sx={{ width: "18px" }} />
				</div>
			)
		case "subway":
			return (
				<div
					className="mean"
					sx={{
						textAlign: "center",
						gridColumn: ["1 / span 1", "7 / span 1"],
						px: padding,
					}}
				>
					<img src={subway} alt="subway" sx={{ width: "18px" }} />
				</div>
			)
		case "tram":
			return metro || name.startsWith("M") ? (
				<div
					className="mean"
					sx={{
						textAlign: "center",
						gridColumn: ["1 / span 1", "7 / span 1"],
						px: padding,
					}}
				>
					<img src={metrotram} alt="metro-tram" sx={{ width: "18px" }} />
				</div>
			) : (
				<div
					className="mean"
					sx={{
						textAlign: "center",
						gridColumn: ["1 / span 1", "7 / span 1"],
						px: padding,
					}}
				>
					<img src={tram} alt="tram" sx={{ width: "18px" }} />
				</div>
			)
		case "bus":
			return express || name.startsWith("X") ? (
				<div
					className="mean"
					sx={{
						textAlign: "center",
						gridColumn: ["1 / span 1", "7 / span 1"],
						px: padding,
					}}
				>
					<img src={expressbus} alt="express-bus" sx={{ width: "18px" }} />
				</div>
			) : metro || name.startsWith("M") ? (
				<div
					className="mean"
					sx={{
						textAlign: "center",
						gridColumn: ["1 / span 1", "7 / span 1"],
						px: padding,
					}}
				>
					<img src={metrobus} alt="metro-bus" sx={{ width: "18px" }} />
				</div>
			) : night || name.startsWith("N") ? (
				<div
					className="mean"
					sx={{
						textAlign: "center",
						gridColumn: ["1 / span 1", "7 / span 1"],
						px: padding,
					}}
				>
					<img src={nightbus} alt="night-bus" sx={{ width: "18px" }} />
				</div>
			) : name === "A05" ? (
				<div
					className="mean"
					sx={{
						textAlign: "center",
						gridColumn: ["1 / span 1", "7 / span 1"],
						px: padding,
					}}
				>
					<img src={specialbus} alt="special-bus" sx={{ width: "18px" }} />
				</div>
			) : (
				<div
					className="mean"
					sx={{
						textAlign: "center",
						gridColumn: ["1 / span 1", "7 / span 1"],
						px: padding,
					}}
				>
					<img src={bus} alt="bus" sx={{ width: "18px" }} />
				</div>
			)
		case "ferry":
			return (
				<div
					className="mean"
					sx={{
						textAlign: "center",
						gridColumn: ["1 / span 1", "7 / span 1"],
						px: padding,
					}}
				>
					<img src={ferry} alt="ferry" sx={{ width: "18px" }} />
				</div>
			)
		default:
			return (
				<div
					className="mean"
					sx={{
						textAlign: "center",
						gridColumn: ["1 / span 1", "7 / span 1"],
						px: padding,
					}}
				>
					<img src={bus} alt="bus" sx={{ width: "18px" }} />
				</div>
			)
	}
}

export default Product
