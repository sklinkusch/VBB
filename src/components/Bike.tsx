/** @jsxImportSource theme-ui */
import { Fragment } from "react"

type Props = {
  remarks: {
    code: string
  }[]
}

const Bike = ({ remarks }: Props ) => {
  const bikeRemarks = remarks.filter((remark) => remark.code === "FB")
  return (
    <Fragment>
      {bikeRemarks.length > 0 ? (
        <div className="bike" sx={{ textAlign: "center", gridColumn: ["7 / span 6", "22 / span 1"]}}>
          <span className="fas fa-bicycle" title="bike transport" />
        </div>
      ) : (
        <div className="bike" sx={{ textAlign: "center", gridColumn: ["7 / span 6", "22 / span 1"]}} />
      )}
    </Fragment>
  )
}

export default Bike
