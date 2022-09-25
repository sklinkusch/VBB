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

const Barrier = ({ remarks }: Props) => {
  const barrierRemarks = remarks.filter((remark) => remark.code === "bf")
  return (
    <Fragment>
      {barrierRemarks.length > 0 ? (
        <div className="barrier" sx={{ textAlign: "center", gridColumn: ["1 / span 6", "21 / span 1"]}}>
          <span className="fas fa-wheelchair" title="barrier-free" />
        </div>
      ) : (
        <div className="barrier" sx={{ textAlign: "center", gridColumn: ["1 / span 6", "21 / span 1"]}} />
      )}
    </Fragment>
  )
}

export default Barrier
