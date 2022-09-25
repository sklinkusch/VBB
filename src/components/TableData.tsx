import React from 'react';
import StopName from './StopName';
import Tablehead from './Tablehead';
import Tablebody from './Tablebody';

type Location = {
  id: string,
  latitude: number,
  longitude: number,
  type: string
}

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
  mode: string,
  stop: {
    id: string,
    location: Location,
    name: string,
    products: {
      bus: boolean,
      express: boolean,
      ferry: boolean,
      regional: boolean,
      suburban: boolean,
      subway: boolean,
      tram: boolean
    }
  },
  data: {
    cancelled: boolean | undefined,
    currentTripPosition: {
      latitude: number,
      longitude: number,
      type: string
    },
    delay: number | null,
    destination: {
      id: string,
      location: Location,
      name: string,
      products: {
        bus: boolean,
        express: boolean,
        ferry: boolean,
        regional: boolean,
        suburban: boolean,
        subway: boolean,
        tram: boolean
      },
      stationDHID: string,
      type: string
    },
    direction: string | null,
    formerScheduledWhen: string | null | undefined,
    line: {
      adminCode: string,
      color: {
        bg: string,
        fg: string
      },
      express: boolean,
      fahrtNr: string,
      id: string,
      metro: boolean,
      mode: string,
      name: string,
      night: boolean,
      nr: number,
      operator: {
        id: string,
        name: string,
        type: string
      },
      product: string,
      productName: string,
      type: string
    },
    origin: string | null | undefined,
    plannedPlatform: string | null | undefined,
    plannedWhen: string | null | undefined,
    platform: number | string | null | undefined,
    prognosedPlatform: string | null | undefined,
    prognosisType: string | null | undefined,
    provenance: string | null | undefined,
    remarks: Remarks,
    scheduledWhen: string | null | undefined,
    stop: {
      id: string,
      location: Location,
      name: string,
      products: {
        bus: boolean,
        express: boolean,
        ferry: boolean,
        regional: boolean,
        suburban: boolean,
        subway: boolean,
        tram: boolean
      },
      stationDHID: string,
      type: string
    },
    tripId: string,
    when: string | null
  }[],
}

export default function TableData(props: Props) {
  const { stop, data, mode } = props;
  return (
    <div>
      <StopName stop={stop} element="h3" />
      <Tablehead mode={mode} />
      <Tablebody data={data} mode={mode} />
    </div>
  );
}
