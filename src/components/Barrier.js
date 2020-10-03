import React from "react"

const Barrier = ({ remarks }) => {
  const barrierRemarks = remarks.filter((remark) => remark.code === "bf")
  return (
    <React.Fragment>
      {barrierRemarks.length > 0 ? (
        <div className="barrier col-md-1 col-6">
          <span className="fas fa-wheelchair" title="barrier-free" />
        </div>
      ) : (
        <div className="barrier col-md-1 col-6" />
      )}
    </React.Fragment>
  )
}

export default Barrier
