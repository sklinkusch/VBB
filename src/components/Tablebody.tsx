import React, { lazy } from "react";
const Departure = lazy(() => import("./Departure"));
const Arrival = lazy(() => import("./Arrival"));

type Remarks = {
  code: string | undefined,
  summary: string | null | undefined,
  text: string,
  type: string,
  validFrom: string | undefined,
  validUntil: string | undefined
}[]

type Props = {
  data: {
    cancelled: boolean | undefined,
    delay: number | null,
    direction: string | null,
    formerScheduledWhen?: string,
    line: {
      express: boolean,
      metro: boolean,
      mode: string,
      name: string,
      night: boolean,
      product: string,
      type: string
    },
    plannedPlatform?: string,
    plannedWhen?: string,
    platform?: number | string,
    prognosedPlatform?: string,
    prognosisType: string | null | undefined,
    provenance: string | null,
    remarks: Remarks,
    scheduledWhen?: string,
    stop: {
      id: string,
      name: string,
    },
    tripId: string,
    when?: string
  }[],
  mode: string
}

export default function Tablebody(props: Props) {
  const { data = [], mode } = props;
  return (
    <React.Fragment>
      {data !== undefined && data !== null && data.length > 0 && (
        data.map(dep => {
          const identifier = `${dep.stop.id}:${dep.tripId}.${dep.when}`;
          if(mode === "dep") {
            return <Departure dep={dep} key={identifier} />
          } else {
            return <Arrival arr={dep} key={identifier} />
          }
        })
      )}
    </React.Fragment>
  );
}
