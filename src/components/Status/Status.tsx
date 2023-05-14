/** @jsxImportSource theme-ui */

type Remarks = {
	text: string | undefined
	type: string | undefined
}[]

type Props = {
	remarks: Remarks
}

const Status = (props: Props) => {
	const { remarks } = props
	for (let i = 0; i < remarks.length; i++) {
		const { type, text } = remarks[i]
		if (type === "status") {
			return (
				<div
					className="status"
					sx={{
						textAlign: "center",
						gridColumn: ["16 / span 5", "16 / span 5", "24 / span 1"],
						px: 0,
					}}
				>
					<span className="fas fa-times" title={text} />
				</div>
			)
		}
	}
	return (
		<div
			className="status"
			sx={{
				textAlign: "center",
				gridColumn: ["16 / span 5", "16 / span 5", "24 / span 1"],
				px: 0,
			}}
		/>
	)
}

export default Status
