/** @jsxImportSource theme-ui */
import { Fragment } from "react"

const Bike = ({ remarks }) => {
  const bikeRemarks = remarks.filter((remark) => remark.code === "FB")
  const styles = { textAlign: "center", gridColumn: ["7 / span 6", "22 / span 1"]}
  return (
    <Fragment>
      {bikeRemarks.length > 0 ? (
        <div className="bike" sx={{ ...styles }}>
          <span className="fas fa-bicycle" title="bike transport" />
        </div>
      ) : (
        <div className="bike" sx={{ ...styles }} />
      )}
    </Fragment>
  )
}

export default Bike
