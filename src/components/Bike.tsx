/** @jsxImportSource theme-ui */
import { Fragment } from "react"

interface Remark {
  code: string
  type: string
  validFrom: string
  validUntil: string
  summary: string
  text: string
}

interface Props {
  remarks: Remark[]
}

const Bike = (props: Props) => {
  const bikeRemarks = props.remarks.filter((remark) => remark.code === "FB")
  return (
    <Fragment>
      {bikeRemarks.length > 0 ? (
        <div className="bike" sx={{ textAlign: "center", gridColumn: ["7 / span 6", "22 / span 1"] }}>
          <span className="fas fa-bicycle" title="bike transport" />
        </div>
      ) : (
        <div className="bike" sx={{ textAlign: "center", gridColumn: ["7 / span 6", "22 / span 1"] }} />
      )}
    </Fragment>
  )
}

export default Bike
