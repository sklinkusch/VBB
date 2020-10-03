import React from "react"

const Bike = ({ remarks }) => {
  const bikeRemarks = remarks.filter((remark) => remark.code === "FB")
  return (
    <React.Fragment>
      {bikeRemarks.length > 0 ? (
        <div className="bike col-md-1 col-6">
          <span className="fas fa-bicycle" title="bike transport" />
        </div>
      ) : (
        <div className="bike col-md-1 col-6" />
      )}
    </React.Fragment>
  )
}

export default Bike
