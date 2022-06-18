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

const Barrier = (props: Props) => {
  const barrierRemarks = props.remarks.filter((remark) => remark.code === "bf")
  return (
    <Fragment>
      {barrierRemarks.length > 0 ? (
        <div className="barrier" sx={{ textAlign: "center", gridColumn: ["1 / span 6", "21 / span 1"] }}>
          <span className="fas fa-wheelchair" title="barrier-free" />
        </div>
      ) : (
        <div className="barrier" sx={{ textAlign: "center", gridColumn: ["1 / span 6", "21 / span 1"] }} />
      )}
    </Fragment>
  )
}

export default Barrier
