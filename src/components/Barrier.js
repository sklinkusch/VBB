/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"

const Barrier = ({ remarks }) => {
  const barrierRemarks = remarks.filter((remark) => remark.code === "bf")
  const styles = { textAlign: "center", gridColumn: ["1 / span 6", "21 / span 1"]}
  return (
    <Fragment>
      {barrierRemarks.length > 0 ? (
        <div className="barrier" sx={{ ...styles }}>
          <span className="fas fa-wheelchair" title="barrier-free" />
        </div>
      ) : (
        <div className="barrier" sx={{ ...styles }} />
      )}
    </Fragment>
  )
}

export default Barrier
