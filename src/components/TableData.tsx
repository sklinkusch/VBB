import React from 'react';
import StopName from './StopName';
import Tablehead from './Tablehead';
import Tablebody from './Tablebody';
// const StopName = lazy(() => import('./StopName'));
// const Tablehead = lazy(() => import('./Tablehead'));
// const Tablebody = lazy(() => import('./Tablebody'));

export default function TableData({ stop, data, mode }: { stop: any, mode: string, data: any }) {
  return (
    <div>
      <StopName stop={stop} element="h3" />
      <Tablehead mode={mode} />
      <Tablebody data={data} mode={mode} />
    </div>
  );
}
