/** @jsxImportSource theme-ui */
import { Fragment } from "react"

type Remarks = {
	code: string | undefined
}[]

type Props = {
	remarks: Remarks
}

const Barrier = ({ remarks }: Props) => {
	const barrierRemarks = remarks.filter((remark) => remark.code === "bf")
	return (
		<Fragment>
			{barrierRemarks.length > 0 ? (
				<div
					className="barrier"
					sx={{
						textAlign: "center",
						gridColumn: ["1 / span 6", "21 / span 1"],
						px: 0,
					}}
				>
					<span className="fas fa-wheelchair" title="barrier-free" />
				</div>
			) : (
				<div
					className="barrier"
					sx={{
						textAlign: "center",
						gridColumn: ["1 / span 6", "21 / span 1"],
						px: 0,
					}}
				/>
			)}
		</Fragment>
	)
}

export default Barrier
