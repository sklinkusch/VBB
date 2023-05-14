/** @jsxImportSource theme-ui */
import getLocale from "../Locales/getLocale"

type Props = {
	mode: "dep" | "arr"
}

export default function Tablehead({ mode }: Props) {
	return (
		<div
			className="row thead"
			sx={{
				fontWeight: "bold",
				display: ["none", "grid"],
				gridTemplateColumns: "repeat(24,1fr)",
			}}
		>
			<div
				className="plantime thead"
				sx={{
					fontWeight: "bold",
					display: ["none", "block"],
					textAlign: "center",
					gridColumn: "1 / span 1",
				}}
			>
				{getLocale("scheduled")}
			</div>
			<div
				className="realtime thead"
				sx={{
					fontWeight: "bold",
					display: ["none", "block"],
					textAlign: "center",
					gridColumn: "2 / span 1",
				}}
			>
				{getLocale("real")}
			</div>
			<div
				className="delay thead"
				sx={{
					fontWeight: "bold",
					display: ["none", "block"],
					textAlign: "right",
					gridColumn: "3 / span 2",
				}}
			>
				{getLocale("delay")}
			</div>
			<div
				className="mean thead"
				sx={{
					fontWeight: "bold",
					display: ["none", "block"],
					gridColumn: "5 / span 1",
				}}
			/>
			<div
				className="line thead"
				sx={{
					fontWeight: "bold",
					display: ["none", "block"],
					textAlign: "left",
					gridColumn: "6 / span 3",
				}}
			>
				{getLocale("line")}
			</div>
			{mode === "dep" ? (
				<div
					className="direction thead"
					sx={{
						fontWeight: "bold",
						display: ["none", "block"],
						textAlign: "left",
						gridColumn: "9 / span 8",
					}}
				>
					{getLocale("direction")}
				</div>
			) : (
				<div
					className="direction thead"
					sx={{
						fontWeight: "bold",
						display: ["none", "block"],
						textAlign: "left",
						gridColumn: "9 / span 8",
					}}
				>
					{getLocale("from")}
				</div>
			)}
			<div
				className="platform thead"
				sx={{
					fontWeight: "bold",
					display: ["none", "block"],
					textAlign: "center",
					gridColumn: "17 / span 2",
				}}
			>
				{getLocale("track")}
			</div>
			<div
				className="barrier thead"
				sx={{
					fontWeight: "bold",
					display: ["none", "block"],
					gridColumn: "19 / span 1 ",
				}}
			/>
			<div
				className="bike thead"
				sx={{
					fontWeight: "bold",
					display: ["none", "block"],
					gridColumn: "20 / span 1",
				}}
			/>
			<div
				className="warning thead"
				sx={{
					fontWeight: "bold",
					display: ["none", "block"],
					gridColumn: "21 / span 1",
				}}
			/>
			<div
				className="status thead"
				sx={{
					fontWeight: "bold",
					display: ["none", "block"],
					gridColumn: "22 / span 1",
				}}
			/>
			<div className="operator thead" sx={{ fontWeight: "bold", display: ["none", "none", "block"], gridColumn: "23 / span 2" }} />
		</div>
	)
}
