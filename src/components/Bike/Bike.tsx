/** @jsxImportSource theme-ui */
import { Fragment } from "react"

type Remarks = {
	code: string | undefined
}[]

type Props = {
	remarks: Remarks
}

const Bike = ({ remarks }: Props) => {
	const bikeRemarks = remarks.filter((remark) => remark.code === "FB")
	return (
		<Fragment>
			{bikeRemarks.length > 0 ? (
				<div
					className="bike"
					sx={{
						textAlign: "center",
						gridColumn: ["6 / span 5", "6 / span 5", "22 / span 1"],
						px: 0,
					}}
				>
					<span className="fas fa-bicycle" title="bike transport" />
				</div>
			) : (
				<div
					className="bike"
					sx={{
						textAlign: "center",
						gridColumn: ["6 / span 5", "6 / span 5", "22 / span 1"],
						px: 0,
					}}
				/>
			)}
		</Fragment>
	)
}

export default Bike
