/** @jsxImportSource theme-ui */
import { Fragment } from "react"

type Remarks = {
  categories: number[] | undefined,
  code: string | undefined,
  company: string | undefined,
  icon: {
    title: string | null | undefined,
    type: string | undefined
  },
  id: string | undefined,
  modified: string | undefined,
  priority: number | undefined | null,
  products: {
    bus: boolean | undefined,
    express: boolean | undefined,
    ferry: boolean | undefined,
    regional: boolean | undefined,
    suburban: boolean | undefined,
    subway: boolean | undefined,
    tram: boolean | undefined
  },
  summary: string | null | undefined,
  text: string,
  type: string,
  validFrom: string | undefined,
  validUntil: string | undefined
}[]

type Props = {
  remarks: Remarks
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
